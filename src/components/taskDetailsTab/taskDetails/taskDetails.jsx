import React from 'react';
import './styles.scss'

const TaskDetails = ({ details }) => {


  return (
    <React.Fragment> 
      {details &&
        <div className="task-details">
          <div className="details-list">
            <ul>
              <li>
                <label className="label">Status</label>
                <div className="label-details">-</div>
              </li>
              <li>
                <label className="label">Delayed by</label>
                <div className="label-details">-</div>
              </li>
              <li>
                <label className="label">Description</label>
                <div className="label-details">{details.job_description}</div>
              </li>
              <li>
                <label className="label">Start Before</label>
                <div className="label-details">-</div>
              </li>
              <li>
                <label className="label">Complete Before</label>
                <div className="label-details">-</div>
              </li>
              <li>
                <label className="label">Team</label>
                <div className="label-details">-</div>
              </li>
              <li>
                <label className="label">Order ID</label>
              <div className="label-details">{ details.order_id}</div>
              </li>
            </ul>
          </div>
        </div>
      }
    </React.Fragment>
   );
}
 
export default TaskDetails;