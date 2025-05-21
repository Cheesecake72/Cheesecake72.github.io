import './App.css';
import React,{ useState} from 'react';
import { Link } from "react-router-dom";


function Login(){

    const form = useState(null);

    const [email,setEmail] = useState("");
    
    const [heading,setHeading] = useState('AH Not a Shiny Entei');
    
    const [Password,setPassword] = useState("");

    const [data,setData] = useState([]);
    
    function compare(){

    }

    function updateEmail(pass){
    setEmail(pass.target.value);
    }

    function handleSubmit(e){
      e.preventDefault();

      setHeading(email);
     
      var personalUrl = 'http://localhost:8081/fetch/'+ email + '/' + Password + '';

      fetch(personalUrl)
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.log(err))
      /*if (data[0].Username === 'john') {
      // data is undefined, meaning nothing has been stored in it
      alert("data is empty");
    } else {
      // data has some value stored in it
      alert("wow");
    }
     
      
       
      if(data[0].url !== null){
       alert("it shouldn't alert this.")
        // window.location.href = data.url;
      }
      else{
      // alert("it shouldn't alert this.")
       //  window.location.href = 'http://localhost:8081/testdb';
      }
    */
    window.location.href = 'http://localhost:8081/testdb';
       
    }

    function updatePass(pass){
    setPassword(pass.target.value);
  }
    return (
    <div>
      <link rel = "stylesheet" href="App.css"></link>
      
    <div className="wrapper">
    <h1>{heading}</h1>
    <form id ={form} onSubmit={handleSubmit}>

        <div>
          <label htmlFor = {email}>
            <span>
              @
            </span>
          </label>
            <input  required type="email" name = "email" value = {email} onChange = {updateEmail} placeholder = "Email"/>
        </div>

        <div>
          <label htmlFor = {Password}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm240-200q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80Z"/></svg>
          </label>
            <input  required type ="password" name = "password" value = {Password} onChange={updatePass}  placeholder = "Password"/>
        </div>
        
        <button  type = "Submit" onClick = {() => compare()} >Login</button>
        <p>Don't have an Account? 
            <li>
                <Link to = "/Register">Signup</Link> 
            </li>
        </p>


    </form>
    
    </div>
   
    </div>
    );
};

export default Login;