import React from "react";

const Tab = ({ activeTab, onChange }) => {
  const tabs = ["today", "tomorrow", "monthly"];
  return (
    <nav
      className="flex items-center justify-end gap-10 text-white font-thin text-[30px]"
      aria-label="Weather Tabs"
    >
      {tabs.map((tab) => (
        <h2
          key={tab}
          onClick={() => onChange(tab)}
          aria-pressed={activeTab === tab}
          className={
            activeTab === tab
              ? "underline underline-offset-[15px] decoration-yellow-400"
              : "hover:underline hover:underline-offset-[15px] hover:decoration-yellow-400 hover: cursor-pointer"
          }
        >
          {tab === "today"
            ? "Today"
            : tab === "tomorrow"
            ? "Tomorrow"
            : "Monthly Forecast"}
        </h2>
      ))}
    </nav>
  );
};

export default Tab;
