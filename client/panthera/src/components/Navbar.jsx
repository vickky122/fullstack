import { useState } from 'react';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark', !darkMode);
  };

  return (
    <div className={`px-6 py-3 flex items-center justify-between shadow-sm sticky top-0 z-10 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <h2 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-slate-800'}`}>Dashboard</h2>
      <div className="flex gap-4 items-center">
        <button>🔔</button>
        <button onClick={toggleTheme}>{darkMode ? '🌞' : '🌙'}</button>
        <button>ℹ️</button>
        <img src="https://img.icons8.com/?size=100&id=108652&format=png&color=000000" alt="User" className="w-8 h-8 rounded-full" />
      </div>
    </div>
  );
}
