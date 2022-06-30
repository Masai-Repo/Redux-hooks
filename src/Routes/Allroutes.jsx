import React from "react";
import { Route, Routes } from "react-router";
import { Homepage } from "../Components/Homepage";
import { Login } from "../Components/Login";
import { Register } from "../Components/Register";
import { Sidebar } from "../Components/Sidebar";
import { Displaytask } from "../Components/Todo/Displaytask";
import { Task } from "../Components/Todo/Task";
import { Privateroute } from "./Privateroute";

export const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Register />} />
      <Route
        path="/todo"
        element={
          <Privateroute>
            {" "}
            <Displaytask />
          </Privateroute>
        }
      />
      <Route path="/addtodo" element={<Task />} />
      <Route path="/side" element={<Sidebar />} />
    </Routes>
  );
};
