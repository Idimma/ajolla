import "./styles.scss";
import { Drawer } from "antd";
import TabsComponent from "../Tabs/tabs";
import CloseButton from "../closeBotton/closeBotton";
import { TaskContext } from "../../context/taskcontext/taskContext";
import { useContext } from "react";
import TaskDetails from "./taskDetails/taskDetails";
import TaskHistory from "./taskHistory/taskHistory";
import CustomerDetails from "./customerDetails/customerDetails";

const TaskDetailsTab = () => {
  const { showTaskDetails, hideDetailsFunction, taskDetails } =
    useContext(TaskContext);

  const dashboardTaskDetailsTabs = [
    {
      tabName: "Details",
      tabContent: <TaskDetails details={taskDetails} />,
      tabIndex: 1
    },
    {
      tabName: "Customers",
      tabContent: <CustomerDetails details={taskDetails} />,
      tabIndex: 2
    },
    {
      tabName: "History",
      tabContent: <TaskHistory />,
      tabIndex: 3
    }
  ];

  return (
    <div className="task-details-tab">
      <div className="details-tab-drawer">
        <Drawer
          title="Basic Drawer"
          placement="bottom"
          closable={true}
          onClose={hideDetailsFunction}
          visible={showTaskDetails}
          getContainer={false}
          style={{ position: "absolute" }}
        >
          <button
            onClick={hideDetailsFunction}
            className={`close-detalis-btn ${showTaskDetails ? "show-btn" : ""}`}
          >
            <CloseButton />
          </button>

          {showTaskDetails && (
            <button className="more-btn">
              <span className="material-icons">more_vert</span>
            </button>
          )}

          <TabsComponent tabItems={dashboardTaskDetailsTabs} />
        </Drawer>
      </div>
    </div>
  );
};

export default TaskDetailsTab;
