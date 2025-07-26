export default function Navbar() {
  return (
    <div className="bg-white px-6 py-3 flex items-center justify-between shadow-sm sticky top-0 z-10">
      <h2 className="text-lg font-semibold text-slate-800">Dashboard</h2>
      <div className="flex gap-4 items-center">
        <button>🔔</button>
        <button>🌙</button>
        <button>ℹ️</button>
        <div className="w-8 h-8 rounded-full bg-gray-400" />
      </div>
    </div>
  );
}
