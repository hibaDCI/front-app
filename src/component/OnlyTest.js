import React from "react";
// import axios from "axios";
import axios from "../utils/axiosConfig";
function OnlyTest() {
  const func = async () => {
    const res = await axios.get("/users");
    console.log(res);
    //   method: "GET",
    //   baseUrl: "https://usersapp.onrender.com",
    //   url: "/users",
    // });
  };

  return <button onClick={func}>click</button>;
}

export default OnlyTest;
// this file just to test the route after deployment, the solution was to use the axios as utils and create baseUrl there
