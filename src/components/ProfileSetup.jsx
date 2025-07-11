import React, { useState } from "react";

const ProfileSetup = ({ onContinue }) => {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [gap, setGap] = useState("");
  const [industry, setIndustry] = useState("");
  const [experience, setExperience] = useState("");
  const [availability, setAvailability] = useState("");
  const [confidence, setConfidence] = useState(50);
  const [hasResponsibilities, setHasResponsibilities] = useState(false);
  const [responsibilityDetails, setResponsibilityDetails] = useState("");

  const industryOptions = [
    "Technology",
    "Finance",
    "Healthcare",
    "Education",
    "Retail",
    "Other"
  ];

  return (
    <div className="bg-white p-12 rounded-xl shadow-md w-full max-w-xl">
      <h2 className="text-3xl font-bold mb-4">Set up your profile</h2>
      <div className="mb-4">
        <label className="block mb-1 font-medium">Your name</label>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          className="w-full border rounded px-3 py-2"
          placeholder="Enter your name"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-medium">Career goals</label>
        <select value={goal} onChange={e => setGoal(e.target.value)} className="w-full border rounded px-3 py-2">
          <option value="">Select..</option>
          <option value="Project Manager">Project Manager</option>
          <option value="Senior Software Engineer">Senior Software Engineer</option>
          <option value="Lead Engineer">Lead Engineer</option>
          <option value="Data Scientist">Data Scientist</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-medium">How many years have you been out of work?</label>
        <select value={gap} onChange={e => setGap(e.target.value)} className="w-full border rounded px-3 py-2">
          <option value="">Select..</option>
          <option value="None">None</option>
          <option value="Less than 1 year">Less than 1 year</option>
          <option value="1-2 years">1-2 years</option>
          <option value="3-5 years">3-5 years</option>
          <option value="5+ years">5+ years</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-medium">Industry experience</label>
        <div className="flex flex-col gap-2">
          {industryOptions.map(option => (
            <label key={option} className="flex items-center gap-2">
              <input
                type="checkbox"
                value={option}
                checked={industry.includes(option)}
                onChange={e => {
                  if (e.target.checked) {
                    setIndustry([...industry, option]);
                  } else {
                    setIndustry(industry.filter(i => i !== option));
                  }
                }}
              />
              {option}
            </label>
          ))}
        </div>
        {industry.length > 0 && (
          <div className="mt-2 text-sm text-gray-700">
            <span className="font-medium">Selected:</span> {industry.join(", ")}
          </div>
        )}
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-medium">Current experience</label>
        <select value={experience} onChange={e => setExperience(e.target.value)} className="w-full border rounded px-3 py-2">
          <option value="">Select..</option>
          <option value="0-2 years">0-2 years</option>
          <option value="3-5 years">3-5 years</option>
          <option value="5-10 years">5-10 years</option>
          <option value="10+ years">10+ years</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-medium">Time availability</label>
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-2">
            <input type="radio" name="availability" value="10-20" checked={availability === "10-20"} onChange={e => setAvailability(e.target.value)} />
            10-20 hours per week
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="availability" value="20-30" checked={availability === "20-30"} onChange={e => setAvailability(e.target.value)} />
            20-30 hours per week
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="availability" value="30+" checked={availability === "30+"} onChange={e => setAvailability(e.target.value)} />
            30+ hours per week
          </label>
        </div>
      </div>
      <div className="mb-4">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={hasResponsibilities}
            onChange={e => setHasResponsibilities(e.target.checked)}
          />
          I have additional time responsibilities (e.g., looking after children, working long hours)
        </label>
        {hasResponsibilities && (
          <textarea
            className="mt-3 w-full border rounded px-3 py-2"
            rows={3}
            placeholder="Please provide details about your responsibilities..."
            value={responsibilityDetails}
            onChange={e => setResponsibilityDetails(e.target.value)}
          />
        )}
      </div>
      <div className="mb-6">
        <label className="block mb-1 font-medium">Current confidence level</label>
        <div className="flex items-center gap-4">
          <input
            type="range"
            min="0"
            max="100"
            value={confidence}
            onChange={e => setConfidence(Number(e.target.value))}
            className="w-full accent-primary"
          />
          <span className="w-12 text-center font-semibold">{confidence}%</span>
        </div>
      </div>
      <button
        onClick={() => onContinue({ name, goal, industry, experience, availability, confidence, hasResponsibilities, responsibilityDetails })}
        className="w-full bg-blue-600 text-white py-2 rounded font-semibold mt-2"
      >
        Continue
      </button>
    </div>
  );
};

export default ProfileSetup; 