import type { GradientButtonProps } from "../../interfaces/Buttons";



export default function GradientButton({ children, ...props }: GradientButtonProps) {
  return (
    <a
      className={` w-[11rem] block text-center mx-auto sm:px-6 py-2 sm:py-3 rounded-lg bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white font-medium transition-all duration-300 hover:shadow-xl ease`}
      {...props}
    >
      {children}
    </a>
  );
}