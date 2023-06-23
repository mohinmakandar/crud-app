import React from 'react';
import './Tabs.css';

/**
 * Tabs component for displaying multiple tabs with active tab highlighting.
 *
 * @param {string} activeTab - The currently active tab.
 * @param {function} handleTabClick - Function to handle tab click events.
 * @returns {JSX.Element} - Rendered Tabs component.
 */
const Tabs = ({ activeTab, handleTabClick }) => {
  return (
    <div className="tabs">
      <button
        onClick={() => handleTabClick('task')}
        className={activeTab === 'task' ? 'active' : ''}
      >
        Task
      </button>
      <button
        onClick={() => handleTabClick('cars')}
        className={activeTab === 'cars' ? 'active' : ''}
      >
        Cars
      </button>
      <button
        onClick={() => handleTabClick('employee')}
        className={activeTab === 'employee' ? 'active' : ''}
      >
        Employee
      </button>
    </div>
  );
};

export default Tabs;
