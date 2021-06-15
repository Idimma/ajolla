import "./styles.scss";

import { Table, Pagination, Switch } from "antd";
import axios from "axios";
import { useContext, useEffect, useState } from "react";

import { GeneralContext } from "../../../context/generalContext/generalContext";
import * as api from "../../../constants/baseUri";

const columns = [
  {
    title: "ISO",
    dataIndex: "iso",
    key: "iso",
    width: 70
    // render: text => <a>{text}</a>,
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name"
  },
  {
    title: "Phone Code",
    dataIndex: "phoneCode",
    key: "phoneCode"
  },
  {
    title: "Supported",
    dataIndex: "Supported",
    key: "Supported"
  }
];

const Country = () => {
  // getting state from auth Contex
  const { setLoading, showAlert } = useContext(GeneralContext);

  // base uri
  const BASE_URI = api.BASE_URI;

  // state for current page
  let [currentPage, setCurrentPage] = useState(1);

  // state for donations data
  const [countries, setCountries] = useState([]);

  const [totalCountries, setTotalCountries] = useState(null);

  // get news donations
  const getCountry = async paagNumber => {
    setLoading(true);
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("user-token")}`
      }
    };

    try {
      const dataReturned = await axios.get(
        `${BASE_URI}/country?page=${paagNumber}`,
        config
      );
      setCountries(dataReturned.data.data.data);
      setTotalCountries(dataReturned.data.data.total);
      setLoading(false);
    } catch (err) {
      console.log(err.message);
    }
  };

  // fuction for editing news
  const updateCountry = async (status, id) => {
    setLoading(true);

    let config = {
      method: "post",
      url: `${BASE_URI}/country/${id}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("user-token")}`
      },
      data: {
        is_supported: status ? 1 : 0
      }
    };
    try {
      // eslint-disable-next-line
      const dataReturned = await axios(config);
      setLoading(false);
      showAlert("success", `Updated`);
    } catch (err) {
      console.log(err);
      showAlert("error", err.message);
    }
  };

  // state for search input
  const [searchValue, setSearchValue] = useState("");

  // function shecking search input
  const checkSearch = e => {
    setSearchValue(e);
    if (searchValue.length >= 1) {
      console.log("start");
      searchFunction();
    } else if (searchValue.length === 0) {
      console.log("new");
      getCountry(currentPage);
    }
  };

  // search function
  const searchFunction = async () => {
    let config = {
      method: "get",
      url: `${BASE_URI}/currency?q=${searchValue}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("user-token")}`
      }
      // data:
    };
    try {
      // eslint-disable-next-line
      const dataReturned = await axios(config);
      console.log(dataReturned);

      setCountries(dataReturned.data.data.data);
      if (dataReturned.data.data.total === 0) {
        setTotalCountries(null);
      } else {
        setTotalCountries(dataReturned.data.data.data);
      }
    } catch (err) {
      console.log("error", err);
    }

    // setLoading(true);
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const userToken = localStorage.getItem("user-token");

    if (user && userToken) {
      getCountry(currentPage);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  return (
    <div className="country">
      <div className="table-pages-header">
        <div className="search-bar">
          <i className="fa fa-search"></i>
          <input
            type="text"
            placeholder="Search Country"
            value={searchValue}
            onChange={e => checkSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="country-table">
        <Table
          columns={columns}
          pagination={false}
          className="table"
          scroll={{ x: "1200px", y: "calc(100vh - 300px)" }}
          dataSource={countries?.map(country => ({
            key: country.id,
            iso: country.iso,
            name: country.name,
            phoneCode: country.phonecode,
            Supported: (
              <Switch
                defaultChecked={country.is_supported === 0 ? false : true}
                onChange={e => updateCountry(e, country.id)}
              />
            )
          }))}
        />
        {totalCountries && (
          <Pagination
            defaultCurrent={1}
            total={totalCountries}
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

export default Country;
