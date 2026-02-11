 import TaskCard from "./TaskCard";

const Ongoing = ({ ongoing, setOngoing, setCompleted }) => {
  const togglePause = (index) => {
    const copy = [...ongoing];
    copy[index].paused = !copy[index].paused;
    setOngoing(copy);
  };

  const completeTask = (index) => {
    setCompleted((prev) => [...prev, { text: ongoing[index].text }]);
    setOngoing(ongoing.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h5>Ongoing ({ongoing.length})</h5>

      <div className="task-list">
        {ongoing.map((task, index) => (
          <TaskCard key={index}>
            <p style={{ opacity: task.paused ? 0.5 : 1 }}>
              {task.text}
            </p>

            <div className="task-actions">
              <button
                className="start-btn"
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
          </TaskCard>
        ))}
      </div>
    </div>
  );
};

export default Ongoing;
