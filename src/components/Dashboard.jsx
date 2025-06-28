import React, { useEffect, useState } from "react";

const DashboardQuoteNudge = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed top-8 right-8 z-50 max-w-xs shadow-lg rounded-xl bg-accent-light border-l-8 border-accent p-5 flex flex-col items-start animate-bounce-in">
      <button
        onClick={() => setShow(false)}
        className="absolute top-2 right-2 text-accent hover:text-accent-dark text-lg font-bold focus:outline-none"
        aria-label="Dismiss"
      >
        ×
      </button>
      <span className="text-3xl text-accent mb-2">💡</span>
      <span className="italic text-base text-text mb-2">
        “The most effective way to do it, is to do it.”
      </span>
      <span className="block text-xs text-text-muted text-right w-full">
        — Amelia Earhart
      </span>
    </div>
  );
};

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

  // Split tasks
  const incompleteTasks = tasks.filter(t => !t.completed);
  const completedTasks = tasks.filter(t => t.completed);

  return (
    <div className="bg-card p-8 rounded-xl shadow-md w-full max-w-lg">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-text">
          {name ? `${name}'s Dashboard` : "Dashboard"}
        </h2>
        <a href="#" className="text-primary text-sm">See all</a>
      </div>
      <div className="mb-6">
      <DashboardQuoteNudge />
        <h3 className="font-semibold mb-2 text-text">Today's Tasks</h3>
        <ul className="space-y-2">
          {incompleteTasks.map(task => (
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
                Progress: {task.progress}%
              </div>
            </li>
          ))}
          {completedTasks.length > 0 && (
            <li className="font-semibold mb-2 text-text">Completed Tasks</li>
          )}
          {completedTasks.map(task => (
            <li key={task.id} className="border rounded-xl px-3 py-2 bg-green-100">
              <div className="font-medium text-text">{task.name}</div>
              <div className="text-xs text-text-muted">{task.description}</div>
              <div className="w-full bg-green-200 rounded-full h-2 mt-2">
                <div
                  className="bg-green-500 h-2 rounded-full"
                  style={{ width: `${task.progress}%` }}
                ></div>
              </div>
              <div className="text-xs text-green-700 mt-1">
                Completed
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-4 flex justify-end">
          <div className="text-sm text-text">
            <strong>Overall Progress:</strong> {overallProgress}%
          </div>
        </div>
      </div>
      <h3 className="font-semibold mb-2 text-text">Quick Wins</h3>
      <div className="flex gap-4 mt-2">
        <div className="flex-1 bg-accent-light rounded-xl p-4 flex flex-col items-center">
          <div className="font-bold text-text mb-2">Git & GitHub</div>
          <div className="w-12 h-12 bg-accent rounded-full mb-2 flex items-center justify-center">
            {/* Placeholder for image/icon */}
          </div>
          <a href="#" className="text-primary text-xs mt-1">View</a>
        </div>
        <div className="flex-1 bg-primary-light rounded-xl p-4 flex flex-col items-center">
          <div className="font-bold text-text mb-2">Coding Challenges</div>
          <div className="w-12 h-12 bg-primary rounded-full mb-2 flex items-center justify-center">
            {/* Placeholder for image/icon */}
          </div>
          <a href="#" className="text-primary text-xs mt-1">View</a>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 