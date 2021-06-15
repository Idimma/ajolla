import "./styles.scss";

import { Drawer } from "antd";
import PaneHeader from "../../../components/PaneHeader/PaneHeader";
import TabsComponent from "../../../components/Tabs/tabs";
import { UsersContext } from "../../../context/usersContext/usersContext";
import { useContext } from "react";
import TaskDetails from "../../taskDetailsTab/taskDetails/taskDetails";
import CustomerDetails from "../../taskDetailsTab/customerDetails/customerDetails";
import CustomerHistory from "../../taskDetailsTab/taskHistory/taskHistory";

const customerTaskDetailsTabs = [
  {
    tabName: "Details",
    tabContent: <TaskDetails />,
    tabIndex: 1
  },
  {
    tabName: "Customers",
    tabContent: <CustomerDetails />,
    tabIndex: 2
  },
  {
    tabName: "History",
    tabContent: <CustomerHistory />,
    tabIndex: 3
  }
];

const CustomerTaskDetails = () => {
  const { showCustomerTaskDetails, setShowCustomerTaskDetails, taskDetails } =
    useContext(UsersContext);

  return (
    <Drawer
      headerStyle={{ display: "none" }}
      placement="right"
      closable={false}
      onClose={() => setShowCustomerTaskDetails(false)}
      maskClosable={true}
      mask={false}
      visible={showCustomerTaskDetails}
      width={370}
      className="customer-drawer customer-task-details"
    >
      <PaneHeader
        tabName="task"
        taskDetails={taskDetails}
        showid={showCustomerTaskDetails}
        shwobackBtn={true}
        backBtnClick={() => setShowCustomerTaskDetails(false)}
      />
      <TabsComponent tabItems={customerTaskDetailsTabs} />
    </Drawer>
  );
};

export default CustomerTaskDetails;