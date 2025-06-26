import React from "react";

const progressSteps = [
  "Set Goals",
  "Assess Experience",
  "Define Availability",
  "Explore Roles",
  "Apply",
];

const recommendedRoles = [
  { title: "Product Manager", company: "Software Startup", location: "Remote" },
  { title: "Business Analyst", company: "Financial Services", location: "Remote" },
  { title: "IT Consultant", company: "Healthcare Company", location: "San Francisco, CA" },
];

const upcomingTasks = [
  { task: "Update resume", date: "April 18" },
  { task: "Complete skills assessment", date: "22" },
  { task: "Research companies", date: "April 26" },
];

const MyPlan = () => (
  <div className="bg-card p-8 rounded-xl shadow-md w-full">
    <div className="flex items-center justify-between mb-6">
      <div>
        <h2 className="text-2xl font-bold text-text mb-1">My Plan</h2>
        <p className="text-text-muted">Let's get started on your career journey</p>
      </div>
      <div className="w-24 h-24 bg-primary-light rounded-full flex items-center justify-center">
        {/* Illustration placeholder */}
      </div>
    </div>
    <div className="mb-6">
      <div className="flex items-center gap-4 mb-2">
        {progressSteps.map((step, idx) => (
          <React.Fragment key={step}>
            <div className={`flex flex-col items-center ${idx === 0 ? "text-primary" : "text-text-muted"}`}>
              <div className={`w-4 h-4 rounded-full ${idx === 0 ? "bg-primary" : "bg-primary-light"}`}></div>
              <span className="text-xs mt-1">{step}</span>
            </div>
            {idx < progressSteps.length - 1 && <div className="flex-1 h-1 bg-primary-light mx-1" />}
          </React.Fragment>
        ))}
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <div className="mb-4">
          <h3 className="font-semibold text-text mb-1">Summary goal</h3>
          <div className="bg-primary-light rounded-lg p-4">
            <div className="font-bold text-text">Project Manager in Tech</div>
            <div className="text-sm text-text-muted">Current Experience: Intermediate</div>
            <div className="text-sm text-text-muted">Weekly Availability: 30 hours</div>
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-text mb-1">Recommended roles</h3>
          <div className="grid grid-cols-1 gap-2">
            {recommendedRoles.map((role) => (
              <div key={role.title} className="bg-accent-light rounded-lg p-3">
                <div className="font-medium text-text">{role.title}</div>
                <div className="text-xs text-text-muted">{role.company}</div>
                <div className="text-xs text-text-muted">{role.location}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <h3 className="font-semibold text-text mb-1">Upcoming tasks</h3>
        <div className="bg-primary-light rounded-lg p-4 mb-4">
          <ul className="space-y-2">
            {upcomingTasks.map((task) => (
              <li key={task.task} className="flex justify-between text-text">
                <span>{task.task}</span>
                <span className="text-text-muted text-xs">{task.date}</span>
              </li>
            ))}
          </ul>
        </div>
        <h3 className="font-semibold text-text mb-1">Progress tracker</h3>
        <div className="bg-accent-light rounded-lg p-4">
          <div className="w-full bg-primary-light rounded-full h-3 mb-2">
            <div className="bg-primary h-3 rounded-full" style={{ width: '40%' }}></div>
          </div>
          <div className="text-xs text-text-muted">40% complete</div>
        </div>
      </div>
    </div>
  </div>
);

export default MyPlan; 