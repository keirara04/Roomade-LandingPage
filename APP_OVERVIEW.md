# Roomade iOS — App Overview

Current-state reference for the native SwiftUI app as it actually exists in
this repo today. `SWIFT_PORT_SPEC.md` is the original Flutter→Swift porting
plan (written before the Swift app existed); this doc describes what got
built. Where they conflict, this doc — read against the actual code — wins.

## What the app is

Roomade is a shared-flat / roommate coordination app. Housemates share a
**House Board** of cards across three types:

- **Issue / Need** — something to fix or buy. Claimed by one housemate,
  resolved when done. Status: `open → claimed → resolved` (reopenable).
- **Spend** — a shared expense, equal-split across household members, each
  member's share tracked paid/unpaid individually. Status:
  `pending_settlement → settled` (or `voided`).
- **Heads-Up** — a text announcement (e.g. "guest staying overnight") with
  per-member acknowledgement, no resolve workflow. Status: `posted → expired`.

Supporting flows: household creation/join (invite link + QR), an activity
feed (chronological card event log), a Settle Up screen (net balances +
per-share "mark as paid"), and an account/settings screen.

## Root flow (`roomade_iosApp.swift`)

```
roomade_iosApp (@main)
  └─ AuthGateView                        — switches on AuthViewModel.state
       ├─ .loading        → ProgressView
       ├─ .signedOut       → SignInView
       └─ .signedIn(session) → HouseholdGateView(authViewModel, session)
              └─ HouseholdSession (@Observable, injected via .environment)
                   ├─ .loading         → loading UI
                   ├─ .needsOnboarding → OnboardingChoiceView (create/join household)
                   ├─ .active(household) → HomeShellView
                   └─ .failed(message)  → error UI
```

`HouseholdSession` (`Features/Home/HouseholdSession.swift`) is the
cross-cutting "which household am I in" state — replaces what would be
prop-drilling or a Redux store in other stacks. It's `@Observable`, owns the
active `Household`, the member list, and `displayName(for:)` lookups. Injected
once at the tab-shell level via `.environment(_:)`, read anywhere below via
`@Environment(HouseholdSession.self)`.

## Tab shell (`Features/Home/HomeShellView.swift`)

Five items in a `TabView`, but only four are real navigable destinations:

| Tab | Content | Notes |
|---|---|---|
| Board | `BoardView` | Main dashboard, cards grouped by status, plus a trimmed "Recent Activity" section |
| Chat | `ChatView` | Household group chat, realtime |
| **Add** | *(none — see below)* | Not a real screen; intercepted before it's ever selected |
| Settle Up | `SettlementView` | Net balances, mark shares paid |
| Settings | `AccountView` | Profile, currency, leave/delete household, engagement-streak badge |

Activity used to be its own tab; it's now a trimmed section embedded in
`BoardView` (`BoardActivitySection`), with a "See All Activity" link to the
full `ActivityView` feed pushed onto Board's nav stack. The tab slot Activity
vacated now holds Chat. Full rationale and the backend migration this
required (`messages`, `member_streaks`, a new push-fan-out trigger) is in
`docs/CHAT_AND_STREAKS.md`.

The Add tab renders `Color.clear` and is never actually shown or selected —
an invisible tap-catcher overlaid on top of it swallows the touch and opens
`ComposeCardView` as a sheet instead, so the tab bar's own selection
highlight never moves off whatever tab you're actually on. Creating a card
does **not** force-navigate you to Board; it just refreshes the board's data
in the background for next time. Full history/rationale of this specific
flow — including the design iterations that didn't work — is in
`docs/ADD_BUTTON_COMPOSE.md`.

## Feature module layout

Each feature folder under `Features/` roughly follows: `*View.swift` (UI) +
`*ViewModel.swift` (`@Observable`, per-screen local state) + `*Repository.swift`
(thin wrapper over `supabase-swift` calls, one per feature) + `*ErrorMapper.swift`
(maps Supabase/Postgres errors to user-facing strings).

