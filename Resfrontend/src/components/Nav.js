import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const logout = () => {
    const isConfirmed = window.confirm("Do you want to Logout ?");
    if (isConfirmed) {
      openModal();
      localStorage.clear();
      setTimeout(() => {
        navigate("/signup");
      }, 1000); // Navigate after a delay or after some animation
    } else {
      console.log("Are you sure?");
    }
  };
  return (
    <div className="decoration">
      <img
        alt="logo"
        className="logo"
        src="data:image/jpeg;base64,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"
      ></img>
      {auth ? (
        <ul className="nav-ul">
          <li>
            <Link to="/home">Home Page</Link>
          </li>
          <li>
            <Link to="/add">Add Details</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          {/* <li>
            <Link to="/update/:id">Update Details</Link>
          </li> */}
          <li>
            <Link onClick={logout} to="/singup">
              Logout {JSON.parse(auth).name}
            </Link>
          </li>
        </ul>
      ) : (
        <ul className="nav-ul nav-right">
          <li>
            <Link to="/singup">Singup</Link>
          </li>
          <li>
            <Link to="/login">login</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Nav;
