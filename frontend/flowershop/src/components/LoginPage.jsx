import React from 'react'
import { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const LoginPage = ({addToken}) => {

const[userData,setUserData]=useState({
email:"",
password:""
});

let navigate =useNavigate();
function handleInput(e){
    let newUserData=userData;
   // console.log(e);
    newUserData[e.target.name]=e.target.value;
    setUserData(newUserData);
   // console.log(newUserData);

}

function handleLogin(e){
    e.preventDefault();
    axios
    .post("api/login",userData)
    .then((res)=>{
        console.log(res.data);
        if(res.data.success===true){
         window.sessionStorage.setItem("auth_token",res.data.access_token)
         addToken(res.data.access_token);
         navigate("/")
        }
    })
    .catch((e=>{
        console.log(e);
    }));
}

  return (
    <section className="vh-100 bg-image" style={{backgroundImage: 'url("https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp")'}}>
    <div className="mask d-flex align-items-center h-100 gradient-custom-3">
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-9 col-lg-7 col-xl-6">
            <div className="card" style={{borderRadius: '15px'}}>
              <div className="card-body p-5">
                <h2 className="text-uppercase text-center mb-5">Create an account</h2>
                <form onSubmit={handleLogin}>
                 
                  <div className="form-outline mb-4">
                    <input onInput={handleInput}  type="email" id="form3Example3cg" className="form-control form-control-lg" name="email" />
                    <label className="form-label" htmlFor="form3Example3cg">Email</label>
                  </div>
                  <div className="form-outline mb-4">
                    <input onInput={handleInput} type="password" id="form3Example4cg" className="form-control form-control-lg" name="password" />
                    <label className="form-label" htmlFor="form3Example4cg">Password</label>
                  </div>
    
                  <div className="form-check d-flex justify-content-center mb-5">
                    <input className="form-check-input me-2" type="checkbox" defaultValue id="form2Example3cg" />
                    <label className="form-check-label" htmlFor="form2Example3g">
                      I agree all statements in <a href="#!" className="text-body"><u>Terms of service</u></a>
                    </label>
                  </div>
                  <div className="d-flex justify-content-center">
                    <button  type="submit" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Login</button>
                  </div>
                  <p className="text-center text-muted mt-5 mb-0">Don't have an account? <a href="/register" className="fw-bold text-body"><u>Register here</u></a></p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default LoginPage
