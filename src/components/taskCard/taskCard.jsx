import "./styles.scss";
import React, { useState } from "react";
import { Select, Switch } from "antd";

const TaskCard = ({ task, showMore }) => {
  const { Option } = Select;

  const humanTime = date => {
    let hours = new Date(date).getHours();
    let minutes = new Date(date).getMinutes();

    if (hours <= 9) {
      hours = `0${hours}`;
    }
    if (minutes <= 9) {
      minutes = `0${minutes}`;
    }
    return `${hours}:${minutes}`;
  };

  const [assigneModal, setAssigneModal] = useState(false);

  return (
    <React.Fragment>
      <div className="task-card">
        {task.agent_assigned && (
          <div className="agent-details">
            <img src={task.assignedAgent.image} alt="" />
            <div className="agent-name">{task.assignedAgent.name}</div>
          </div>
        )}

        {!task.agent_assigned && (
          <div className="assign-agent">
            <span
              className="material-icons assign-agent-btn"
              onClick={() => setAssigneModal(true)}
            >
              add
            </span>
            Assign Agent
          </div>
        )}

        <div className="task-details-wrapper" onClick={showMore}>
          <div className="task-details">
            <div className="timing-and-status">
              <div className="timing">
                {humanTime(task.job_delivery_datetime)}
              </div>
              <div className="status">
                <div
                  className={`task-status
                ${
                  // task.status === 'assigned' ? 'assigned' :
                  // task.status === 'acknowledged' ? 'acknowledged' :
                  // task.status === 'inprogress' ? 'in-progress' :
                  // task.status === 'started' ? 'started' :
                  // task.status === 'successful' ? 'successful' :
                  // task.status === 'cancelled' ? 'cancelled' :
                  task.status.agent_assigned === null ? "unassigned" : ""
                }`}
                >
                  {
                    "unassigned"
                    // task.status
                  }
                </div>
              </div>
            </div>
            <div className="client-name">{task.customer.name}</div>

            {task.location ? (
              <div className="address">{task.location.address}</div>
            ) : (
              ""
            )}

            <div className="task-status show-on-map-label">show on map</div>
          </div>
        </div>

        <span className="material-icons show-more-icon">
          keyboard_arrow_right
        </span>

        {task && (
          <div className="delay-status">
            <span className="material-icons icon">query_builder</span>
            Delayed
          </div>
        )}
      </div>

      {assigneModal && (
        <React.Fragment>
          <div className="assign-task-modal">
            <div
              className="backdrop"
              onClick={() => setAssigneModal(false)}
            ></div>
            <div className="modal">
              <div className="modal-header">
                <h3>Task Id: 1</h3>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <div className="form-col">
                    <Select
                      showSearch
                      style={{ width: "100%" }}
                      placeholder="Search Team"
                      optionFilterProp="children"
                    >
                      <Option value="1">Not Identified</Option>
                      <Option value="2">Closed</Option>
                      <Option value="3">Communicated</Option>
                      <Option value="4">Identified</Option>
                      <Option value="5">Resolved</Option>
                      <Option value="6">Cancelled</Option>
                    </Select>
                  </div>
                  <div className="form-col">
                    <Switch />
                  </div>
                </div>

                <div className="form-group">
                  <div className="form-col">
                    <Select
                      showSearch
                      style={{ width: "100%" }}
                      placeholder="Search Tag"
                      optionFilterProp="children"
                    >
                      <Option value="1">Not Identified</Option>
                      <Option value="2">Closed</Option>
                      <Option value="3">Communicated</Option>
                      <Option value="4">Identified</Option>
                      <Option value="5">Resolved</Option>
                      <Option value="6">Cancelled</Option>
                    </Select>
                  </div>
                </div>

                <label>Assign</label>
                <div className="form-group">
                  <div className="form-col">
                    <Select
                      showSearch
                      style={{ width: "100%" }}
                      placeholder="Assign"
                      optionFilterProp="children"
                    >
                      <Option value="1">Not Identified</Option>
                      <Option value="2">Closed</Option>
                      <Option value="3">Communicated</Option>
                      <Option value="4">Identified</Option>
                      <Option value="5">Resolved</Option>
                      <Option value="6">Cancelled</Option>
                    </Select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default TaskCard;
