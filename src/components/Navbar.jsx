import React from "react";

const Navbar = () => (
  <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-sm">
    <div className="flex items-center gap-4">
      <div className="font-bold text-xl tracking-widest">ARBCB</div>
      <ul className="flex gap-6 text-gray-700 font-medium">
        <li><a href="#" className="hover:text-blue-600">Home</a></li>
        <li><a href="#" className="hover:text-blue-600">My Plan</a></li>
        <li><a href="#" className="hover:text-blue-600">Opportunities</a></li>
        <li><a href="#" className="hover:text-blue-600">Resources</a></li>
        <li><a href="#" className="hover:text-blue-600">Support</a></li>
      </ul>
    </div>
    <div className="flex items-center gap-4">
      <input type="text" placeholder="search" className="border rounded px-2 py-1 text-sm" />
      <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center font-bold">P</div>
    </div>
  </nav>
);

export default Navbar; 