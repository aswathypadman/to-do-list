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

  // ✅ LOAD DATA WHEN PAGE LOADS OR DATE CHANGES
  useEffect(() => {
    if (!formattedDate) return;

    const savedData = localStorage.getItem(formattedDate);

    if (savedData) {
      const parsed = JSON.parse(savedData);
      setTasks(parsed.tasks || []);
      setOngoing(parsed.ongoing || []);
      setCompleted(parsed.completed || []);
    } else {
      setTasks([]);
      setOngoing([]);
      setCompleted([]);
    }
  }, [formattedDate]);

  // ✅ SAVE DATA WHEN STATE CHANGES
  useEffect(() => {
    if (!formattedDate) return;

    const dataToSave = {
      tasks,
      ongoing,
      completed,
    };

    localStorage.setItem(
      formattedDate,
      JSON.stringify(dataToSave)
    );
  }, [tasks, ongoing, completed, formattedDate]);

  return (
    <div>
      <h3>Tasks for {formattedDate}</h3>

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