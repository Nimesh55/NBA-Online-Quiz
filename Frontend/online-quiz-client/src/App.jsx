import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AddQuestion from "../components/question/AddQuestion";

function App() {
  return (
    <>
      <AddQuestion />
    </>
  );
}

export default App;
