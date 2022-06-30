import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import "./Sidebar.css";
export const Sidebar = () => {
  const navigate = useNavigate();
  function showtodo() {
    navigate("/todo");
  }
  function addtodo() {
    navigate("/addtodo");
  }
  const name = useSelector((state) => state.authData.data.username);
  const email = useSelector((state) => state.authData.data.email);
  console.log("name", name);
  return (
    <div className="maindiv">
      <div className="sideDivv">
        <h2>{name}</h2>
        <h3>{email}</h3>
      </div>
      <div className="flecbox">
        <button onClick={showtodo} className="butn">
          Show Todo's
        </button>
        <button onClick={addtodo} className="butn">
          Add Todo
        </button>
      </div>
      <div className="logo">
        <button className="logout">Logout</button>
      </div>
    </div>
  );
};
