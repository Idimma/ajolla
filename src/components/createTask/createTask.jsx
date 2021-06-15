import "./styles.scss";
import { Drawer, Switch, Select } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import DashboardMap from "../../pages/postAuth/dashboard/dashboardMap/dashboardMap";
import CloseButton from "../closeBotton/closeBotton";
import PickupAndDelivery from "../pickupAndDelivery/pickupAndDeleivery";
import Appointment from "../appointment/appointmtnet";
import FieldWorkforce from "../fieldWorkForce/fieldWorkForce";
import AssignDrawer from "../assignTaskDrawer/assignTaskDrawer";
import GeneralButton from "../generalButton/AcceptButton";

const CreateTask = () => {
  const { Option } = Select;

  const [createTaskDrawer, setCreateTaksDrawer] = useState(false);
  const toogleCreateTaskDrawer = () => {
    setCreateTaksDrawer(!createTaskDrawer);
  };

  const [taskType, setTaskType] = useState("pickUp");

  const [assignTaskDrawer, setAssignTaskDrawer] = useState(false);
  const toogleAssignTaskDrawer = () => {
    setAssignTaskDrawer(!assignTaskDrawer);
  };

  let [dropdown, setDropdown] = useState(false);
  let [modal, setModal] = useState(false);
  const closeModal = e => {
    if (e.target === e.currentTarget) {
      setModal(false);
    }
  };

  function repeatTask(checked) {
    console.log(`switch to ${checked}`);
  }

  return (
    <div className="create-task-wrapper">
      <div className="create-task-button-large-screen">
        <button onClick={toogleCreateTaskDrawer}>Create task</button>
        <div className="btn-icon" onClick={() => setDropdown(!dropdown)}>
          <FontAwesomeIcon icon={faCaretDown} />

          {dropdown && (
            <div className="dropdown" onClick={() => setModal(true)}>
              Bulk Imoprt
            </div>
          )}
          {dropdown && (
            <FontAwesomeIcon icon={faCaretUp} className="dropdown-icon" />
          )}
        </div>
      </div>
      <div className="create-task-button-mobile">
        <span className="material-icons" onClick={toogleCreateTaskDrawer}>
          add
        </span>
      </div>

      {/* Bulk import modal*/}
      {modal && (
        <React.Fragment>
          <div
            style={{
              position: "absolute",
              left: "0",
              width: "100%",
              display: "flex",
              justifyContent: "center"
            }}
          >
            <div className="backdrop" onClick={closeModal}></div>
            <div className="modal">
              <div className="modal-header">
                <h1>Create via CSV</h1>
                <a href="/">Download Sample File</a>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label> Select Item</label>
                  <Select
                    showSearch
                    style={{ width: "100%" }}
                    placeholder="Search to Select"
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
        </React.Fragment>
      )}

      {/* CREATE TASK DRAWER */}
      <Drawer
        title=""
        placement="left"
        // closable={false}
        width={"100%"}
        className="create-task-drawer"
        bodyStyle={{ backgroundColor: "#f6f6f6", height: "100%" }}
        maskClosable={false}
        onClose={toogleCreateTaskDrawer}
        closable={false}
        visible={createTaskDrawer}
        // style={{height: '100%'}}
        key="Left"
      >
        <div className="create-task">
          <div className="task">
            <div className="task-heading">
              <div className="task-title"> New tasks</div>
              <div className="close-tab-btn" onClick={toogleCreateTaskDrawer}>
                <CloseButton />
              </div>
            </div>

            <div
              style={{
                overflowY: "hidden",
                position: "relative",
                height: "100%"
              }}
            >
              <div className="task-content">
                <div className="select-task-type">
                  <select
                    value={taskType}
                    onChange={e => setTaskType(e.target.value)}
                  >
                    <option value="pickUp">Pickup & Delivery</option>
                    <option value="appointment">Appointment</option>
                    <option value="field">Field Workforce</option>
                  </select>
                </div>

                {taskType === "pickUp" && <PickupAndDelivery />}
                {taskType === "appointment" && <Appointment />}
                {taskType === "field" && <FieldWorkforce />}
                <div className="repeat-task">
                  <Switch onChange={repeatTask} />
                  <span>Repeat this task</span>
                </div>
              </div>

              <AssignDrawer
                assignTaskDrawer={assignTaskDrawer}
                toogleAssignTaskDrawer={toogleAssignTaskDrawer}
              />
            </div>

            <div className="task-footer">
              <button
                className="assign-task-btn"
                onClick={() => toogleAssignTaskDrawer()}
              >
                <img
                  src="https://tookan.s3.amazonaws.com/task_images/MtAE1542983308373-faviconsavein32x32.png"
                  alt=""
                />
                <span> Assign Task</span>
                <span
                  className={`material-icons ${
                    assignTaskDrawer ? "caret-rotate" : ""
                  }`}
                >
                  arrow_drop_down
                </span>
              </button>
              <GeneralButton buttonText="Create Task" />
            </div>
          </div>

          <div className="map">
            <DashboardMap />
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default CreateTask;
