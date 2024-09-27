// App.js
import React, { useState } from 'react';
import RecurrenceOptions from './Components/RecurrenceOptions';
import DatePicker from './Components/DatePicker';
import MiniCalendar from './Components/MiniCalendar';
import './App.css'

const App = () => {
  const [recurrence, setRecurrence] = useState({
    frequency: 'daily', // daily, weekly, monthly, yearly
    interval: 1,
    daysOfWeek: [],
    nthDayOfMonth: null,
    startDate: '',
    endDate: '',
  });

  const handleRecurrenceChange = (updatedRecurrence) => {
    setRecurrence(updatedRecurrence);
  };

  return (
    <div className="container mx-auto p-4  border border-grey-500 bg-[#83858a]">
      <div className='p-3 DateName mb-4 '>
        <h1 className=" text-xl items-center md:text-2xl font-bold mb-4 ">Date Picker</h1>
      </div>
      <div className='md:flex justify-center items-center gap-10'>
      {/* Recurrence Options */}
      <RecurrenceOptions
        recurrence={recurrence}
        onRecurrenceChange={handleRecurrenceChange}
      />

      {/* Date Range Picker */}
      <DatePicker recurrence={recurrence} onRecurrenceChange={handleRecurrenceChange} />

      {/* Mini Calendar Preview */}
      <MiniCalendar recurrence={recurrence} />
      </div>
    </div>
  );
};

export default App;
