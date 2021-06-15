import "./styles.scss";
import SettingsLink from "./settingsSideNavLink";
import { settingsRoute } from "../../pages/postAuth/settings/settingsRoutes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSlidersH } from "@fortawesome/free-solid-svg-icons";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext/authContext";
import { useHistory } from "react-router-dom";
const SettingsSideNav = () => {
  const { logout } = useContext(AuthContext);
  const { push } = useHistory();
  return (
    <ul className="settings-sidenav">
      <h3 className="heading">
        <FontAwesomeIcon icon={faSlidersH} className="icon" /> Settings
      </h3>

      {settingsRoute.map((route, index) => (
        <React.Fragment key={route.path}>
          <li>
            <SettingsLink route={route} />
          </li>
          {index === 1 || index === 4 || index === 10 ? (
            <li className="divider"></li>
          ) : (
            ""
          )}
        </React.Fragment>
      ))}
      <li>
        <Link to={""} onClick={() => logout(push)}>
          <div className="nav-link">Logout</div>
        </Link>
      </li>
    </ul>
  );
};

export default SettingsSideNav;
