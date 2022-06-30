import React, { useState } from "react";
import "./Login.css";

import { logData } from "../redux/auth/action";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

export const Login = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  function handleChange(e) {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  }
  const dispatch = useDispatch();
  function moveit() {
    navigate("/signup");
  }
  function submit() {
    dispatch(logData(data));
    setTimeout(() => {
      navigate("/todo");
    }, 6000);
  }
  const auth = useSelector((store) => store);
  console.log(auth);
  return (
    <div className="mainDivu">
      <div className="inDivu">
        <h1>Log in</h1>
        <h3>to continue</h3>
      </div>
      <div className="scndDivu">
        <input
          type="username"
          name="username"
          value={data.username}
          onChange={handleChange}
          placeholder="Enter Username"
        />
        <input
          type="password"
          name="password"
          value={data.password}
          onChange={handleChange}
          placeholder="Enter Password"
        />

        <button onClick={submit}>Log In</button>
        <div className="showflex">
          <p>Not Signed up?</p>
          <button onClick={moveit} className="loguin">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};
