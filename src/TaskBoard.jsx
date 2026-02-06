 import React, { useState } from "react";
import Activity from "./Activity";
import Card from "react-bootstrap/Card";
import "./TaskBoard.css";

const TaskBoard = () => {
  const [tasks, setTasks] = useState([]);
  const [showInput, setShowInput] = useState(false);
  const [newTask, setNewTask] = useState("");

  // Add task
  const saveTask = () => {
    if (!newTask.trim()) return;

    setTasks([
      ...tasks,
      {
        id: Date.now(),
        text: newTask,
        status: "todo", // todo | ongoing | completed
        isPaused: false,
      },
    ]);

    setNewTask("");
    setShowInput(false);
  };

  // Remove (only from Add Task column)
  const removeTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  // Start → move to ongoing
  const startTask = (id) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, status: "ongoing" } : t
      )
    );
  };

  // Pause / Resume
  const togglePause = (id) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, isPaused: !t.isPaused } : t
      )
    );
  };

  // Complete → move to completed
  const completeTask = (id) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, status: "completed" } : t
      )
    );
  };

  return (
    <div className="board">
      {/* SEGMENT 1 — ADD TASK (YOUR DESIGN) */}
      <div className="column">
        <Activity
          tasks={tasks.filter((t) => t.status === "todo")}
          showInput={showInput}
          setShowInput={setShowInput}
          newTask={newTask}
          setNewTask={setNewTask}
          saveTask={saveTask}
          startTask={startTask}
          removeTask={removeTask}
        />
      </div>

      {/* SEGMENT 2 — ONGOING */}
      <div className="column">
        <div className="column-header">In Progress</div>

        {tasks
          .filter((t) => t.status === "ongoing")
          .map((task) => (
            <Card key={task.id} className="task-card">
              <Card.Body>
                <p>{task.text}</p>

                <div className="task-actions">
                  <button
                    className="start-btn"
                    onClick={() => togglePause(task.id)}
                  >
                    {task.isPaused ? "Resume" : "Pause"}
                  </button>

                  <button
                    className="remove-btn"
                    onClick={() => completeTask(task.id)}
                  >
                    Complete
                  </button>
                </div>
              </Card.Body>
            </Card>
          ))}
      </div>

      {/* SEGMENT 3 — COMPLETED */}
      <div className="column">
        <div className="column-header">Completed</div>

        {tasks
          .filter((t) => t.status === "completed")
          .map((task) => (
            <Card key={task.id} className="task-card completed">
              <Card.Body>
                <p>{task.text}</p>
              </Card.Body>
            </Card>
          ))}
      </div>
    </div>
  );
};

export default TaskBoard;
