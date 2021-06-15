import React, { createContext, useEffect, useState, useContext } from "react";
import axios from "axios";
import { POST_AUTH_ROUTES, LOGIN } from "../../routes";
import * as api from "../../constants/baseUri";
import { GeneralContext } from "../generalContext/generalContext";

export const AuthContext = createContext();

const AuthContextProvider = props => {
  const BASE_URI = api.BASE_URI;
  const { showAlert, setLoading } = useContext(GeneralContext);

  // general state containing the user data and token
  const [generalState, setGeneralState] = useState({ user: "", token: "" });

  // getting data from local storage
  const getValuesFromLocalStorage = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const userToken = localStorage.getItem("user-token");

    setGeneralState({ user: user, token: userToken });
  };

  // login function
  const loginUser = async (submitObject, push) => {
    // set loading state to true
    setLoading(true);
    try {
      const userDataReturned = await axios.post(
        `${BASE_URI}/login`,
        submitObject
      );

      const stringifiedUserObject = await JSON.stringify(
        userDataReturned.data.data.user
      );
      const token = await userDataReturned.data.data.token;

      // store user data in localstorage
      localStorage.setItem("user", stringifiedUserObject);

      // sore user-token in loacal storage
      localStorage.setItem("user-token", token);

      // set loading state to false
      setLoading(false);

      // when everything is done we can now push to the dashboard
      push(POST_AUTH_ROUTES);
    } catch (err) {
      // set loading state to false
      setLoading(false);
      if (err.message === "Network Error") {
        return showAlert("error", "No Internet Connection");
      }
      if (err.response && err.response.data) {
        if (err?.response?.data?.error === "Account not found") {
          return showAlert("error", err?.response?.data.error);
        }

        if (err?.response?.data?.error === "Invalid credentials") {
          return showAlert("error", "Incorrect Password");
        }
      }
      return showAlert("error", err.message);
    }
  };

  const logout = push => {
    localStorage.clear();
    push(LOGIN);
  };

  // reset password function
  const restPassword = async submitObject => {
    console.log(submitObject);
    try {
      const userDataReturned = await axios.post(
        `${BASE_URI}/forgot-password`,
        submitObject
      );

      console.log(userDataReturned);
    } catch (err) {
      // checking for network error and setting the alert modal
    }
  };

  // chcking status of user if already loggedin
  const checkStatus = push => {
    const user = JSON.parse(localStorage.getItem("user"));
    const userToken = localStorage.getItem("user-token");

    if (user && userToken) {
      return;
    } else {
      push(LOGIN);
    }
  };

  useEffect(() => {
    getValuesFromLocalStorage();
    // eslint-disable-next-line
  }, []);

  return (
    <AuthContext.Provider
      value={{
        generalState,
        loginUser,
        restPassword,
        checkStatus,
        logout
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
