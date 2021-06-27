import "./styles.scss";
import {Row, Col} from "antd";
import DashboardTask from "./dashboardTask/dashboardTask";
import DashboardMap from "./dashboardMap/dashboardMap";
import DashboardDelegates from "./dashboardDelegates/dashboardDelegates";
import React, {useState} from "react";
import TabsComponent from "../../../components/Tabs/tabs";

const Dashboard = () => {
    let [collapseTask, setCollapseTask] = useState(false);
    let [collapseDelegate, setCollapseDelegate] = useState(false);

    const dashboardMobile = [
        {
            tabName: "TASK",
            tabContent: <DashboardTask/>,
            tabValue: null,
            tabIndex: 1
        },
        {
            tabName: "MAP",
            tabContent: <DashboardMap/>,
            tabValue: null,
            tabIndex: 2
        }
        // {
        //   tabName: "DELEGATE",
        //   tabContent: <DashboardDelegates />,
        //   tabValue: null,
        //   tabIndex: 3
        // }
    ];

    return (
        <React.Fragment>
            <div className="dashboard dashboard-large-screen">
                <Row>
                    <Col
                        md={9}
                        lg={7}
                        className={`dashboard-task-wrapper 
          ${collapseTask ? "collapse" : ""}`}
                    >
                        <DashboardTask/>
                    </Col>

                    <Col flex="auto" className="dashboard-map-wrapper">
                        <div
                            className="collapse-sidebar"
                            onClick={() => setCollapseTask(!collapseTask)}
                        >
                            {!collapseTask && (
                                <span className="material-icons">keyboard_arrow_left</span>
                            )}
                            {collapseTask && (
                                <span className="material-icons">keyboard_arrow_right</span>
                            )}
                        </div>

                        <DashboardMap/>

                        <div
                            className="collapse-sidebar right"
                            onClick={() => setCollapseDelegate(!collapseDelegate)}
                        >
                            {!collapseDelegate && (
                                <span className="material-icons">keyboard_arrow_right</span>
                            )}
                            {collapseDelegate && (
                                <span className="material-icons">keyboard_arrow_left</span>
                            )}
                        </div>
                    </Col>

                    <Col md={9} lg={7}
                         className={`dashboard-delegates-wrapper          ${collapseDelegate ? "collapse" : ""}`}
                    >
                        <DashboardDelegates/>
                    </Col>
                </Row>
            </div>
            <div className="dashboard dashboard-mobile">
                <TabsComponent tabItems={dashboardMobile} activeTabKey="1"/>
            </div>
        </React.Fragment>
    );
};

export default Dashboard;
