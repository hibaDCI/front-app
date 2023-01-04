import axios from "axios";

const axiosApiInstance = axios.create();

// axios.defaults.withCredentials = true;

console.log("node_env", process.env.NODE_ENV);
// it's done by reACT
const url =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5000"
    : "https://superuser.onrender.com";

axiosApiInstance.defaults.baseURL = url;
// axiosApiInstance.defaults.baseURL = "http://localhost:5000";
// setting up access control equel true
// axiosApiInstance.defaults.withCredentials = true;
export default axiosApiInstance;

// how to specify when to use localhost and when to use the domain name

// how to specify the type of the user if admin or guest

// why after deployment the cookies doesn't work
