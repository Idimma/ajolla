import "./styles.scss";
import { Pagination, Table } from "antd";
import { useContext, useEffect } from "react";
import DropdownFilter from "../../../components/dropdownFilter/dropdownFilter";
import GeneralButton from "../../../components/generalButton/AcceptButton";
import { UsersContext } from "../../../context/usersContext/usersContext";
import CustomerProfile from "../../../components/customerProfile/CustomerProfile";
import CustomerTaskDetails from "../../../components/customerProfile/customerTaskDetails/customerTaskDetails";

const columns = [
  {
    title: "USERNAME",
    dataIndex: "id",
    key: "id"
  },
  {
    title: "NAME",
    dataIndex: "Name",
    key: "Name"
  },
  {
    title: "PHONE",
    dataIndex: "Phone",
    key: "phone"
  },
  {
    title: "EMAIL",
    dataIndex: "Email",
    key: "email"
  },
  {
    title: "COMPANY",
    dataIndex: "Company",
    key: "company"
  },
  {
    title: "ADDRESS",
    dataIndex: "address",
    key: "address"
  },
  {
    title: "Action",
    dataIndex: "Action",
    key: "action",
    width: 100
  }
];

const Users = () => {
  const {
    users,
    totalUsers,
    setCurrentPage,
    currentPage,
    setSelectedRows,
    selectedRows,

    filterOne,
    setFilterOne,
    filterTwo,
    setFilterTwo,
    filterOneOptions,
    filterTwoOptions,
    setCustomerDetails
  } = useContext(UsersContext);

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      setSelectedRows(selectedRowKeys);
    }
  };

  useEffect(() => {
    // getUserData(currentPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  return (
    <div className="customers">
      <div className="table-pages-header large">
        <div className="search-bar">
          <i className="fa fa-search"></i>
          <input type="text" placeholder="Search User" />
        </div>

        <div className="filter">
          <div className="filter-one">
            <DropdownFilter
              options={filterOneOptions}
              selectOption={e => setFilterOne(e.target.innerText)}
              backdrop={false}
              optionSelected={filterOne}
            />
          </div>

          <div className="filter-two">
            <DropdownFilter
              options={filterTwoOptions}
              selectOption={e => setFilterTwo(e.target.innerText)}
              backdrop={false}
              optionSelected={filterTwo}
            />
          </div>
        </div>

        <div className="delete-btn">
          {selectedRows.length >= 1 ? (
            <GeneralButton buttonText="Delete" />
          ) : (
            ""
          )}
        </div>
      </div>

      <div className="table-pages-header mobile">
        {selectedRows.length >= 1 ? (
          ""
        ) : (
          <div className="search-bar">
            <i className="fa fa-search"></i>
            <input type="text" placeholder="Search User" />
          </div>
        )}

        <div className="delete-btn">
          {selectedRows.length >= 1 ? (
            <GeneralButton buttonText="Delete" />
          ) : (
            ""
          )}
        </div>
      </div>

      <div className="customers-table">
        <Table
          columns={columns}
          pagination={false}
          className="table"
          rowSelection={{
            type: "checkbox",
            ...rowSelection
          }}
          scroll={{ x: "1200px", y: "calc(100vh - 300px)" }}
          dataSource={users.map(user => {
            const locations = user?.locations || [];
            const addr = locations.find(s => {
              if (s.is_default === 1) {
                return s;
              }
              return {};
            });
            if (addr && addr.hasOwnProperty("latitude")) {
              addr.map =
                "https://maps.google.com/?q=" +
                addr.latitude +
                "," +
                addr.longitude;
            }
            return {
              key: user.uuid,
              id: (
                <button
                  onClick={() => setCustomerDetails(true)}
                  className="customers-username"
                >
                  {user.username}
                </button>
              ),
              Name: user.name,
              Phone: user.phone,
              Email: user.email,
              Company: user.company,
              address: addr?.address,
              Action: (
                <div className="more">
                  <span className="material-icons more-icon">more_horiz</span>
                  <span className="material-icons arrow-icon">
                    arrow_drop_up
                  </span>
                  <ul className="dropdown">
                    <li
                      className="option"
                      // onClick={() => {
                      //   setEditCustomerModal(true);
                      //   setEditCustomerAnimation(true);
                      // }}
                    >
                      Edit
                    </li>
                    <li className="option">Delete</li>
                  </ul>
                </div>
              )
            };
          })}
        />
        {totalUsers && (
          <Pagination
            defaultCurrent={1}
            total={totalUsers}
            onChange={page => {
              setCurrentPage(page);
            }}
            style={{ textAlign: "right", marginTop: "20px" }}
          />
        )}
      </div>

      {
        // addCustomerModal && (
        // <div className="modal-wrapper">
        //   <div className="backdrop"></div>
        //   <div
        //     className={`modal
        //     ${addCustomerAnimation ? "fade-in" : "fade-out"}
        //   `}
        //   >
        //     <Form
        //       formHeading="Add User"
        //       cancelBtn={() => {
        //         setAddCustomerAnimation(false);
        //         setTimeout(() => setAddCustomerModal(false), 600);
        //       }}
        //     />
        //   </div>
        // </div>
        // )
      }

      {
        // editCustomerModal && (
        // <div className="modal-wrapper">
        //   <div className="backdrop"></div>
        //   <div
        //     className={`modal
        //   ${editCustomerAnimation ? "fade-in" : "fade-out"}
        //   `}
        //   >
        //     <Form
        //       formHeading="Edit User"
        //       cancelBtn={() => {
        //         setEditCustomerAnimation(false);
        //         setTimeout(() => setEditCustomerModal(false), 600);
        //       }}
        //     />
        //   </div>
        // </div>
        // )
      }

      {/* customer details */}
      <CustomerProfile />

      {/* customer Task details */}
      <CustomerTaskDetails />
    </div>
  );
};

export default Users;
