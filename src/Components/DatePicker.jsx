// components/DatePicker.js
import React from 'react';

const DatePicker = ({ recurrence, onRecurrenceChange }) => {
  const handleStartDateChange = (e) => {
    onRecurrenceChange({ ...recurrence, startDate: e.target.value });
  };

  const handleEndDateChange = (e) => {
    onRecurrenceChange({ ...recurrence, endDate: e.target.value });
  };

  return (
    <div className="DatePicker mb-4 ">
      <h2 className="text-xl font-bold mb-4">Date Range</h2>

      <label className="block mb-3">Start Date - </label>
      <input
        type="date"
        value={recurrence.startDate}
        onChange={handleStartDateChange}
        className="mb-4 p-2 border rounded "
      />

      <br />

      <label className="block mb-2">End Date - </label>
      <input
        type="date"
        value={recurrence.endDate}
        onChange={handleEndDateChange}
        className="mb-4 p-2 border rounded"
      />
    </div>
  );
};

export default DatePicker;
