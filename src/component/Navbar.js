// import Button from "react-bootstrap/Button";
// import Container from "react-bootstrap/Container";
// import Form from "react-bootstrap/Form";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import {Link} from "react-router-dom";

function Navbar() {
  const token = localStorage.getItem("token");

  return (
    <nav className="navbar bg-info ">
      <div className="container justify-content-around ">
        <Link className="navbar-brand text-light" to="/form">
          Navbar
        </Link>
        <Link className="navbar-brand text-light" to="/allusers">
          AllUsers
        </Link>
        {/* // conditional */}
        {token === "true" ? (
          " "
        ) : (
          <Link to="/register" className="nav-link text-light ">
            register
          </Link>
        )}

        <Link to="/contactus" className="nav-link text-light ">
          Contact Us
        </Link>
        <span className="nav-item">
          <Link to="/login" className="nav-link text-light ">
            Login
          </Link>
        </span>
        <span className="nav-item">
          <Link className="nav-link text-light " to="/post">
            Add Post
          </Link>
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
