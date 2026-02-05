 import React,{useState} from 'react'
 import Card from 'react-bootstrap/Card';
 import "./Activity.css";
 import "./calendar.css";
 
 const Activity = () => {
     const [tasks, setTasks] = useState([]);
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
      
      <div >
      {/* Header */}
      <div className="column-header">
        
        <span className="count">{tasks.length}</span>
      </div>

      {/* Task list */}
      
      
    
      <div className='task-list'  >
        {tasks.map((task, index) => (
          <Card             
            key={index}
            className="task-card"
            style={{ width: "18rem" }}   >
      <Card.Body style={{padding: '12px 16px' }} > 
        
            <p>{task}</p>
       <div className="task-actions">
              <button className="start-btn">Start</button>
         <button className="remove-btn" onClick={() => removeTask(index)}> Remove
              </button>
              </div>
        </Card.Body>
    </Card>
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
 