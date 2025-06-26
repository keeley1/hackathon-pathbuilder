import React from "react";

const navItems = [
  { label: "Dashboard", icon: "🏠" },
  { label: "My Plan", icon: "📋" },
  { label: "Opportunities", icon: "💼" },
  { label: "Resources", icon: "📚" },
  { label: "Settings", icon: "⚙️" },
];

const Sidebar = ({ active = "Dashboard", onNavigate }) => (
  <aside className="bg-sidebar h-full min-h-screen w-56 flex flex-col py-8 px-4 rounded-xl shadow-md">
    <div className="mb-8 text-2xl font-extrabold tracking-widest text-primary">Navigating You</div>
    <nav className="flex flex-col gap-2">
      {navItems.map((item) => (
        <button
          key={item.label}
          onClick={() => onNavigate && onNavigate(item.label)}
          className={`flex items-center gap-3 px-4 py-2 rounded-lg text-lg font-medium transition-colors
            ${active === item.label ? "bg-primary text-white" : "text-text hover:bg-primary-light"}`}
        >
          <span className="text-xl">{item.icon}</span>
          {item.label}
        </button>
      ))}
    </nav>
  </aside>
);

export default Sidebar; 