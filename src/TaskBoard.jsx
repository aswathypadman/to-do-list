 import React, { useState } from "react";
import Activity from "./Activity";
import Ongoing from "./Ongoing";
import Completed from "./Completed";

const TaskBoard = () => {
  const [tasks, setTasks] = useState([]);
  const [ongoing, setOngoing] = useState([]);
  const [completed, setCompleted] = useState([]);

  return (
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
  );
};

export default TaskBoard;
