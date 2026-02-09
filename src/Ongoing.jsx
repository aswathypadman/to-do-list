import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import "./Activity.css";
import "./calendar.css";

const Ongoing = () => {
  const [tasks, setTasks] = useState([]);
  const [ongoing, setOngoing] = useState([]);

  const [showInput, setShowInput] = useState(false);
  const [newTask, setNewTask] = useState("");

  // ✅ Save new task
  const saveTask = () => {
    if (newTask.trim() === "") return;

    setTasks([...tasks, newTask]);
    setNewTask("");
    setShowInput(false);
  };

  // ❌ Remove task from todo
  const removeTask = (indexToRemove) => {
    setTasks(tasks.filter((_, i) => i !== indexToRemove));
  };

  // ▶ Start task → move to ongoing
  const startTask = (index) => {
    const taskText = tasks[index];

    setOngoing([...ongoing, { text: taskText, paused: false }]);
    removeTask(index);
  };

  // ⏸ Pause / Resume
  const togglePause = (index) => {
    const updated = [...ongoing];
    updated[index].paused = !updated[index].paused;
    setOngoing(updated);
  };

  // ✅ Complete task
  const completeTask = (index) => {
    setOngoing(ongoing.filter((_, i) => i !== index));
  };

  return (
    <div style={{ display: "flex", gap: "40px" }}>
      {/* ================= TASK LIST ================= */}
      <div>
        <h5>Tasks ({tasks.length})</h5>

        <div className="task-list">
          {tasks.map((task, index) => (
            <Card key={index} className="task-card" style={{ width: "18rem" }}>
              <Card.Body>
                <p>{task}</p>

                <div className="task-actions">
                  <button
                    className="start-btn"
                    onClick={() => startTask(index)}
                  >
                    Start
                  </button>
                  <button
                    className="remove-btn"
                    onClick={() => removeTask(index)}
                  >
                    Remove
                  </button>
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>

        {showInput ? (
          <div className="add-area">
            <textarea
              placeholder="Enter task..."
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            />
            <button onClick={saveTask}>Save</button>
          </div>
        ) : (
          <button className="add-task-btn" onClick={() => setShowInput(true)}>
            + Add Task
          </button>
        )}
      </div>

      {/* ================= ONGOING LIST ================= */}
      <div>
        <h5>Ongoing ({ongoing.length})</h5>

        <div className="task-list">
          {ongoing.map((task, index) => (
            <Card key={index} className="task-card" style={{ width: "18rem" }}>
              <Card.Body>
                <p
                  style={{
                    opacity: task.paused ? 0.5 : 1,
                  }}
                >
                  {task.text}
                </p>

                <div className="task-actions">
                  <button
                    className="start-btn"
                    style={{ background: "#ff9800" }}
                    onClick={() => togglePause(index)}
                  >
                    {task.paused ? "Resume" : "Pause"}
                  </button>

                  <button
                    className="remove-btn"
                    onClick={() => completeTask(index)}
                  >
                    Complete
                  </button>
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ongoing;
