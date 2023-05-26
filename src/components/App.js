import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  const[mass,setMass]=useState(false)
  const addPara=()=>{
    setMass(true)
  }
  return (
    <div id="main">
      // Do not alter the main div
      {mass&&<p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>}
      <button id="click" onClick={addPara}>click</button>
    </div>
  );
}


export default App;
