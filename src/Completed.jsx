 import TaskCard from "./TaskCard";

const Completed = ({ completed }) => {
  return (
    <div>
      <h5>Completed ({completed.length})</h5>

      <div className="task-list">
        {completed.map((task, index) => (
          <TaskCard key={index}>
            <p style={{ textDecoration: "line-through", opacity: 0.7 }}>
              {task.text}
            </p>
          </TaskCard>
        ))}
      </div>
    </div>
  );
};

export default Completed;
