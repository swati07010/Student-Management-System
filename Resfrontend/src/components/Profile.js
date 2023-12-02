import React from "react";
import { useNavigate } from "react-router-dom";
const Profile = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  const login = () => {
    navigate("/singup");
  };
  const email = () => {
    navigate("/singup");
  };
  return (
    <div className="profile">
      <div className="profile1">
        <img
          src="https://img.freepik.com/premium-vector/welcome-illustration_132971-116.jpg"
          height="200px"
        />
        <h1 onChange={login} to="/singup">
          WelCome :
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrrX4WJY9K43q1L-6IRWB4Ne55jK9QOC75iw&usqp=CAU"
            height="36px"
          />
          :{JSON.parse(auth).name}
        </h1>
        <h1 onChange={login} to="/singup">
          Email :
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrrX4WJY9K43q1L-6IRWB4Ne55jK9QOC75iw&usqp=CAU"
            height="36px"
          />{" "}
          :{JSON.parse(auth).email}
        </h1>
      </div>
    </div>
  );
};

export default Profile;
