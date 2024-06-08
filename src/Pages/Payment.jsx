import React, { useState,useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Scanner from "../../public/Scanner.jpg";
import "./Payment.css";
import Paytm from "../../public/paytm.jpg";
import phonepe from "../../public/phonepe.jpg";
import googlepay from "../../public/googlepay.jpg";
import Navbar from "../Components/Navbar";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from 'react-router-dom'

const Payment = () => {

  const [free,setfree] = useState('')
  const [usernames, setUsernames] = useState('');

  // const [username,setusername] = useState();
  // const [freefireid , setfreefireid] = useState();
  const [upiid,setupiid] = useState();
  // const [status,setstatus] = useState();
  


  const navigate =useNavigate()

  
  useEffect(() => {
    // console.log('All cookies:', document.cookie);

    const usernameCookie = Cookies.get('username');
    const freeid = Cookies.get("freefireid")
    // console.log('Username cookie:', usernameCookie);

    if (usernameCookie) {
      setUsernames(usernameCookie);
      setfree(freeid);
    } else {
      setUsernames('No cookie found');
      setfree('No cookie found');
    }
  }, []);
  const username =usernames;
  const freefireid= free;
  const status ="Success";

  const handleSubmit =(e) => {
    e.preventDefault();
    axios.post("https://firescrimbackend.onrender.com/payment",{username,freefireid,upiid,status})
    .then(
      navigate('/home')
    )
    .catch(err)(
      console.log(err)
    )
  }

  return (
    <>
    <Navbar/>
      <div className="conatiner">
        <br />
        <h1 style={{textAlign:"center"}}>Payment Page</h1>
        <div className="container payment">
          <div className="left">
            
            <form action="" onSubmit={handleSubmit}>
              <label htmlFor="utr">
                <h4 className="wel">UTR id/transaction id/ref.NO :</h4>
              </label>
              <div className="imgs">
                <img src={phonepe} />
                <img src={googlepay} />
                <img src={Paytm} />
              </div>
              <label htmlFor="" className="ins">UTR id/transaction id/ref.NO :</label>
              <input
                type="text"
                name="utr"
                id="utr"
                className="input"
                placeholder="enter according to your payment app"
                onChange={(e)=> setupiid(e.target.value)}
              />
              <br />
              <button
                type="submit"
                className="btn btn-primary"
                style={{ marginTop: "30px", marginLeft:"35%"}}
              >
                Submit
              </button>
            </form>
          </div>
          <div className="right">
            <img src={Scanner} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
