import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CCButton from "./CComponents/Q1";
import CCForm from "./CComponents/Q2";
import CCTable from "./CComponents/Q3";

function App() {
  return (
    <div>
      Q1
      <CCButton />
      <br />
      Q2
      <br />
      <CCForm name="Name" />
      <CCForm name="LastName" />
      <CCForm name="PGrade" />
      Q3
      <CCTable />
    </div>
  );
}

export default App;
