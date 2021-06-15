import "./styles.scss";
import { Table, Pagination } from "antd";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { GeneralContext } from "../../../context/generalContext/generalContext";
import * as api from "../../../constants/baseUri";

const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    width: 70
  },
  {
    title: "Name",
    dataIndex: "Name",
    key: "Name",
    width: 100
  },
  {
    title: "Description",
    dataIndex: "Description",
    key: "Description"
    // width: 200
  }
];

const Cartegory = () => {
  // getting values from auth Contex
  const { setLoading, showAlert } = useContext(GeneralContext);

  // base uri
  const BASE_URI = api.BASE_URI;

  // state for current page
  let [currentPage, setCurrentPage] = useState(1);

  // state for news data
  const [categoriesData, setCategoriesData] = useState([]);

  // total charity
  const [totalCategoty, setTotalCategoty] = useState(null);

  // get charity function
  const getCartegoryData = async paagNumber => {
    setLoading(true);
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("user-token")}`
      }
    };

    try {
      const dataReturned = await axios.get(
        `${BASE_URI}/category?page=${paagNumber}`,
        config
      );

      setLoading(false);
      setCategoriesData(dataReturned.data.data.data);
      setTotalCategoty(dataReturned.data.data.total);
    } catch (err) {
      showAlert("error", err.message);
    }
  };

  // state for search input
  const [searchValue, setSearchValue] = useState("");

  // function checking search value
  const checkSearch = e => {
    setSearchValue(e);
    if (searchValue.length >= 1) {
      console.log("start");
      searchFunction();
    } else if (searchValue.length === 0) {
      console.log("new");
      getCartegoryData(currentPage);
    }
  };

  // Search function
  const searchFunction = async () => {
    setLoading(true);

    let config = {
      method: "get",
      url: `${BASE_URI}/currency?q=${searchValue}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("user-token")}`
      }
    };
    try {
      // eslint-disable-next-line
      const userDataReturned = await axios(config);
      setCategoriesData(userDataReturned.data.data.data);
      if (userDataReturned.data.data.total === 0) {
        setTotalCategoty(null);
      } else {
        setTotalCategoty(userDataReturned.data.data.data);
      }
      setLoading(true);
    } catch (err) {
      console.log("error", err);
    }
  };

  useEffect(() => {
    getCartegoryData(currentPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  // state for selected rows
  const [setSelectedRows] = useState([]);
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      setSelectedRows(selectedRowKeys);
    }
  };

  return (
    <div className="cartegory">
      <div className="table-pages-header">
        <div className="search-bar">
          <i className="fa fa-search"></i>
          <input
            type="text"
            placeholder="Search Cartegory"
            value={searchValue}
            onChange={e => checkSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="cartegory-table">
        <Table
          columns={columns}
          pagination={false}
          className="table"
          rowSelection={{
            type: "checkbox",
            ...rowSelection
          }}
          scroll={{ x: "1200px", y: "calc(100vh - 300px)" }}
          dataSource={categoriesData.map(category => ({
            key: category.id,
            id: category.id,
            Name: category.name,
            Description:
              category.description?.length > 150
                ? category.description?.substring(0, 150) + "..."
                : category.description
          }))}
        />
        {totalCategoty && (
          <Pagination
            defaultCurrent={1}
            total={totalCategoty}
            onChange={page => {
              setCurrentPage(page);
            }}
            style={{ textAlign: "right", marginTop: "20px" }}
          />
        )}
      </div>
    </div>
  );
};

export default Cartegory;
