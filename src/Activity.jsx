 import React, { useState } from "react";
import TaskCard from "./TaskCard";
import Heading from "./Heading";

const Activity = ({ tasks, setTasks, setOngoing,date }) => {
  const [newTask, setNewTask] = useState("");
  const [showInput, setShowInput] = useState(false);

  const saveTask = () => {
    if (!newTask.trim()) return;
    setTasks([...tasks, newTask]);
    setNewTask("");
    setShowInput(false);
  };

  const startTask = (index) => {
    setOngoing((prev) => [...prev, { text: tasks[index], paused: false }]);
    setTasks(tasks.filter((_, i) => i !== index));
    console.log(index);
    
  };

  const removeTask =(indexToRemove) => {
    const updatedTask =tasks.filter(
      (_,index) => index !== indexToRemove

    );
    setTasks(updatedTask);
  };

  return (
    <div >
      <Heading>Task({tasks.length})</Heading>

      <div className="task-list">
        {tasks.map((task, index) => (
          <TaskCard key={index}>
            <p>{task}</p>
            <div className="task-actions">
              <button className="start-btn" onClick={() => startTask(index)}>
                Start
              </button>
              <button
                className="remove-btn"
                onClick={() => removeTask(index)}
              >
                Remove
              </button>
            </div>
          </TaskCard>
        ))}
      </div>

      {showInput ? (
        <>
          <textarea
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button onClick={saveTask}>Save</button>
        </>
      ) : (
        <button onClick={() => setShowInput(true)}>+ Add Task</button>
      )}
    </div>
  );
};

export default Activity;
