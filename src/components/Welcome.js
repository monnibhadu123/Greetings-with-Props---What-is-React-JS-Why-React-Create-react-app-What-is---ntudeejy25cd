// write code for Welcome component here
import React,{Component, useState}
import '../styles/App.css';

const Welcome = (props) => {
  return (<div className="main">
    <h1>Hey {props.name}!</h1>
    <h2>Welcome to Newton School.</h2>
  </div>
)
}
