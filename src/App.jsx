import { useState } from "react";
import { Login } from "./Components/Login";
import { Register } from "./Components/Register";
import { Sidebar } from "./Components/Sidebar";
import { Displaytask } from "./Components/Todo/Displaytask";
import { Task } from "./Components/Todo/Task";
import logo from "./logo.svg";
import { Allroutes } from "./Routes/Allroutes";

function App() {
  return (
    <div className="App">
      {/* <Register /> */}
      {/* <Login /> */}
      {/* <Sidebar /> */}
      {/* <Displaytask /> */}
      <Allroutes />
      {/* <Task /> */}
    </div>
  );
}

export default App;
