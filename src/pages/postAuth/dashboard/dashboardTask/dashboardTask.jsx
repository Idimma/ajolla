import "./styles.scss";
import { useContext } from "react";
import PaneHeader from "../../../../components/PaneHeader/PaneHeader";
import TabComponent from "../../../../components/Tabs/tabs";
import UnassignedTask from "./unassignedTask/unassignedTask";
import AssigneTask from "./assignedTask/assignedTask";
import CompletedTask from "./completedTask/completedTask";
import TaskDetailsTab from "../../../../components/taskDetailsTab/taskDetailsTab";
import { TaskContext } from "../../../../context/taskcontext/taskContext";

const DashboardTask = () => {
  const {
    showTaskDetails,
    taskDetails,
    unassignedTask,
    assignedTask,
    completedTask
  } = useContext(TaskContext);
  const dashboardTaskTabs = [
    {
      tabName: "PENDING",
      tabContent: <UnassignedTask />,
      tabValue: unassignedTask ? unassignedTask.length : 0,
      tabIndex: 1
    },
    {
      tabName: "APPROVED",
      tabContent: <AssigneTask />,
      tabValue: assignedTask ? assignedTask.length : 0,
      tabIndex: 2
    },
    {
      tabName: "COMPLETED",
      tabContent: <CompletedTask />,
      tabValue: completedTask ? completedTask.length : 0,
      tabIndex: 3
    }
  ];

  return (
    <div className="dashboard-task">
      <PaneHeader
        tabName="Campaigns"
        showSearch={true}
        animateSearch={showTaskDetails}
        showid={showTaskDetails}
        taskDetails={taskDetails}
      />
      <TabComponent tabItems={dashboardTaskTabs} activeTabKey="1" />
      {showTaskDetails && <TaskDetailsTab />}
    </div>
  );
};

export default DashboardTask;
