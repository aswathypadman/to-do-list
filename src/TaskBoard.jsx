 import React, { useState, useEffect } from "react";
import Activity from "./Activity";
import Ongoing from "./Ongoing";
import Completed from "./Completed";
import { useParams } from "react-router-dom";

const TaskBoard = () => {
  const { formattedDate } = useParams();

  const [tasks, setTasks] = useState([]);
  const [ongoing, setOngoing] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [loaded, setLoaded] = useState(false); // important

  // 🔵 LOAD DATA
  useEffect(() => {
    if (!formattedDate) return;

    const saved = localStorage.getItem(formattedDate);

    if (saved) {
      const parsed = JSON.parse(saved);
      setTasks(parsed.tasks || []);
      setOngoing(parsed.ongoing || []);
      setCompleted(parsed.completed || []);
    } else {
      setTasks([]);
      setOngoing([]);
      setCompleted([]);
    }

    setLoaded(true);
  }, [formattedDate]);

  // 🔵 SAVE DATA (only after load)
  useEffect(() => {
    if (!loaded) return;

    localStorage.setItem(
      formattedDate,
      JSON.stringify({ tasks, ongoing, completed })
    );
  }, [tasks, ongoing, completed, formattedDate, loaded]);
   const clearAll = () => {
  const confirmClear = window.confirm("Are you sure you want to clear all tasks?");
  if (!confirmClear) return;

  setTasks([]);
  setOngoing([]);
  setCompleted([]);
  localStorage.removeItem(formattedDate);
};

  return (
    
    <div>
      <button
  onClick={clearAll}
  style={{
    marginBottom: "20px",
    padding: "8px 12px",
    background: "#d04927",
    color: "white",
    border: "none",
    cursor: "pointer"
  }}
>
  Clear All Tasks
</button>
      <h3 style={{color:"white"}}>Tasks for {formattedDate}</h3>

      <div style={{ display: "flex", gap: "40px" }}>
        <Activity
          tasks={tasks}
          setTasks={setTasks}
          setOngoing={setOngoing}
        />

        <Ongoing
          ongoing={ongoing}
          setOngoing={setOngoing}
          setCompleted={setCompleted}
        />

        <Completed completed={completed} />
      </div>
    </div>
  );
};

export default TaskBoard;