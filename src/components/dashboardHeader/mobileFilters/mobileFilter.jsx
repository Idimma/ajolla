import "./styles.scss";
import FilterDate from "../FilterDateTime/FilterDateTime";
import React, { useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import RegularButton from "../../generalButton/RegularButton";
import { UsersContext } from "../../../context/usersContext/usersContext";
import DropdownFilter from "../../dropdownFilter/dropdownFilter";

import { USERS } from "../../../routes";

const MobileFilters = () => {
  const location = useLocation();
  const {
    setAddCustomerModal,
    headerFilter,
    setHeaderFilter,
    setAddCustomerAnimation
  } = useContext(UsersContext);

  const [modal, setModal] = useState(false);

  return (
    <div className="mobile-filter-dropdown">
      <div className="filter-btn" onClick={() => setModal(!modal)}>
        <span className="material-icons-outlined">filter_alt</span>
      </div>

      {modal && (
        <React.Fragment>
          {/* DASHBOARD */}
          {location.pathname === "/dashboard" ||
          location.pathname === "/dashboard/" ? (
            <div className="filter-dropdown">
              <div className="date">
                <FilterDate />
              </div>
            </div>
          ) : (
            ""
          )}

          {/* COSTOMERS */}
          {location.pathname === USERS || location.pathname === `${USERS}/` ? (
            <div className="filter-dropdown">
              <DropdownFilter
                options={["All User", "Form User Only"]}
                selectOption={e => setHeaderFilter(e.target.innerText)}
                backdrop={false}
                optionSelected={headerFilter}
              />
              <RegularButton
                buttonText="Add User"
                buttonClick={() => {
                  setAddCustomerAnimation(true);
                  setAddCustomerModal(true);
                }}
              />
            </div>
          ) : (
            ""
          )}

          {/* POSTS */}
          {
            //   location.pathname === POST || location.pathname === `${POST}/` ? (
            //   <div className="filter-dropdown">
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

          {/* CHARITY */}
          {
            //   location.pathname === CHARITY ||
            // location.pathname === `${CHARITY}/` ? (
            //   <div className="filter-dropdown">
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

          {/* DONATION */}
          {
            //   location.pathname === DONATIONS ||
            // location.pathname === `${DONATIONS}/` ? (
            //   <div className="filter-dropdown">
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
        </React.Fragment>
      )}
    </div>
  );
};

export default MobileFilters;
