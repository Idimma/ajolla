import React, { useContext } from 'react'
import TaskCard from '../../../../../components/taskCard/taskCard'
import { TaskContext } from '../../../../../context/taskcontext/taskContext'
import './styles.scss'


const AssignedTask = ({ showMore }) => {
  
  const {
    assignedTask,
    showDetailsFunction
  } = useContext(TaskContext)

console.log(assignedTask);
  return (
    <React.Fragment>
      {assignedTask &&
        <div className="assigned-task">
          {
            assignedTask.map(task => (
              <TaskCard key={task.id} task={task} showMore={() => showDetailsFunction(task)} />
            ))
          } 
        </div>
      }
    </React.Fragment>
  );
}
 
export default AssignedTask;