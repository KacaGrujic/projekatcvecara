import React from 'react'
import { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {

  const[userData,setUserData]=useState({
    name:"",
    email:"",
    password:""
    });
    let navigate =useNavigate();
    function handleInput(e){
        let newUserData=userData;
        console.log(e);
        newUserData[e.target.name]=e.target.value;
        setUserData(newUserData);
       // console.log(newUserData);
    
    }
    
    function handleRegister(e){
        e.preventDefault();
        axios
        .post("api/register",userData)
        .then((res)=>{
            console.log(res.data);
         navigate("/login");
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
                <form onSubmit={handleRegister}>
                  <div className="form-outline mb-4">
                    <input onInput={handleInput} type="name" id="form3Example1cg" className="form-control form-control-lg" name="name" />
                    <label className="form-label" htmlFor="form3Example1cg">Your Name</label>
                  </div>
                  <div className="form-outline mb-4">
                    <input onInput={handleInput} type="email" id="form3Example3cg" className="form-control form-control-lg" name="email" />
                    <label className="form-label" htmlFor="form3Example3cg">Your Email</label>
                  </div>
                  <div className="form-outline mb-4">
                    <input onInput={handleInput} type="password" id="form3Example4cg" className="form-control form-control-lg" name="password" />
                    <label className="form-label" htmlFor="form3Example4cg">Password</label>
                  </div>
                  <div className="form-outline mb-4">
                    <input  type="password" id="form3Example4cdg" className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="form3Example4cdg">Repeat your password</label>
                  </div>
                  <div className="form-check d-flex justify-content-center mb-5">
                    <input className="form-check-input me-2" type="checkbox" defaultValue id="form2Example3cg" />
                    <label className="form-check-label" htmlFor="form2Example3g">
                      I agree all statements in <a href="#!" className="text-body"><u>Terms of service</u></a>
                    </label>
                  </div>
                  <div className="d-flex justify-content-center">
                    <button type="submit" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
                  </div>
                  <p className="text-center text-muted mt-5 mb-0">Have already an account? <a href="/login" className="fw-bold text-body"><u>Login here</u></a></p>
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

export default RegisterPage
