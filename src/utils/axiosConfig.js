import axios from "axios";

const axiosApiInstance = axios.create();
// axios.defaults.withCredentials = true;
axiosApiInstance.defaults.baseURL = "https://superuser.onrender.com";
// axiosApiInstance.defaults.baseURL = "http://localhost:5000";

export default axiosApiInstance;
