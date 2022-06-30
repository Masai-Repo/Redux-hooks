import React from "react";
import { useNavigate } from "react-router";
import "./Homepage.css";

export const Homepage = () => {
  const navigate = useNavigate();

  function gotoTodo() {
    navigate("/todo");
  }
  function gotoSignup() {
    navigate("/signup");
  }
  return (
    <div className="bckg">
      <div className="home">
        <h1>Your daily todos right into you hand </h1>
        <p>
          Work More ,Stress less and no need to remember the workload just
          upload it on the todo app and work without any delay in your busy
          Schedule
        </p>
        <div>
          <button onClick={gotoTodo} className="butnn">
            Goto Todos
          </button>
          <p>or if not signedup</p>
          <button onClick={gotoSignup} className="butnn">
            Signup
          </button>
        </div>
      </div>
    </div>
  );
};
