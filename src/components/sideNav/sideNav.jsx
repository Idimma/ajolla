import "./styles.scss";

import { Drawer } from "antd";
import { dashRoutes } from "../../pages/postAuth/dashRoutes";
import SideNavLink from "./sideNavLink";
import { Link } from "react-router-dom";
import { DASHBOARD } from "../../routes.js";
const SideNav = ({ toggleSideNav, showSideNav }) => {
  return (
    <Drawer
      title=""
      placement="left"
      // closable={false}
      className="side-nav"
      bodyStyle={{ backgroundColor: "black", overflowY: "auto" }}
      onClose={toggleSideNav}
      visible={showSideNav}
      key="Left"
    >
      <div className="side-nav-header">
        <div className="menu-button">
          <div></div>
          <div></div>
          <div></div>
          <span className="material-icons close-button" onClick={toggleSideNav}>
            close
          </span>
        </div>

        <div className="logo">
          <Link to={DASHBOARD}>
            <img
              src="https://res.cloudinary.com/djnhrvjyf/image/upload/v1618660904/logo_r8zeo7.png"
              alt="app-logo"
            />
          </Link>
        </div>
      </div>

      <div className="side-nav-links">
        {dashRoutes.map(routes => (
          <div onClick={toggleSideNav} key={routes.path}>
            <SideNavLink route={routes} />
          </div>
        ))}
      </div>
    </Drawer>
  );
};

export default SideNav;
