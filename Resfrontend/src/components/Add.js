// AttendancePage.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const [name, setName] = useState("");
  const [rollno, setRollno] = useState("");
  const [section, setSection] = useState("");
  const [branch, setBranch] = useState("");
  const [mobile, setMoblileno] = useState("");
  const [fathername, setFathername] = useState("");
  const [address, setAddress] = useState("");
  const [collagename, setCollagename] = useState("");

  const navigate = useNavigate();

  // useEffect(() => {
  //   const auth = localStorage.getItem("details");
  //   if (auth) {
  //     navigate("/home");
  //   }
  // }, []);

  const [error, setError] = useState(false);
  const loginhandel = async () => {
    console.log(!name);
    if (
      !name ||
      !rollno ||
      !section ||
      !branch ||
      !mobile ||
      !fathername ||
      !address ||
      !collagename
    ) {
      setError(true);
      return false;
    }
    const isConfirmed = window.confirm("Do you want to add these details?");
    //adddetail
    if (isConfirmed) {
      const userid = JSON.parse(localStorage.getItem("user"))._id;
      let result = await fetch("http://localhost:5000/adddetail", {
        method: "post",
        body: JSON.stringify({
          name,
          rollno,
          section,
          branch,
          mobile,
          fathername,
          address,
          collagename,
          userid,
        }),

        headers: {
          "Content-Type": "application/json",
        },
      });

      result = await result.json();
      navigate("/home");
      console.warn(result);
    } else {
      console.log("User canceled the operation");
    }
    // if (isConfirmed) {
    //   // If user clicks "OK" in the confirmation dialog
    //   const userid = JSON.parse(localStorage.getItem("user"))._id;
    //   let result = await fetch("http://localhost:5000/adddetail", {
    //     method: "post",
    //     body: JSON.stringify({
    //       name,
    //       rollno,
    //       section,
    //       branch,
    //       mobile,
    //       fathername,
    //       address,
    //       collagename,
    //       userid,
    //     }),
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   });

    //   result = await result.json();
    //   navigate("/home");
    //   console.warn(result);
    // } else {
    //   // If user clicks "Cancel" in the confirmation dialog
    //   console.log("User canceled the operation");
    // }
  };
  return (
    <div>
      <div className="add">
        <h5 className="deco">Add Student Details</h5>
        <input
          type="text"
          value={name}
          className="inputBox1"
          placeholder="Enter Name"
          onChange={(e) => setName(e.target.value)}
        />
        {error && !name && <spam className="spam1">Enter valid name</spam>}
        <input
          type="text"
          className="inputBox1"
          value={rollno}
          placeholder="Enter Roll.no"
          onChange={(e) => setRollno(e.target.value)}
        />
        {error && !rollno && <spam className="spam1">Enter valid name</spam>}

        <input
          type="text"
          value={section}
          className="inputBox1"
          placeholder="Enter Section"
          onChange={(e) => setSection(e.target.value)}
        />
        {error && !section && <spam className="spam1">Enter valid name</spam>}
        <input
          type="text"
          className="inputBox1"
          value={branch}
          placeholder="Enter Branch"
          onChange={(e) => setBranch(e.target.value)}
        />
        {error && !branch && <spam className="spam1">Enter valid name</spam>}

        <input
          type="text"
          value={mobile}
          className="inputBox1"
          placeholder="Mobile.No"
          onChange={(e) => setMoblileno(e.target.value)}
        />
        {error && !mobile && <spam className="spam1">Enter valid name</spam>}

        <input
          type="text"
          className="inputBox1"
          value={fathername}
          placeholder="Father's Name"
          onChange={(e) => setFathername(e.target.value)}
        />
        {error && !fathername && (
          <spam className="spam1">Enter valid name</spam>
        )}

        <input
          type="text"
          className="inputBox1"
          value={address}
          placeholder="Address"
          onChange={(e) => setAddress(e.target.value)}
        />
        {error && !address && <spam className="spam1">Enter valid name</spam>}

        <input
          type="text"
          value={collagename}
          className="inputBox1"
          placeholder="Collage Name"
          onChange={(e) => setCollagename(e.target.value)}
        />
        {error && !collagename && (
          <spam className="spam1">Enter valid name</spam>
        )}

        <button className="button1" onClick={loginhandel}>
          Add Details
        </button>
      </div>
    </div>
  );
};

export default Add;
