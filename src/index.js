import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import GeneralContextProvider from "./context/generalContext/generalContext";
import AuthContextProvider from "./context/authContext/authContext";

ReactDOM.render(
  <React.StrictMode>
    <GeneralContextProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </GeneralContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
