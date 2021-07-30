import axios from "axios/index";
import { BASE_URI as baseURL } from "../constants/baseUri";

/**
 * Configure axios to automatically add baseUrl and authorization to needed api request
 */
function Request() {
  let token = window.localStorage.getItem("user-token");
  if (token) {
    const headers = { Authorization: `Bearer ${token}` };
    return axios.create({ baseURL, headers });
  } else return axios.create({ baseURL });
}

export default Request;
