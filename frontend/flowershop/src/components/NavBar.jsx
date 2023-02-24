import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import '../style/navbar.css';
import axios from "axios"
import { Outlet } from 'react-router-dom';

const Navbar =({token}) => {
 
function handleLogout(){
  var config={
    method:"post",
    url:"api/logout",
    headers:{
      Authorization:"Bearer "+ window.sessionStorage.getItem("auth_token")
    },
    
  };

  axios(config)
  .then(function(response){
    console.log(JSON.stringify(response.data));
    window.sessionStorage.set("auth_token",null);
  
  })
  .catch(function(error){
    console.log(error);
  });
}



  return (
    <div>
    <header>
      <nav className='navbar-menu'>
              <Link className='navbar-brand' to='/'>Cvećara</Link>
              <NavLink className='nav-link' to='/'>Home</NavLink>
              <NavLink className='nav-link' to='/store'>Store</NavLink>
              {/* {<NavLink className='nav-link' to='/orders'>My Orders</NavLink>}
              {<NavLink className='nav-link' to='/admin/create'>Create New Offer</NavLink>}
              { <NavLink className='nav-link' to='/admin/orders/pending'>Pending Orders</NavLink>}
              {<NavLink className='nav-link' to='/cart'>Cart</NavLink>} */}
             {token==null ? (<a className='nav-link' href='/login'>Login</a>):(<a className='nav-link' href='#' onClick={handleLogout}>Logout</a>)}
              {<NavLink className='nav-link' to='/register'>Register</NavLink>}
              {<NavLink className='nav-link' to='/adminhomepage'>Tabela</NavLink>}

      </nav>
    </header>
    <Outlet/>
    </div>
  )
}

export default Navbar