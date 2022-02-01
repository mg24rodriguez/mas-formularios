import React, { useState } from "react";
import Form from "./components/Form";
import logo from './logo.png';
import './App.css';

function App() {
  const [ state, setState ] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    errorMessage: "",
  });

  return (
    <div className="App">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> Ejercicio Formulario - Hooks - Validación </h1>
      </header>

      <h3> Escribe tus datos: </h3>
      <Form inputs = {state} setInputs = {setState}/>

    </div>
  );
}

export default App;

