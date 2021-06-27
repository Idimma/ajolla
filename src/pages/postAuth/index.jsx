import "./styles.scss";
import Header from "../../components/dashboardHeader/dashboardHeader";
import {Switch, Route, useHistory} from "react-router-dom";
import {dashRoutes} from "./dashRoutes";
import React, {useEffect, useContext} from "react";
import {AuthContext} from "../../context/authContext/authContext";

const Dashboard = () => {
    let {push} = useHistory();

    // getting the values from the Auth context
    const {checkStatus} = useContext(AuthContext);

    // useeffect calling the checkStatus function
    useEffect(() => {
        checkStatus(push);
    });

    return (
        <React.Fragment>
            <Header/>

            <Switch>
                {dashRoutes.map(dashRoute => (
                    <Route
                        exact={dashRoute.exact}
                        path={dashRoute.path}
                        key={dashRoute.path}
                        component={dashRoute.component}
                    />
                ))}
            </Switch>
        </React.Fragment>
    );
};

export default Dashboard;
