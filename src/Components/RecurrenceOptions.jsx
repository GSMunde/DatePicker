// components/RecurrenceOptions.js
import React from 'react';

const RecurrenceOptions = ({ recurrence, onRecurrenceChange }) => {
  const handleFrequencyChange = (e) => {
    onRecurrenceChange({ ...recurrence, frequency: e.target.value });
  };

  const handleIntervalChange = (e) => {
    onRecurrenceChange({ ...recurrence, interval: e.target.value });
  };

  return (
    <div className=" RecurrenceOptions mb-4  ">
      <h2 className="text-xl font-bold mb-4 ">Recurrence Options</h2>

      <label className="block mb-2">Frequency - </label>
      <select
        value={recurrence.frequency}
        onChange={handleFrequencyChange}
        className="mb-4 p-2 border rounded "
      >
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option>
      </select>
      <br />
      <label className="block mb-2">Every - </label>
      <input
        type="number"
        value={recurrence.interval}
        onChange={handleIntervalChange}
        className="mb-4 p-2 border rounded w-10"
        min="1"
      />
      <span>{recurrence.frequency === 'daily' ? 'days' : recurrence.frequency}</span>
    </div>
  );
};

export default RecurrenceOptions;
