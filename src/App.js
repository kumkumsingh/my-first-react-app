import React from 'react';
import logo from './logo.svg';
import './App.css';

import Title from "./components/Title";
import LightSwitch from "./components/LightSwitch";
import User from "./components/User";
import UserBoard from "./components/UserBoard";

// const person = {
// name :'kumkum',
// age : 35
// }
const person = {
  name: 'kumkum',
  age : 35
}

// function User(props){
//   // We get passed props from the parent component
//   console.log('WHAT ARE PROPS', props)
//   return <div>
//     {/* Interpolate it here */}
//     <h3> { props.name } </h3>
//     <h3> { props.age } </h3>
//     <p>{props.codename}</p>
//   </div>
// }

const hello = () => {
  console.log('hello')
}

function App() {
  return (
    <div className="App">
     <header>
       <UserBoard/>
     </header>
   

    </div>
  );
}

export default App;
