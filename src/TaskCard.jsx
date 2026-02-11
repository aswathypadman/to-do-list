import Card from "react-bootstrap/Card";

const TaskCard = ({ children }) => {
  return (
    <Card className="task-card" style={{ width: "18rem" }}>
      <Card.Body>{children}</Card.Body>
    </Card>
  );
};

export default TaskCard;
