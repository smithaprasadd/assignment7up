import { useState } from "react";

export default function Sidebar() {
  const [dark, setDark] = useState(true);

  const toggleTheme = () => {
    setDark(!dark);

    if (dark) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  return (
    <aside className="sidebar">
      <h2>Music</h2>

      <button
        onClick={toggleTheme}
        className="px-4 py-2 rounded-lg bg-gray-700 text-white hover:bg-gray-600 transition"
      >
        {dark ? "Light Mode" : "Dark Mode"}
      </button>
    </aside>
  );
}
