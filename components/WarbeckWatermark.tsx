type WarbeckWatermarkProps = {
  small?: boolean;
  inverse?: boolean;
};

/**
 * A faint, non-interactive on-page watermark for Warbeck media.
 * Keep it over imagery only; never cover interactive controls or captions.
 * The original optimised WebP sources remain untouched and below 150 KB.
 */
export default function WarbeckWatermark({ small = false, inverse = false }: WarbeckWatermarkProps) {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-[1] flex select-none items-center justify-center overflow-hidden"
    >
      <span
        className={
          "block -rotate-[23deg] whitespace-nowrap font-extrabold uppercase tracking-[0.21em] opacity-[0.14] " +
          (small ? "text-[10px] sm:text-[13px] " : "text-[15px] sm:text-[20px] lg:text-[25px] ") +
          (inverse ? "text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)]" : "text-[#344549]")
        }
      >
        WEDRAWPLANS
      </span>
    </span>
  );
}
