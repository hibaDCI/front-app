import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
// import axios from "axios";
import OnlyTest from "./OnlyTest";
import axios from "../utils/axiosConfig"; // other way which better later when config for deployment
function Login() {
  // event.target is always refer to the form element
  const [register, setRegister] = useState("you need to register");
  const [logged, setLogged] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    //! this way basiclly about performance , with useState,every time change state will effect the performance, it's more efficient , there is no rerendering here , because we are not rendering the page
    event.preventDefault();
    const formData = new FormData(event.target);

    const data = {
      username: formData.get("username"),
      email: formData.get("email"),
      password: formData.get("password"),
    };

    try {
      const response = await axios.post("/api/users/login", data);
      localStorage.setItem("token", true);
      console.log(response);

      setRegister(response.data.message);
      setLogged(true);

      navigate("/profile");
    } catch (error) {
      console.log(error);
    }
    // the other way
    /* 
       const fd = new FormData(e.target);
        const data = Object.fromEntries(fd.entries());
     */
    // what special about post requests with axios
    // if we useing axios then there is no need to wrap it with json.stringify
    // await fetch(url, {
    //   data: JSON.stringify(data),
    //   method: "POST",
    //   headers: {"Content-Type": "application/json"},
    // });
  };

  return (
    <div className="container d-flex justify-content-center flex-column text-info align-items-center ">
      <di>{register}</di>
      <form action="" method="post" onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Email"
          required={true}
        />

        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          required={true}
        />
        <button type="submit" className="btn btn-info">
          Login
        </button>
      </form>
      {/* <OnlyTest /> */}
    </div>
  );
}

export default Login;
