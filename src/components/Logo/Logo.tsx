export default function Logo() {
  return (
    <a href="#sobre" className="flex items-center gap-3 group">
      <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white font-bold text-lg shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-shadow duration-300">
        AC
      </div>
      <div className="hidden sm:flex flex-col">
        <span className="text-white font-bold text-sm leading-tight">Andersen</span>
        <span className="text-gray-400 text-xs">Front-end Dev</span>
      </div>
    </a>
  );
}
