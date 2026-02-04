 import React,{useState} from 'react'
 import "./Activity.css";
 
 const Activity = () => {
     const [tasks, setTasks] = useState([
    "Review wireframes",
    "Client feedback review",
    "Finalize project proposal"
  ]);
  const [showInput, setShowInput] = useState(false);
  const [newTask, setNewTask] = useState("");

  const saveTask = () => {
    if (newTask.trim() === "") return;

    setTasks([...tasks, newTask]);
    setNewTask("");
    setShowInput(false);
  };
  // 🔴 Remove task logic
  const removeTask = (indexToRemove) => {
    const updatedTasks = tasks.filter(
      (_, index) => index !== indexToRemove
    );
    setTasks(updatedTasks);
  };
   return (
      
      <div className="column">
      {/* Header */}
      <div className="column-header">
        
        <span className="count">{tasks.length}</span>
      </div>

      {/* Task list */}
      <div className="task-list">
        {tasks.map((task, index) => (
          <div className="task-card" key={index}>
            <p>{task}</p>
             <div className="task-actions">
              <button className="start-btn">Start</button>
              <button
                className="remove-btn"
                onClick={() => removeTask(index)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add Task */}
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
    );
};
export default Activity
 