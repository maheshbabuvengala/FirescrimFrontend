import React, { useEffect, useState } from 'react'
import "./Login.css"
import { Link } from 'react-router-dom'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import {useCookies} from 'react-cookie';

const Login = () => {

  const [username,setusername] = useState();
  const [password,setpassword] = useState();
  // const [cookie,setCookie] = useCookies(['username']);
  let a = document.getElementById("error");
  const navigate = useNavigate()

  axios.defaults.withCredentials = true;
  const handleSubmit = (e)=> {
    e.preventDefault()
    axios.post("https://firescrimbackend.onrender.com/login" , {username,password})
    .then(result => {console.log(result)
      if(result.data =="success"){
        navigate("/home")
        
      }
      else if(result.data == "no record exists"){
        a.textContent ="You are not registered"
      }
      else {
        a.textContent ="Invalid Password"
      }
    })
    .catch(err => console.log(err))
  }


  return (
    <div className="body">
      <div className="wrapper">
        <h1>Login</h1>
        <p id='error' className='error'></p>
        <form action="" onSubmit={handleSubmit}>
          <input type="text" name="" id="" placeholder='User Id' onChange={ (e) => setusername(e.target.value)} />
          <input type="password" name="" id=""  placeholder='Password' onChange={(e)=> setpassword(e.target.value)}/>
          <input type="submit" name="" id="" />
        </form>
        <div className="sec">
          <p>Not a member ?</p>
          <Link to="/">Sign Up</Link>
        </div>
      </div>
    </div>
  )
}

export default Login