/*import React from 'react'
import axios from 'react-axios'



const RegisterPage = () => {
  return (
    <section className="vh-100 bg-image" style={{ backgroundImage: "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')" }}>
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card" style={{ borderRadius: "15px" }}>
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-5">Create an account</h2>

                  <form>
                    <div className="form-outline mb-4">
                      <input type="text" id="form3Example1cg" className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="form3Example1cg">Your Name</label>
                    </div>

                    <div className="form-outline mb-4">
                      <input type="email" id="form3Example3cg" className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="form3Example3cg">Your Email</label>
                    </div>

                    <div className="form-outline mb-4">
                      <input type="password" id="form3Example4cg" className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="form3Example4cg">Password</label>
                    </div>

                    <div className="form-outline mb-4">
                      <input type="password" id="form3Example4cdg" className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="form3Example4cdg">Repeat your password</label>
                    </div>

                    <div className="form-check d-flex justify-content-center mb-5">
                      <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                      <label className="form-check-label" htmlFor="form2Example3g">
                        I agree all statements in <a href="#!" className="text-body"><u>Terms of service</u></a>
                      </label>
                    </div>

                    <div className="d-flex justify-content-center">
                      <button type="button" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
                    </div>

                    <p className="text-center text-muted mt-5 mb-0">Have already an account? <a href="#!" className="fw-bold text-body"><u>Login here</u></a></p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;*/



import React from 'react';
import './LoginRegister.css';
import {useState} from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';


function RegisterPage() {
    const [userData,setUserData]=useState({
        email:"",
        name:"",
        phone:"",
        birthdate:"",
        password:""
    });
    function handleInput(e){ 
        let newUserData = userData; 
        newUserData[e.target.name]=e.target.value;
        console.log(newUserData);
        setUserData(newUserData); 
    }
    let navigate = useNavigate();
    function handleRegister(e){

            e.preventDefault();   
            axios
                .post("http://127.0.0.1:8000/api/register", userData )
                .then((res)=>{  
                    console.log(res.data);
               
                     navigate("/Login");
                })
                .catch(function (error) {
                    if (error.response) {
                    
                      console.log(error.response.data);
                      console.log(error.response.status);
                      console.log(error.response.headers);
                    } else if (error.request) {
                     
                      console.log(error.request);
                    } else {
                      
                      console.log('Error', error.message);
                    }

                  });
    }
    return (
        <div id='kontakt' >
            <div id='container1'>
                <div id='contact-box'>
                    <div id="left">

                    </div>
                    <div id="right">
                                <h2 className="title">Registruj se</h2>
                                <form onSubmit={handleRegister}>
                                    <div className="input-group">
                                        <input className="input--style-3" type="text" placeholder="Name" name="name" required onInput={handleInput}/>
                                    </div>
                                    <div className="input-group">
                                        <input className="input--style-3 js-datepicker" type="text" placeholder="Birthdate" name="birthdate"required onInput={handleInput}/>
                                        <i className="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i>
                                    </div>

                                    <div className="input-group">
                                        <input className="input--style-3" type="email" placeholder="Email" name="email" id="emailR"  required onInput={handleInput}/>
                                    </div>

                                    <div className="input-group">
                                        <input className="input--style-3" type="password" placeholder="Password" name="password"required onInput={handleInput}/>
                                    </div>
                                    <div className="p-t-10">
                                        <button className="btn btn--pill btn--green" type="submit" id="register" name="register" > Potvrdi </button>
                                    </div>
                                    <br/><br/>
                                    <p><a href="/Login"  className='tekstForme'>Account already exists!</a></p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

    );
}

export default RegisterPage;
