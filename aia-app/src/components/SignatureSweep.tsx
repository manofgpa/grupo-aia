interface SignatureSweepProps {
  readonly className?: string
}

export function SignatureSweep({ className = '' }: SignatureSweepProps) {
  return (
    <svg
      viewBox="0 0 200 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M0 15 C30 15, 40 5, 70 5 C100 5, 110 12, 140 10 C160 9, 180 6, 200 8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}
