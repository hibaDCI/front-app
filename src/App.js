import "./App.css";
import Login from "./component/Login";
import Register from "./component/Register";
// eslint-disable-next-line
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import CreatePost from "./component/CreatePost";
import FormValidation from "./component/FormValidation";
import Navbar from "./component/Navbar";
import AllUsers from "./component/AllUsers";
import ContactUs from "./component/ContactUs";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* <Route path="/register" element={<Register />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/allusers" element={<AllUsers />} />

        <Route path="/profile" element={<h1>Hello there</h1>} />
        <Route path="/post" element={<CreatePost />} />
        <Route path="/form" element={<FormValidation />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
