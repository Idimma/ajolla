import "./styles.scss";

import { Table, Pagination, Switch } from "antd";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import * as api from "../../../constants/baseUri";
import { GeneralContext } from "../../../context/generalContext/generalContext";

const columns = [
  {
    title: "ID",
    dataIndex: "Id",
    key: "id",
    width: 70
  },
  {
    title: "Currency Name",
    dataIndex: "Currency_Name",
    key: "currency_Name"
    // width: 200
  },
  {
    title: "Short Code",
    dataIndex: "Short_Code",
    key: "short_code"
  },
  {
    title: "Currency Symbol",
    dataIndex: "Currency_symbol",
    key: "currency_symbol"
    // width: 80
  },
  {
    title: "Active",
    dataIndex: "Currency_active",
    key: "currency_active"
    // width: 80
  }
];

const Currency = () => {
  // api base uri
  const BASE_URI = api.BASE_URI;

  // getting values from general context Contex
  const { setLoading, showAlert } = useContext(GeneralContext);

  // currrent page for pagination
  const [currentPage, setCurrentPage] = useState(1);

  // state for post data
  const [currencies, setCurrencies] = useState([]);

  // for total post
  const [totalCurrency, setTotalCurrency] = useState(null);

  // get post function
  const getCurrencyData = async paagNumber => {
    setLoading(true);
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("user-token")}`
      }
    };

    try {
      const dataReturned = await axios.get(
        `${BASE_URI}/currency?page=${paagNumber}`,
        config
      );

      setCurrencies(dataReturned.data.data.data);
      setTotalCurrency(dataReturned.data.data.total);
      setLoading(false);
    } catch (err) {
      showAlert("error", err.message);
    }
  };

  // fuction for editing news
  const updateCurrency = async (status, id) => {
    console.log(status);
    setLoading(true);

    let config = {
      method: "post",
      url: `${BASE_URI}/currency/${id}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("user-token")}`
      },
      data: {
        active: status ? 1 : 0
      }
    };
    try {
      // eslint-disable-next-line
      const userDataReturned = await axios(config);
      setLoading(false);
      showAlert("success", "Updated");
    } catch (err) {
      console.log("error", err);
    }
  };

  // state value for input
  const [searchValue, setSearchValue] = useState("");

  // function checking input
  const checkSearch = e => {
    setSearchValue(e);
    if (searchValue.length >= 1) {
      console.log("start");
      searchFunction();
    } else if (searchValue.length === 0) {
      console.log("new");
      getCurrencyData(currentPage);
    }
  };

  // search function
  const searchFunction = async () => {
    setLoading(true);
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
      const userDataReturned = await axios(config);

      setCurrencies(userDataReturned.data.data.data);
      if (userDataReturned.data.data.total === 0) {
        setTotalCurrency(null);
      } else {
        setTotalCurrency(userDataReturned.data.data.data);
      }
      setLoading(false);
    } catch (err) {
      console.log("error", err);
    }

    // setLoading(true);
  };

  useEffect(() => {
    getCurrencyData(currentPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  return (
    <div className="currency">
      <div className="table-pages-header large">
        <div className="search-bar">
          <i className="fa fa-search"></i>

          <input
            type="text"
            placeholder="Search Currency"
            value={searchValue}
            onChange={e => checkSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="currency-table">
        <Table
          columns={columns}
          pagination={false}
          className="table"
          scroll={{ x: "1200px", y: "calc(100vh - 300px)" }}
          dataSource={currencies.map(currency => ({
            key: currency.id,
            Id: currency.id,
            Currency_Name: currency.currency_name,
            Short_Code: currency.short_code,
            Currency_symbol: currency.currency_html_symbol,
            Currency_active: (
              <Switch
                defaultChecked={currency.active === 0 ? false : true}
                onChange={e => updateCurrency(e, currency.id)}
              />
            )
          }))}
        />
        {totalCurrency && (
          <Pagination
            defaultCurrent={1}
            total={totalCurrency}
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

export default Currency;
