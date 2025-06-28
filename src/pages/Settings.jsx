import React, { useState } from "react";

const availabilityOptions = [
  { value: "10-20", label: "10-20 hours per week" },
  { value: "20-30", label: "20-30 hours per week" },
  { value: "30+", label: "30+ hours per week" },
];

const Settings = () => {
  const [availability, setAvailability] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [theme, setTheme] = useState("light");
  const [saveMessage, setSaveMessage] = useState("");

  const handleAvailabilityChange = (value) => {
    setAvailability(value);
    setShowMessage(true);
    // Here you could also trigger an API call to update the plan
  };

  const handleSave = (e) => {
    e.preventDefault();
    setSaveMessage("Settings saved successfully!");
    setTimeout(() => setSaveMessage(""), 2000);
    // Here you could also trigger an API call to save settings
  };

  return (
    <form onSubmit={handleSave} className="bg-card p-12 rounded-2xl shadow-md w-full max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-text mb-8">Settings</h2>
      {/* Availability Section */}
      <div className="mb-10">
        <h3 className="font-semibold text-lg text-text mb-3">Change Time Availability</h3>
        <div className="flex flex-col gap-3">
          {availabilityOptions.map(option => (
            <label key={option.value} className="flex items-center gap-3 text-base">
              <input
                type="radio"
                name="availability"
                value={option.value}
                checked={availability === option.value}
                onChange={() => handleAvailabilityChange(option.value)}
                className="accent-primary"
              />
              {option.label}
            </label>
          ))}
        </div>
        {showMessage && (
          <div className="mt-4 text-green-700 bg-green-100 rounded p-3">
            Your learning plan will be updated based on your new availability.
          </div>
        )}
      </div>
      <hr className="my-8 border-primary-light" />
      {/* Notification Preferences */}
      <div className="mb-10">
        <h3 className="font-semibold text-lg text-text mb-3">Notifications</h3>
        <label className="flex items-center gap-3 text-base">
          <input
            type="checkbox"
            checked={notifications}
            onChange={() => setNotifications((n) => !n)}
            className="accent-primary"
          />
          Enable email notifications for new tasks and progress updates
        </label>
      </div>
      <hr className="my-8 border-primary-light" />
      {/* Theme Mode */}
      <div className="mb-10">
        <h3 className="font-semibold text-lg text-text mb-3">Theme</h3>
        <div className="flex gap-6">
          <label className="flex items-center gap-2 text-base">
            <input
              type="radio"
              name="theme"
              value="light"
              checked={theme === "light"}
              onChange={() => setTheme("light")}
              className="accent-primary"
            />
            Light
          </label>
          <label className="flex items-center gap-2 text-base">
            <input
              type="radio"
              name="theme"
              value="dark"
              checked={theme === "dark"}
              onChange={() => setTheme("dark")}
              className="accent-primary"
            />
            Dark
          </label>
        </div>
      </div>
      <div className="flex justify-end mt-8">
        <button type="submit" className="bg-primary text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-primary-dark transition">
          Save
        </button>
      </div>
      {saveMessage && (
        <div className="mt-4 text-green-700 bg-green-100 rounded p-3 text-center">
          {saveMessage}
        </div>
      )}
    </form>
  );
};

export default Settings; 