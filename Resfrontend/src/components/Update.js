import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Update = () => {
  const [name, setName] = React.useState("");
  const [rollno, setRollno] = React.useState("");
  const [section, setSection] = React.useState("");
  const [branch, setBranch] = React.useState("");
  const [mobile, setMoblileno] = React.useState("");
  const [fathername, setFathername] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [collagename, setCollagename] = React.useState("");
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getProductDetails();
  }, []);

  const getProductDetails = async () => {
    let result = await fetch(`http://localhost:5000/details/${params.id}`);
    result = await result.json();
    setName(result.name);
    setRollno(result.rollno);
    setSection(result.section);
    setBranch(result.branch);
    setMoblileno(result.mobile);
    setFathername(result.fathername);
    setAddress(result.address);
    setCollagename(result.collagename);
  };
  const UpdateDetails = async () => {
    const isConfirmed = window.confirm("Do you want to Update these details?");

    // console.warn(
    //   name,
    //   rollno,
    //   section,
    //   branch,
    //   mobile,
    //   fathername,
    //   address,
    //   collagename
    // );
    if (isConfirmed) {
      let result = await fetch(`http://localhost:5000/details/${params.id}`, {
        method: "PUT",
        body: JSON.stringify({
          name,
          rollno,
          section,
          branch,
          mobile,
          fathername,
          address,
          collagename,
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
  };

  return (
    <div>
      <div className="add">
        <h5 className="deco">Update Product</h5>
        <input
          type="text"
          value={name}
          className="inputBox1"
          placeholder="Enter Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          className="inputBox1"
          value={rollno}
          placeholder="Enter Roll.no"
          onChange={(e) => setRollno(e.target.value)}
        />

        <input
          type="text"
          value={section}
          className="inputBox1"
          placeholder="Enter Section"
          onChange={(e) => setSection(e.target.value)}
        />
        <input
          type="text"
          className="inputBox1"
          value={branch}
          placeholder="Enter Branch"
          onChange={(e) => setBranch(e.target.value)}
        />

        <input
          type="text"
          value={mobile}
          className="inputBox1"
          placeholder="Mobile.No"
          onChange={(e) => setMoblileno(e.target.value)}
        />

        <input
          type="text"
          className="inputBox1"
          value={fathername}
          placeholder="Father's Name"
          onChange={(e) => setFathername(e.target.value)}
        />

        <input
          type="text"
          className="inputBox1"
          value={address}
          placeholder="Address"
          onChange={(e) => setAddress(e.target.value)}
        />

        <input
          type="text"
          value={collagename}
          className="inputBox1"
          placeholder="Collage Name"
          onChange={(e) => setCollagename(e.target.value)}
        />
        <button className="button1" onClick={UpdateDetails}>
          Update
        </button>
      </div>
    </div>
  );
};
export default Update;