```
Features/
  Auth/        SignInView, ResetPasswordView, AuthGateView, AuthViewModel,
               AuthRepository, AppleSignInNonce, field/validation helpers
  Home/        HomeShellView (tab shell), HouseholdGateView, HouseholdSession,
               ComposeCardView (Add-tab compose sheet), MembersRepository
  Chat/        ChatView, ChatViewModel, ChatRepository, ChatMessage —
               household group chat, Supabase Realtime
  HouseBoard/  BoardView + BoardViewModel + CardsRepository, AllCardsView,
               CreateHouseholdView, OnboardingChoiceView, InviteShareView
               (QR + link), JoinHouseholdView, HouseholdRepository
  CardDetail/  CardDetailView + CardDetailViewModel + CardDetailRepository —
               shared detail screen branching by card type; activity log,
               claim/resolve/ack actions, attachments, comments
  Issue/       CreateIssueView, CreateIssueViewModel, IssueRepository,
               AttachmentsRepository, ImagePreparer (photo downscale/encode)
  Spend/       CreateSpendView, CreateSpendViewModel, SpendRepository,
               SpendValidation
  HeadsUp/     CreateHeadsUpView, CreateHeadsUpViewModel, HeadsUpRepository
  Splits/      SettlementView + SettlementViewModel + SplitsRepository,
               BalanceCalculator (client-side net-balance math)
  Activity/    ActivityView + ActivityViewModel + ActivityRepository
  Account/     AccountView + AccountViewModel + AccountRepository,
               AvatarsRepository/AvatarURLCache, MemberAdminViewModel,
               ProfilePhotoViewModel
  Notifications/ PushNotificationsCoordinator, PushTokenRepository —
               no screen, background token-lifecycle only
```

`Core/` holds cross-feature shared code: `SupabaseClient.swift` (client
singleton + config), `Models/` (`Card`, `CardActivity`, `CardAcknowledgement`,
`Expense`, `Household`, `Invite`, `Member`, `MemberStreak`, `Attachment` —
`Codable` structs matching Postgres tables 1:1, snake_case `CodingKeys`), `Theme.swift`
(button styles, `Metrics` spacing scale, `appBackground()`/`listScreenBackground()`
modifiers), `Currency.swift`, `LocalPrefs.swift` (`UserDefaults` wrapper),
`PreviewData.swift` (SwiftUI preview fixtures).

## State management pattern

No Redux/TCA. Per-screen `@Observable` view models hold local UI state;
repositories are plain types wrapping `supabase-swift` calls directly — no
extra abstraction/ORM layer. Auth state is driven off Supabase's own
`authStateChanges` stream. This mirrors the original Flutter app's
deliberately simple `StatefulWidget` + `setState` approach (see
`SWIFT_PORT_SPEC.md` §4 for the full rationale) — nothing heavier was
introduced during the native rewrite.

## Backend (Supabase — unchanged, reused as-is)

Same hosted Supabase project serves this client; all business logic lives
server-side in Postgres RPCs / Edge Functions, none in the Swift code.
`Core/SupabaseClient.swift` reads `SUPABASE_URL` / `SUPABASE_PUBLISHABLE_KEY`
from `Info.plist` (populated via a git-ignored `Secrets.plist` — never
hardcoded). Full schema (tables, RLS notes), the Edge Function list
(`accept-invite`, `create-spend`, `transition-card`, `mark-share-paid`,
`send-notification`, etc.), and the push-notification outbox pattern are
documented in `SWIFT_PORT_SPEC.md` §5–6 and still accurate — nothing on the
backend side changed while building this client.

## Dependencies (Swift Package Manager)

Only two remote packages, matching `SWIFT_PORT_SPEC.md` §7's plan exactly:

- `supabase-swift` — official Supabase SDK (auth, Postgres, Storage, RPC calls,
  Realtime — used for the first time by Chat, see `docs/CHAT_AND_STREAKS.md`)
- `firebase-ios-sdk` — `FirebaseCore` + `FirebaseMessaging` products only (push
  notifications via FCM, same backend outbox pattern as the Flutter app)

No routing library, no state-management package, no image library beyond
`PhotosUI`/`CoreGraphics` — kept intentionally minimal.

## Where to look next

- `docs/SWIFT_PORT_SPEC.md` — original porting plan: full DB schema, RLS
  notes, Edge Function contracts, entitlements, deep-link config. Still the
  source of truth for backend/infra details.
- `docs/ADD_BUTTON_COMPOSE.md` — deep dive on the Add-tab compose flow: every
  design iteration tried, the bugs hit and fixed along the way, and the
  tab-bar pill-jump fix.
- `docs/CHAT_AND_STREAKS.md` — household chat + engagement streak tracker:
  the new backend migration (in the separate `Roomade` repo), the Realtime
  wiring, and why no new Edge Function was needed.
