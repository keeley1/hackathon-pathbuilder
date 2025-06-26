import React, { useEffect, useState } from "react";

const Dashboard = ({ name }) => {
  const [tasks, setTasks] = useState([]);
  const [overallProgress, setOverallProgress] = useState(0);

  useEffect(() => {
    fetch("http://localhost:8080/taskprogress")
      .then(res => res.json())
      .then(data => {
        setTasks(data.tasks);
        setOverallProgress(data.overallProgress);
      });
  }, []);

  return (
    <div className="bg-card p-8 rounded-xl shadow-md w-full max-w-lg">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-text">
          {name ? `${name}'s Dashboard` : "Dashboard"}
        </h2>
        <a href="#" className="text-primary text-sm">See all</a>
      </div>
      <div className="mb-6">
        <h3 className="font-semibold mb-2 text-text">Tasks</h3>
        <ul className="space-y-2">
          {tasks.map(task => (
            <li key={task.id} className="border rounded-xl px-3 py-2 bg-primary-light">
              <div className="font-medium text-text">{task.name}</div>
              <div className="text-xs text-text-muted">{task.description}</div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div
                  className="bg-primary h-2 rounded-full"
                  style={{ width: `${task.progress}%` }}
                ></div>
              </div>
              <div className="text-xs text-text-muted mt-1">
                {task.completed ? "Completed" : `Progress: ${task.progress}%`}
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-4 text-sm text-text">
          <strong>Overall Progress:</strong> {overallProgress}%
        </div>
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
};

export default Dashboard; 