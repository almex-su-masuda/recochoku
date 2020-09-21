// libs
import React from "react";
// components
import TitleProject from "./components/TitleProject";
// others
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TitleProject />
      </header>
    </div>
  );
}

export default App;
