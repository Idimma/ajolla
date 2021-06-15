import React, { createContext, useState } from "react";

export const GeneralContext = createContext();

const GeneralContextProvider = props => {
  // state for alert
  const [alert, setAlert] = useState({
    showAlert: false,
    type: "error",
    message: "error"
  });

  // loading state
  const [loading, setLoading] = useState(false);

  // function for closing alert
  const closeAlert = () => {
    setAlert({ ...alert, showAlert: false });
  };

  const showAlert = (type, message) => {
    setAlert({ showAlert: true, type: type, message: message });
  };

  return (
    <GeneralContext.Provider
      value={{
        alert,
        showAlert,
        closeAlert,
        isLoading: loading,
        setLoading
      }}
    >
      {props.children}
    </GeneralContext.Provider>
  );
};

export default GeneralContextProvider;
