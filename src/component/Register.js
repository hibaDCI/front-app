import React, {useState} from "react";
// import axios from "axios";
import axios from "../utils/axiosConfig"; // other way which better later when config for deployment

function Register() {
  const [register, setRegister] = useState("you need to register");
  const [userPic, setUserPic] = useState();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleFileChange = (e) => {
    setUserPic(e.target.files[0]);
  };
  const userHandler = (e) => {
    setUser({...user, [e.target.name]: e.target.value});
  };
  const handleSubmit = async (e) => {
    //! this way basiclly about performance , with useState,every time change state will effect the performance, it's more efficient , there is no rerendering here , because we are not rendering the page
    e.preventDefault();
    const formData = new FormData(); // create instance of a object for html form
    formData.append("username", user.username); // add plant name to formData object
    formData.append("email", user.email);
    formData.append("password", user.password);
    formData.append("userPic", userPic);
    // if I want to show the image in front before submit I can use this
    // preview: URL.createObjectURL(e.target.files[0]),
    try {
      const response = await axios.post("/api/users/register", formData, {
        headers: {"Content-Type": "multipart/form-data"}, // if we have this config no need to add the enctype="multipart/form-data"
      });
      console.log(response.data);
      // setRegister(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const token = localStorage.getItem("token");
  return token === true ? (
    <div className="container d-flex justify-content-center flex-column text-info align-items-center ">
      <di>{register}</di>
      {/* {userPic.preview && (
        <img src={userPic.preview} width="100" height="100" />
      )} */}
      <form action="" method="post" onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Email"
          required={true}
          onChange={userHandler}
        />
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Username"
          required={true}
          onChange={userHandler}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          required={true}
          onChange={userHandler}
        />
        <label htmlFor="">
          <input
            placeholder="image"
            type="file"
            name="userPic"
            id="userPic"
            accept="image/*"
            onChange={handleFileChange}
            // multiple
          />
        </label>
        <button type="submit" className="btn btn-info">
          register
        </button>
      </form>
    </div>
  ) : (
    "hello"
  );
}

export default Register;
