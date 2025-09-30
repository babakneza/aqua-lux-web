export const WaveDivider = ({ className = '' }: { className?: string }) => {
  return (
    <div className={`wave-divider ${className}`}>
      <svg
        viewBox="0 0 1200 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M0 30 Q 150 10, 300 30 T 600 30 T 900 30 T 1200 30 V 60 H 0 Z"
          fill="currentColor"
          className="text-accent/10 animate-wave"
        />
        <path
          d="M0 40 Q 200 20, 400 40 T 800 40 T 1200 40 V 60 H 0 Z"
          fill="currentColor"
          className="text-accent/5"
        />
      </svg>
    </div>
  );
};
