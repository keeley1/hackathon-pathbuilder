import React from "react";

const Dashboard = ({ name }) => (
  <div className="bg-card p-8 rounded-xl shadow-md w-full max-w-lg">
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-2xl font-bold text-text">
        {name ? `${name}'s Dashboard` : "Dashboard"}
      </h2>
      <a href="#" className="text-primary text-sm">See all</a>
    </div>
    <div className="mb-6">
      <h3 className="font-semibold mb-2 text-text">Suggested roles</h3>
      <ul className="space-y-2">
        <li className="border rounded-xl px-3 py-2 flex justify-between items-center bg-primary-light">
          <span>
            <span className="font-medium text-text">Software Engineer</span>
            <span className="block text-xs text-text-muted">Web Apps, APIs</span>
          </span>
          <a href="#" className="text-primary text-sm">&gt;</a>
        </li>
        <li className="border rounded-xl px-3 py-2 flex justify-between items-center bg-primary-light">
          <span>
            <span className="font-medium text-text">QA Tester</span>
            <span className="block text-xs text-text-muted">Automation, Manual</span>
          </span>
          <a href="#" className="text-primary text-sm">&gt;</a>
        </li>
        <li className="border rounded-xl px-3 py-2 flex justify-between items-center bg-primary-light">
          <span>
            <span className="font-medium text-text">DevOps Engineer</span>
            <span className="block text-xs text-text-muted">CI/CD, Cloud</span>
          </span>
          <a href="#" className="text-primary text-sm">&gt;</a>
        </li>
      </ul>
    </div>
    <div className="flex gap-4">
      <div className="flex-1 bg-accent-light rounded-xl p-4 flex flex-col items-center">
        <div className="w-12 h-12 bg-accent rounded-full mb-2 flex items-center justify-center">
          {/* Placeholder for image/icon */}
        </div>
        <div className="font-medium text-text">Git & GitHub</div>
        <a href="#" className="text-primary text-xs mt-1">View</a>
      </div>
      <div className="flex-1 bg-primary-light rounded-xl p-4 flex flex-col items-center">
        <div className="w-12 h-12 bg-primary rounded-full mb-2 flex items-center justify-center">
          {/* Placeholder for image/icon */}
        </div>
        <div className="font-medium text-text">Coding Challenges</div>
        <a href="#" className="text-primary text-xs mt-1">View</a>
      </div>
    </div>
  </div>
);

export default Dashboard; 