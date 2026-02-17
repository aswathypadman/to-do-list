 import Heading from "./Heading";
import TaskCard from "./TaskCard";

const Completed = ({ completed }) => {
  return (
    <div>
        <Heading>Completed ({completed.length})</Heading>
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
