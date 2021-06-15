import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import GeneralContextProvider from "./context/generalContext/generalContext";
import AuthContextProvider from "./context/authContext/authContext";
import UsersContextProvider from "./context/usersContext/usersContext";
import TaskContexttProvider from "./context/taskcontext/taskContext";
import PostsContextProvider from "./context/postContext/postContext";
import CharityContextProvider from "./context/charityContext/charityContext";
import DonationsContextProvider from "./context/donationsContext/donationContext";

ReactDOM.render(
  <React.StrictMode>
    <GeneralContextProvider>
      <AuthContextProvider>
        <TaskContexttProvider>
          <UsersContextProvider>
            <PostsContextProvider>
              <CharityContextProvider>
                <DonationsContextProvider>
                  <App />
                </DonationsContextProvider>
              </CharityContextProvider>
            </PostsContextProvider>
          </UsersContextProvider>
        </TaskContexttProvider>
      </AuthContextProvider>
    </GeneralContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
