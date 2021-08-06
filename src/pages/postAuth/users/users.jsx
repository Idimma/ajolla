import "./styles.scss";
import { Table } from "antd";

const columns = [
  {
    title: "USERNAME",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "NAME",
    dataIndex: "Name",
    key: "Name",
  },
  {
    title: "PHONE",
    dataIndex: "Phone",
    key: "phone",
  },
  {
    title: "EMAIL",
    dataIndex: "Email",
    key: "email",
  },
  {
    title: "COMPANY",
    dataIndex: "Company",
    key: "company",
  },
  {
    title: "ADDRESS",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Action",
    dataIndex: "Action",
    key: "action",
    width: 100,
  },
];

const Users = () => {
  return (
    <div className="customers">
      <div className="customers-table">
        <Table
          columns={columns}
          pagination={false}
          className="table"
          scroll={{ x: "1200px", y: "calc(100vh - 300px)" }}
        />
      </div>
    </div>
  );
};

export default Users;
