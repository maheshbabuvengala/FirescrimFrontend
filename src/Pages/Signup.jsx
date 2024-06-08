import React, { useState } from 'react'
import "./Signup.css"
import {Link, Navigate} from "react-router-dom"
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const [name,setname] = useState();
  const [username,setusername] = useState();
  const [password,setpassword] = useState();
  const [freefireid,setfreefireid] = useState();
  const navigate = useNavigate();
  let a= document.getElementById("error")
  


  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post ('https://firescrimbackend.onrender.com/register',{name,username,password,freefireid})
    .then(result => {console.log(result) 
        if(result.data == "user already exists"){
          a.textContent ="user already exists";
          // alert("user already exists")
        }
        else{
          navigate("./login")
        }
    })
    .catch(err => console.log(err))
    };

    
  return (
    <div className="body">
        <div className="wrapper">
        <h1>Signup</h1>
        <form action="" onSubmit={handleSubmit}>
          <p id="error" className='error'></p>
            <input type="text" name="" id="" placeholder='Name' onChange={(e)=> setname(e.target.value)}/>
            <input type="text" name="" id=""  placeholder='Username' onChange={(e) => setusername(e.target.value)}/>
            <input type="text" name="" id="" placeholder='Password' onChange={(e)=> setpassword(e.target.value)}/>
            <input type="text" name="" id="" placeholder='Freefire-Id' onChange={(e)=> setfreefireid(e.target.value)}/>
            <div className="check">
                <input type="checkbox" name="" id="" />
                <a href="">Accept terms&conditions</a>
            </div>
            <input type="submit" name="" id="" />
        </form>
        <div className="sec">
            <p>Already a member ?</p>
            <Link to="/login">Login</Link>
        </div>
    </div>
    </div>
  )
}

export default Signup
