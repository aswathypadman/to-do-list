 import React, { useState } from "react";
import Activity from "./Activity";
import Ongoing from "./Ongoing";
import Completed from "./Completed";
import { useParams } from "react-router-dom";

const TaskBoard = () => {
  const { formattedDate } = useParams();

  const [tasks, setTasks] = useState([]);
  const [ongoing, setOngoing] = useState([]);
  const [completed, setCompleted] = useState([]);

  return (
    <div>
      <h3>Tasks for {formattedDate}</h3>

      <div style={{ display: "flex", gap: "40px", marginTop:"30px"}}>
        <Activity
          date={formattedDate}
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