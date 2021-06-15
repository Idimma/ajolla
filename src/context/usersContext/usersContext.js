import { createContext, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { GeneralContext } from "../generalContext/generalContext";
import * as api from "../../constants/baseUri";

export const UsersContext = createContext();

const CustomerContextProvider = props => {
  const BASE_URI = api.BASE_URI;

  const filterOneOptions = ["User Id", "Name", "Phone", "Email", "Address"];
  const [filterOne, setFilterOne] = useState(filterOneOptions[0]);

  const filterTwoOptions = [
    "Exact Search",
    "Start with",
    "Ends with",
    "Contains"
  ];
  const [filterTwo, setFilterTwo] = useState(filterTwoOptions[0]);

  const [headerFilter, setHeaderFilter] = useState("All Customers");

  // get loading state from auth context
  const { setLoading, showAlert } = useContext(GeneralContext);

  // state for current page
  let [currentPage, setCurrentPage] = useState(1);

  // state for selected rows
  const [selectedRows, setSelectedRows] = useState([]);

  // state for customers data
  const [users, setUsers] = useState([]);
  const [totalUsers, setTotalUser] = useState(null);
  // get customers function
  const getUserData = async paagNumber => {
    setLoading(true);
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("user-token")}`
      }
    };
    try {
      const dataReturned = await axios.get(
        `${BASE_URI}/customers?page=${paagNumber}`,
        config
      );
      setLoading(false);
      setUsers(dataReturned.data.data.data);
      setTotalUser(dataReturned.data.data.total);
    } catch (err) {
      console.log(err.message);
      showAlert("error", err.message);
    }
  };

  // state for add customer moadal
  // const [addCustomerModal, setAddCustomerModal] = useState(false);
  // const [addCustomerAnimation, setAddCustomerAnimation] = useState(false);

  // state for edit customer modal
  // const [editCustomerModal, setEditCustomerModal] = useState(false);
  // const [editCustomerAnimation, setEditCustomerAnimation] = useState(false);

  // state for customer details drawer
  const [userDetails, setUserDetails] = useState(false);

  // state for customer task details drawer
  // const [showCustomerTaskDetails, setShowCustomerTaskDetails] = useState(false);

  // // state for customer task details
  // const [taskDetails, setCustomerTaskDetails] = useState(null);

  // const showCustomerTaskDetailsFunction = task => {
  //   setShowCustomerTaskDetails(true);
  //   setCustomerTaskDetails(task);
  // };

  return (
    <UsersContext.Provider
      value={{
        getUserData,
        currentPage,
        users,
        totalUsers,
        setCurrentPage,
        selectedRows,
        setSelectedRows,
        // setAddCustomerModal,
        // addCustomerModal,
        // setEditCustomerModal,
        // editCustomerModal,
        filterOne,
        setFilterOne,
        filterTwo,
        setFilterTwo,
        filterOneOptions,
        filterTwoOptions,
        headerFilter,
        setHeaderFilter,
        userDetails,
        setUserDetails
        // showCustomerTaskDetails,
        // showCustomerTaskDetailsFunction,
        // taskDetails
        // setShowCustomerTaskDetails
        // addCustomerAnimation,
        // setAddCustomerAnimation,
        // editCustomerAnimation,
        // setEditCustomerAnimation
      }}
    >
      {props.children}
    </UsersContext.Provider>
  );
};

export default CustomerContextProvider;
