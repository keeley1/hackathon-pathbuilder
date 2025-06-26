import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import ProfileSetup from "./components/ProfileSetup";
import Dashboard from "./components/Dashboard";
import MyPlan from "./pages/MyPlan";
import AccessibilitySettings from "./components/AccessibilitySettings";
import "./App.css";

function App() {
  const [profileComplete, setProfileComplete] = useState(false);
  const [profile, setProfile] = useState(null);
  const [activePage, setActivePage] = useState("Dashboard");
  const [font, setFont] = useState("");
  const [textSize, setTextSize] = useState(16);
  const [showAccessibility, setShowAccessibility] = useState(false);

  const handleContinue = (data) => {
    setProfile(data);
    setProfileComplete(true);
  };

  let MainContent;
  if (!profileComplete) {
    MainContent = <ProfileSetup onContinue={handleContinue} />;
  } else if (activePage === "Dashboard") {
    MainContent = <Dashboard name={profile.name}/>;
  } else if (activePage === "My Plan") {
    MainContent = <MyPlan />;
  } else {
    MainContent = <div className="p-8">Coming soon...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: font || undefined, fontSize: textSize }}>
      <div className="max-w-7xl mx-auto flex flex-row gap-8 py-8 px-4">
        <Sidebar active={activePage} onNavigate={setActivePage} />
        <main className="flex-1 flex flex-col items-center justify-center">
          {MainContent}
        </main>
      </div>
      {/* Accessibility floating button and panel */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        {showAccessibility && (
          <AccessibilitySettings
            font={font}
            setFont={setFont}
            textSize={textSize}
            setTextSize={setTextSize}
          />
        )}
        <button
          className="bg-primary text-white rounded-full shadow-lg w-12 h-12 flex items-center justify-center text-2xl mt-2 focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label="Accessibility settings"
          onClick={() => setShowAccessibility((v) => !v)}
        >
          <span role="img" aria-label="accessibility">🦻</span>
        </button>
      </div>
    </div>
  );
}

export default App;
