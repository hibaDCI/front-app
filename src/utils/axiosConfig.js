import axios from "axios";

const axiosApiInstance = axios.create();
// axios.defaults.withCredentials = true;
// axiosApiInstance.defaults.baseURL = "https://usersapp.onrender.com";
axiosApiInstance.defaults.baseURL = "https://superuser.onrender.com";

export default axiosApiInstance;
