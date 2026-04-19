export default function Avatar() {
  return (
    <div className="relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur-lg opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
      <img
        src="https://avatars.githubusercontent.com/u/6807751?v=4"
        alt="Andersen Cypriano"
        className="relative w-32 h-32 rounded-full border-4 border-white/10 shadow-2xl object-cover"
      />
    </div>
  );
}
