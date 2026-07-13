type MarkProps = {
  className?: string;
};

/** Decorative BT mark used in eyebrows and section accents. */
export function Bowtie({ className = "tie" }: MarkProps) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 39 111"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M19.2197 110.79L38.4404 95.5195L27.0205 45.4199H11.4199L0 95.5195L19.2197 110.79Z" />
      <path d="M11.1699 27.3193H27.2803L34.8203 0H3.62988L11.1699 27.3193Z" />
    </svg>
  );
}
