 import React, { useState } from "react";
 
import OngoingColumn from "./OngoingColumn";
import CompletedColumn from "./CompletedColumn";
import Activity from "./Activity";

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

      {/* <OngoingColumn
        ongoing={ongoing}
        setOngoing={setOngoing}
        setCompleted={setCompleted}
      /> */}

      {/* <CompletedColumn completed={completed} /> */}
    </div>
  );
};

export default TaskBoard;
