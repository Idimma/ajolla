import "./styles.scss";

import TaskCard from "../../../../../components/taskCard/taskCard";
import { useContext } from "react";
import { TaskContext } from "../../../../../context/taskcontext/taskContext";

const UnassignedTask = ({ showMore }) => {
  const { unassignedTask, showDetailsFunction } = useContext(TaskContext);

  return (
    <div className="unassigned-task">
      {unassignedTask.map(task => (
        <TaskCard
          key={task.id}
          task={task}
          showMore={() => showDetailsFunction(task)}
        />
      ))}
    </div>
  );
};

export default UnassignedTask;
