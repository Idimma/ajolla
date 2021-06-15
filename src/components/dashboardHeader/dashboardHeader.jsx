import "./styles.scss";
import { useLocation, Link } from "react-router-dom";
import FilterDate from "./FilterDateTime/FilterDateTime";
import React, { useState } from "react";
import SideNav from "../sideNav/sideNav";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRedo } from "@fortawesome/free-solid-svg-icons";
import MobileFilters from "./mobileFilters/mobileFilter";

import { DASHBOARD } from "../../routes";

const Header = () => {
  const location = useLocation();

  const [showSideNav, setShowSideNav] = useState(false);

  const toggleSideNav = () => {
    setShowSideNav(!showSideNav);
  };

  return (
    <div className="header">
      <div className="menu-button" onClick={toggleSideNav}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div className="logo">
        <Link to={DASHBOARD}>
          <img
            src="https://res.cloudinary.com/djnhrvjyf/image/upload/v1618660904/logo_r8zeo7.png"
            alt=""
          />
        </Link>
      </div>

      {/* DASHBOARD HEADERS */}
      {location.pathname === "/dashboard" ||
      location.pathname === "/dashboard/" ? (
        <React.Fragment>
          <div className="filters">
            <div className="date-time">
              <FilterDate />
            </div>
          </div>

          <div
            className="refresh-page"
            onClick={() => window.location.reload()}
          >
            <FontAwesomeIcon icon={faRedo} className="refresh-page-icon" />
          </div>
        </React.Fragment>
      ) : (
        ""
      )}

      {/* CUSTOMER HEADERS */}
      {
        //   location.pathname === CUSTOMERS ||
        // location.pathname === `${CUSTOMERS}/` ? (
        //   <div className="customer-header">
        //     <DropdownFilter
        //       options={["All User", "Form Users Only"]}
        //       selectOption={e => setHeaderFilter(e.target.innerText)}
        //       backdrop={false}
        //       optionSelected={headerFilter}
        //     />
        //     <RegularButton
        //       buttonText="Add User"
        //       buttonClick={() => {
        //         setAddCustomerAnimation(true);
        //         setAddCustomerModal(true);
        //       }}
        //     />
        //   </div>
        // ) : (
        //   ""
        //   )
      }

      {/* POST HEADERS */}
      {
        //   location.pathname === POST || location.pathname === `${POST}/` ? (
        //   <div className="post-header">
        //     <RegularButton
        //       buttonText="Add New Post"
        //       buttonClick={() => {
        //         setAddPostModal(true);
        //         setAddPostAnimation(true);
        //       }}
        //     />
        //   </div>
        // ) : (
        //   ""
        //   )
      }

      {/* Charity HEADERS */}
      {
        //   location.pathname === CHARITY || location.pathname === `${CHARITY}/` ? (
        //   <div className="charity-header">
        //     <RegularButton
        //       buttonText="Add New Charity"
        //       buttonClick={() => {
        //         setAddCharityModal(true);
        //         setAddCharityModalAnimation(true);
        //       }}
        //     />
        //   </div>
        // ) : (
        //   ""
        //   )
      }

      {/* DONATION HEADERS */}
      {
        //   location.pathname === DONATIONS ||
        // location.pathname === `${DONATIONS}/` ? (
        //   <div className="doantion-header">
        //     <RegularButton
        //       buttonText="Add New Donation"
        //       buttonClick={() => {
        //         setAddDonationsModal(true);
        //         setAddDonationModalAnimation(true);
        //       }}
        //     />
        //   </div>
        // ) : (
        //   ""
        //   )
      }

      <div className="mobile-filter">
        <MobileFilters />
      </div>

      {/* SIDE NAV DRAWER */}
      <SideNav toggleSideNav={toggleSideNav} showSideNav={showSideNav} />
    </div>
  );
};

export default Header;
