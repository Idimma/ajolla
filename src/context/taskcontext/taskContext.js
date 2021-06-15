import { createContext, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { GeneralContext } from "../generalContext/generalContext";
import * as api from "../../constants/baseUri";

export const TaskContext = createContext();

const TaskContextProvider = props => {
  //base url
  const BASE_URI = api.BASE_URI;

  // state for showing task details
  const [showTaskDetails, setShowTaskDetails] = useState(false);

  // state for task details information
  const [taskDetails, setTaskDetails] = useState(null);

  // function for showing task details
  const showDetailsFunction = task => {
    setShowTaskDetails(true);
    setTaskDetails(task);
  };

  // function for showing task details
  const hideDetailsFunction = () => {
    setShowTaskDetails(false);
  };

  const { setLoading } = useContext(GeneralContext);

  const [unassignedTask, setUnassignedTask] = useState([]);
  const fetchUnassignedTask = async () => {
    setLoading(true);
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("user-token")}`
      }
    };

    try {
      const dataReturned = await axios.get(
        `${BASE_URI}/tasks/unassigned`,
        config
      );

      setUnassignedTask(dataReturned.data.data.data);
      setLoading(false);
    } catch (err) {}
  };

  const [assignedTask, setAssignedTask] = useState([]);
  const fetchAssignedTask = async () => {
    setLoading(true);
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("user-token")}`
      }
    };

    try {
      const dataReturned = await axios.get(
        `${BASE_URI}/tasks/assigned`,
        config
      );

      setAssignedTask(dataReturned.data.data.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const [completedTask, setCompletedTask] = useState([]);
  const fetchCompletedTask = async () => {
    setLoading(true);
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("user-token")}`
      }
    };

    try {
      const dataReturned = await axios.get(
        `${BASE_URI}/tasks/completed`,
        config
      );

      setCompletedTask(dataReturned.data.data.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <TaskContext.Provider
      value={{
        fetchUnassignedTask,
        fetchAssignedTask,
        fetchCompletedTask,
        unassignedTask,
        assignedTask,
        completedTask,
        showDetailsFunction,
        showTaskDetails,
        hideDetailsFunction,
        taskDetails
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskContextProvider;
