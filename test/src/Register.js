import './App.css';
import { useState} from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';


const Register = () =>{

  const url = "http://localhost:8081/testdb";

  const form = useState(null);

  const [name,setName] = useState("");

  const [heading,setHeading] = useState('AH Not a Shiny Entei');

  const [email,setEmail] = useState("");

  const [Password,setPassword] = useState("");

  const [RepPassword,setRepPassword] = useState("");
    

  const handleSubmit = (e) => {
    if(Password !== RepPassword || Password === ""){
      e.preventDefault();
    }
    else{
      axios.post(url,{name,Password,email})
      .then(alert('success in registration'));
    }
    
  }

  function updateName(pass){
    setName(pass.target.value)
  }

  function updateEmail(pass){
    setEmail(pass.target.value);
  }

  function updatePass(pass){
    setPassword(pass.target.value);
  }

  function updateRepPass(pass){
    setRepPassword(pass.target.value);
  }


  function compare () {

    if(Password === RepPassword && Password !== ""){
      setHeading('this worked');
      alert("Submission has went through");
    }
    else{
      setHeading('nope');
      alert("Passwords Do Not Match");
      
    }

  }; 

  return (
    <div>
      <link rel = "stylesheet" href="App.css"></link>
      
    <div className="wrapper">
    <h1>{heading}</h1>
    <form id ={form} onSubmit={handleSubmit}>

        <div>
          <label htmlFor = "firstname-input">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Z"/></svg>
          </label>
            <input   type="text" name = "firstname" id = "firstname-input" value = {name} onChange = {updateName} placeholder = "Firstname"/>
        </div>

        <div>
          <label  htmlFor = "email-input">
            <span>
              @
            </span>
          </label>
            <input   type="email" name = "email" id = "email-input" value = {email} onChange = {updateEmail}placeholder = "Email"/>
        </div>

        <div>
          <label htmlFor = "password-input">
            <svg xmlns="http://www.w3.org/2000/svg"  height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm240-200q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80Z"/></svg>
          </label>
            <input   type ="password" name = "password" id = "password-input" value = {Password} onChange={updatePass}  placeholder = "Password"/>
        </div>

        <div>
          <label htmlFor = "repeat-password-input">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm240-200q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80Z"/></svg>
          </label>
            <input   type ="password"  name = "repeat-password" id = "repeat-password-input" value = {RepPassword} onChange = {updateRepPass}  placeholder = "repeat-password"/>
        </div>
        
        <button  type = "Submit" onClick = {() => compare()} >Signup</button>
        <p>Already have an Account? Login Below.
              <li>
                <Link to = "/login">Login</Link> 
              </li>
        </p>

    </form>
    
    </div>
   
    </div>
    );
};

export default Register;