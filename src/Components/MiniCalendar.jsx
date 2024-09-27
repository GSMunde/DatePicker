// components/MiniCalendar.js
import React from 'react';

const MiniCalendar = ({ recurrence }) => {
  const { frequency, interval, startDate, endDate } = recurrence;

  // For simplicity, we will just display the selected options
  return (
    <div className="MiniCalendar mb-4 ">
      <h2 className="text-xl font-bold mb-4">Mini Calendar Preview</h2>
      <div className=" p-3 rounded">
        <p><strong>Frequency : </strong> {frequency}</p>
        <p><strong>Interval : </strong> Every {interval} {frequency}</p>
        <p><strong>Start Date : </strong> {startDate || 'Not set'}</p>
        <p><strong>End Date : </strong> {endDate || 'Not set'}</p>
      </div>
    </div>
  );
};

export default MiniCalendar;
