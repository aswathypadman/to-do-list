 import React, { useState, useEffect } from "react";
import "./Calendar.css";

const Calendar = () => {
  const [month, setMonth] = useState(1); // February
  const [year, setYear] = useState(2026);
  const [selectedDate, setSelectedDate] = useState(null);

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  // 🔑 Correct calendar logic
  const firstDay = new Date(year, month, 1).getDay();
  const totalDays = new Date(year, month + 1, 0).getDate();

  // 🔑 Reset selected date when month/year changes
  useEffect(() => {
    setSelectedDate(null);
  }, [month, year]);

  return (
    <div className="calendar-wrapper">

      {/* LEFT SIDE */}
      <div className="calendar-box">

        {/* Header */}
        <div className="calendar-header">
          <select
            value={month}
            onChange={(e) => setMonth(Number(e.target.value))}
          >
            {months.map((m, i) => (
              <option key={i} value={i}>{m}</option>
            ))}
          </select>

          <input
            type="number"
            value={year}
            onChange={(e) => setYear(Number(e.target.value))}
          />
        </div>

        {/* Day Names */}
        <div className="calendar-grid">
          {days.map((day) => (
            <div key={day} className="day-name">{day}</div>
          ))}

          {/* Empty boxes before 1st day */}
          {[...Array(firstDay)].map((_, i) => (
            <div key={`empty-${i}`}></div>
          ))}

          {/* Dates */}
          {[...Array(totalDays)].map((_, i) => {
            const date = i + 1;
            return (
              <button
                key={date}
                className={`date-btn ${
                  selectedDate === date ? "active" : ""
                }`}
                onClick={() => setSelectedDate(date)}
              >
                {date}
              </button>
            );
          })}
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="notes-box">
        <h3>Important Notes</h3>
        <textarea placeholder="Write notes here..." />
      </div>

    </div>
  );
};

export default Calendar;
