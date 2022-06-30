import React, { useEffect, useState } from "react";
import "./Register.css";
import { useSelector } from "react-redux/es/exports";
import axios from "axios";
import { submitData } from "../redux/auth/action";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { useNavigate } from "react-router";

export const Register = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function submit() {
    dispatch(submitData(data));
  }

  useEffect(() => {}, []);

  function handleChange(e) {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  }

  const auth = useSelector((store) => store);
  console.log(auth);
  console.log(data);

  function moveit() {
    navigate("/login");
  }
  return (
    <div className="mainDiv">
      <div className="inDiv">
        <h1>Sign up</h1>
        <h3>to access all the features of this app</h3>
      </div>
      <div className="scndDiv">
        <input
          type="text"
          name="username"
          value={data.username}
          onChange={handleChange}
          placeholder="Enter Name"
        />
        <input
          type="password"
          name="password"
          value={data.password}
          onChange={handleChange}
          placeholder="Enter Password"
        />
        <input
          type="number"
          name="phone"
          value={data.phone}
          onChange={handleChange}
          placeholder="Enter Mobile No."
        />
        <input
          type="email"
          name="email"
          value={data.email}
          onChange={handleChange}
          placeholder="Enter Email"
        />

        <input
          type="text"
          name="gender"
          value={data.gender}
          onChange={handleChange}
          placeholder="Enter gender"
        />

        <button onClick={submit}>Sign Up</button>
        {/* <br /> */}
        <div className="showflex">
          <p>Already signed in</p>
          <button onClick={moveit} className="loguin">
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};
