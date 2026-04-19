import type { GradientButtonProps } from "../../interfaces/Buttons";

export default function GradientButton({ children, ...props }: GradientButtonProps) {
  return (
    <a
      className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold text-white bg-blue-600 rounded-full overflow-hidden transition-all duration-300 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105 mx-auto"
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </span>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </a>
  );
}
