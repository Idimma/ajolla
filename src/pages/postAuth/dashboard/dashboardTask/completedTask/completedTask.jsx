import "./styles.scss";
// eslint-disable-next-line
import TaskCard from "../../../../../components/taskCard/taskCard";
import { TaskContext } from "../../../../../context/taskcontext/taskContext";
import { useContext } from "react";

const AssignedTask = ({ showMore }) => {
  const { completedTask } = useContext(TaskContext);

  return (
    <div className="completed-task">
      {completedTask.map(task => (
        <h6>Completed</h6>
        // <TaskCard key={task.id} task={task} showMore={ ()=> showDetailsFunction(task)}/>
      ))}
    </div>
  );
};

export default AssignedTask;
