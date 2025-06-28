import React from "react";

const LoadingPlan = () => (
  <div className="flex flex-col items-center justify-center h-full w-full">
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-primary border-solid mb-6"></div>
    <h2 className="text-2xl font-bold text-primary mb-2 text-center">
      Creating your personalised learning plan for
    </h2>
    <h1 className="text-4xl font-bold text-primary-dark mb-2 text-center">
      Senior Software Engineer
    </h1>
    <p className="text-text-muted text-center">This will only take a moment!</p>
  </div>
);

export default LoadingPlan;