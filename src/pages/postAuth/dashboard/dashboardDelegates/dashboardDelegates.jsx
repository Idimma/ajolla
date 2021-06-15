import PaneHeader from "../../../../components/PaneHeader/PaneHeader";
import TabsComponent from "../../../../components/Tabs/tabs";
import BusyAgent from "./busy/busyAgents";
import FreeAgents from "./free/freeAgents";
import "./styles.scss";
import { useState } from "react";
import AgentDetailsTab from "../../../../components/agentDetailsTab/agentDetailsTab";

const DashboardDelegates = () => {
  let [visible, setVisible] = useState(false);
  let [taskId, setTaskId] = useState("");

  let showMore = taskid => {
    setVisible(!visible);
    setTaskId(taskid);
  };

  const dashboardDelegateTabs = [
    {
      tabName: "IN PROGRESS",
      tabContent: <FreeAgents showMore={showMore} />,
      tabValue: 16,
      tabIndex: 1
    },
    {
      tabName: "ALL",
      tabContent: <BusyAgent showMore={showMore} />,
      tabValue: 12,
      tabIndex: 2
    }
  ];

  return (
    <div className="dashboard-delegate">
      <PaneHeader
        tabName="Stories"
        animateSearh={visible}
        showSearch={true}
        taskId={taskId}
      />
      <TabsComponent tabItems={dashboardDelegateTabs} />
      <AgentDetailsTab visible={visible} toogleDrawer={showMore} />
    </div>
  );
};

export default DashboardDelegates;
