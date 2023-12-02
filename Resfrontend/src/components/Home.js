import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Update from "./Update";
const Home = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    getProduct();
  }, []);

  const deleteDetals = async (id) => {
    const isConfirmed = window.confirm("Do you want to delete these details?");
    if (isConfirmed) {
      let result = await fetch(`http://localhost:5000/details/${id}`, {
        method: "Delete",
      });
      result = await result.json();
      if (result) {
        getProduct();
        alert("record is Deleted");
      }
    } else {
      console.log("you can cancele");
    }
  };

  const getProduct = async () => {
    let result = await fetch("http://localhost:5000/details");
    result = await result.json();
    setProduct(result);
  };
  const searchHandel = async (event) => {
    //console.warn(event.target.value);
    let key = event.target.value;
    if (key) {
      let result = await fetch(`http://localhost:5000/search/${key}`);
      result = await result.json();
      if (result) {
        setProduct(result);
      }
    } else {
      getProduct();
    }
  };
  // console.warn("list", list);

  // const fun = (id) => {
  //   <Link to={`/update/:id` + id}>
  //     <Update />
  //   </Link>;
  // };
  return (
    <div className="detailsList">
      <h3 className="deco">STUDENT-LIST</h3>
      <input
        type="text"
        className="search"
        placeholder="search"
        onChange={searchHandel}
      />
      <ul className="">
        <li>S.No</li>
        <li>Name</li>
        <li>Roll.No</li>
        <li>Section</li>
        <li>Branch</li>
        <li>Mobile.No</li>
        <li>Father's-Name</li>
        <li>Address</li>
        <li>Collage Name</li>
        {/* <li>Delete</li>
        <li>Update</li> */}
      </ul>

      {product.length > 0 ? (
        product.map((item, index) => (
          <ul key={item._id}>
            <li>{index + 1}</li>
            <li>{item.name}</li>
            <li>{item.rollno}</li>
            <li>{item.section}</li>
            <li>{item.branch}</li>
            <li>{item.mobile}</li>
            <li>{item.fathername}</li>
            <li>{item.address}</li>
            <li>{item.collagename}</li>
            <li>
              <button
                className="button2"
                onClick={() => deleteDetals(item._id)}
              >
                Delete
              </button>
            </li>

            <li>
              <button className="button2">
                <Link to={`/update/` + item._id}>Update</Link>
              </button>
            </li>
          </ul>
        ))
      ) : (
        <h1 className="opps">
          <img src="https://www.shutterstock.com/image-vector/small-chick-holding-opps-sign-260nw-1510548410.jpg"></img>
          No Result
        </h1>
      )}
      <br></br>
      <h1></h1>
      <h1></h1>
      <h6> </h6>
    </div>
  );
};
export default Home;

