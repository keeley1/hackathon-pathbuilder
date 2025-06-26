import React from "react";

const fonts = [
  { label: "Default", value: "" },
  { label: "Serif", value: "serif" },
  { label: "Sans-serif", value: "sans-serif" },
  { label: "Monospace", value: "monospace" },
];

const AccessibilitySettings = ({ font, setFont, textSize, setTextSize }) => (
  <div className="bg-card p-4 rounded-xl shadow mb-4">
    <h3 className="font-semibold mb-2 text-text">Accessibility Settings</h3>
    <div className="mb-3">
      <label className="block mb-1 text-text">Font Family</label>
      <select
        value={font}
        onChange={e => setFont(e.target.value)}
        className="border rounded px-3 py-2 w-full"
      >
        {fonts.map(f => (
          <option key={f.value} value={f.value}>{f.label}</option>
        ))}
      </select>
    </div>
    <div>
      <label className="block mb-1 text-text">Text Size ({textSize}px)</label>
      <input
        type="range"
        min="14"
        max="24"
        value={textSize}
        onChange={e => setTextSize(Number(e.target.value))}
        className="w-full"
      />
    </div>
  </div>
);

export default AccessibilitySettings; 