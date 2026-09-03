# --- deps ---
FROM node:22-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
# Not `npm ci`: the committed lockfile is generated on macOS and is missing
# the linux-musl variants of Tailwind v4's lightningcss optional native
# deps (@emnapi/*). `npm ci` refuses to run against a lockfile that doesn't
# list every platform variant; plain `npm install` resolves and installs
# the right ones for this container instead of erroring.
RUN npm install

# --- build ---
FROM node:22-alpine AS builder
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# --- run ---
FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
RUN addgroup --system --gid 1001 nodejs \
  && adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

CMD ["node", "server.js"]
