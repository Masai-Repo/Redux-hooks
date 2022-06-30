import { Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTaskSuccess } from "../../redux/task/action";
import { Sidebar } from "../Sidebar";
import "./Todo.css";

export const Task = () => {
  const [task, setTask] = useState([]);
  const dispatch = useDispatch();
  function handleChange(e) {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  }
  console.log(task);
  function handleClick() {
    const success = fetchTaskSuccess(task);
    dispatch(success);
  }
  const data = useSelector((state) => state);
  console.log(data);
  return (
    <>
      <Sidebar />
      <div className="mainiv">
        <div className="iniv">
          <h1>Enter a new Task</h1>
          <div className="flexx">
            <input
              type="text"
              name="task"
              value={task.task}
              onChange={handleChange}
              placeholder="enter title"
            />
            <input
              type="date"
              name="date"
              value={task.date}
              onChange={handleChange}
              placeholder="DATE"
            />
          </div>
          <div className="btn">
            <Input
              type="text"
              name="des"
              value={task.des}
              onChange={handleChange}
              placeholder="enter description"
            />
            <button onClick={handleClick}>Add</button>
          </div>
        </div>
      </div>
    </>
  );
};
