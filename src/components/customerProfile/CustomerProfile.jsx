import "./styles.scss";
import { Drawer } from "antd";
import CloseButton from "../closeBotton/closeBotton";
import TaskCard from "../taskCard/taskCard";
import { UsersContext } from "../../context/usersContext/usersContext";
import { useContext } from "react";
import { assignedTask } from "../../pages/postAuth/dashboard/data";

const CustomerProfile = () => {
  const { userDetails, setUserDetails, showCustomerTaskDetailsFunction } =
    useContext(UsersContext);

  return (
    <Drawer
      headerStyle={{ display: "none" }}
      placement="right"
      closable={false}
      onClose={() => setUserDetails(false)}
      maskClosable={false}
      visible={userDetails}
      width={370}
      className="customer-drawer customer-details"
    >
      <div className="header-avater">
        <img src="/image/default-user.png" alt="" />
        <span className="username">UserName</span>
        <div className="close-btn" onClick={() => setUserDetails(false)}>
          <CloseButton />
        </div>
      </div>

      <div className="header-details">
        <div className="details phone-number">
          <span className="material-icons">phone</span>
          <p>+249037399392</p>
        </div>

        <div className="details phone-number">
          <span className="material-icons">email</span>
          <p>Not Avialble</p>
        </div>

        <div className="details phone-number">
          <span className="material-icons">place</span>
          <p>https://maps.google.com/?q=27.177485,49.534725</p>
        </div>

        <div className="details phone-number">
          <span className="material-icons">star</span>
          <p>Not Avialable</p>
        </div>
      </div>

      <div className="search-box">
        <i className="fa fa-search icon"></i>
        <input type="text" placeholder="Search by task address" />
      </div>

      <div className="tasks">
        {assignedTask.map(task => (
          <TaskCard
            task={assignedTask}
            showMore={() => showCustomerTaskDetailsFunction(task)}
            key={task.id}
          />
        ))}
      </div>
    </Drawer>
  );
};

export default CustomerProfile;
