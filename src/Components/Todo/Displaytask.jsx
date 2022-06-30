import React from "react";
import { useSelector } from "react-redux";
import { Sidebar } from "../Sidebar";
import "./Displaytask.css";

export const Displaytask = () => {
  const data = useSelector((state) => state.taskData.task);
  console.log(data);
  return (
    <div className="hey">
      <Sidebar />
      <div className="firstDiv">
        <h1>TODO</h1>
        <div className="innerDiv">
          {data.map((value) => (
            <div className="display">
              <h1>Task:{value.task}</h1>
              <h3>Date:{value.date}</h3>
              <p>Description:{value.des}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
