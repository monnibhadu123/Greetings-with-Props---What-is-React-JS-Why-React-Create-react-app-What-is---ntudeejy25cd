import React, { Component, useState } from "react";
import '../styles/App.css';

const Welcome = (props) => {
  //  let hey = `Hey ! ${props.name}`;
  //  let greetMessage = `Welcome to Newton School.`;
  return (
    <div className="main">
      <h1>Hey {props.name}!</h1>
      <h2>Welcome to Newton School.</h2>
    </div>
  )
}


export default Welcome;
