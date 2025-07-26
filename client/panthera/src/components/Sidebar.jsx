import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-[20%] h-screen bg-white border-r shadow-md flex flex-col justify-between fixed left-0 top-0 px-6 py-8">
      <div>
        {/* Panthera Logo */}
        <div className="flex items-center gap-2 mb-6">
          <div className="text-3xl">🐾</div>
          <h1 className="text-2xl font-bold text-blue-800">Panthera</h1>
        </div>

        {/* Section */}
        <div className="mt-10">
          <p className="uppercase text-gray-400 text-sm mb-2">Data Analytics</p>
          <nav className="flex flex-col gap-4 text-gray-600 text-md">
            <NavLink to="/market" className={({ isActive }) => isActive ? "text-blue-600 font-semibold" : ""}>
              Market View
            </NavLink>
            <NavLink to="/acquisition" className={({ isActive }) => isActive ? "text-blue-600 font-semibold" : ""}>
              Acquisition View
            </NavLink>
            <NavLink to="/urls" className={({ isActive }) => isActive ? "text-blue-600 font-semibold" : ""}>
              URLs
            </NavLink>
          </nav>
        </div>
      </div>

      {/* Chat Option */}
      <div className="text-center text-gray-400 text-sm mt-10">
        💬 Chat with AI System
      </div>
    </div>
  );
}
