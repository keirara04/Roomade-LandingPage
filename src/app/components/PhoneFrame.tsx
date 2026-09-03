import Image, { type StaticImageData } from "next/image";

type Props = {
  src: StaticImageData | string;
  alt: string;
  /** Rendered CSS width of the whole frame. */
  className?: string;
  /** Resting 3D rotation. RevealOnScroll straightens it to 0 on entry. */
  yaw?: string;
  pitch?: string;
  /**
   * Crop the screenshot to a portion of the screen instead of showing the
   * whole device. Detail shots read better than a full 1320x2868 shrunk to
   * thumbnail size, where the app's 12pt labels turn to mush.
   */
  focus?: "full" | "top" | "middle";
  /** Hero only. Everything below the fold stays lazy. */
  eager?: boolean;
  sizes?: string;
};

const ASPECT: Record<NonNullable<Props["focus"]>, string> = {
  full: "1320 / 2868",
  top: "1320 / 1500",
  middle: "1320 / 1700",
};

const POSITION: Record<NonNullable<Props["focus"]>, string> = {
  full: "center",
  top: "top",
  middle: "center",
};

export default function PhoneFrame({
  src,
  alt,
  className = "w-[15rem]",
  yaw = "0deg",
  pitch = "0deg",
  focus = "full",
  eager = false,
  sizes = "(max-width: 640px) 70vw, 20rem",
}: Props) {
  return (
    <div
      className={`phone-frame ${className}`}
      style={
        {
          "--phone-yaw": yaw,
          "--phone-pitch": pitch,
        } as React.CSSProperties
      }
    >
      <div
        className="overflow-hidden rounded-[34px] bg-surface-sunken"
        style={{ aspectRatio: ASPECT[focus] }}
      >
        <Image
          src={src}
          alt={alt}
          sizes={sizes}
          quality={90}
          // Next 16 deprecated `priority`; eager + high fetchPriority is the
          // replacement it points you at for an LCP image.
          loading={eager ? "eager" : "lazy"}
          fetchPriority={eager ? "high" : "auto"}
          className="h-full w-full object-cover"
          style={{ objectPosition: POSITION[focus] }}
        />
      </div>
    </div>
  );
}
