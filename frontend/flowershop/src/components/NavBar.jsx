import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import '../style/navbar.css';
import axios from "axios"
import { Outlet } from 'react-router-dom';

// import React from 'react'
// import '../style/navbar.css';

// const NavBar = () => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//     <div className="container-fluid">
//       <a className="navbar-brand" href="#">Cvećara</a>
//       <button
//         className="navbar-toggler"
//         type="button"
//         data-mdb-toggle="collapse"
//         data-mdb-target="#navbarNavAltMarkup"
//         aria-controls="navbarNavAltMarkup"
//         aria-expanded="false"
//         aria-label="Toggle navigation"
//       >
//         <i className="fas fa-bars"></i>
//       </button>
//       <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
//         <div className="navbar-nav">
//           <a className="nav-link active" aria-current="page" href="#">Početna strana</a>
//           <a className="nav-link" href="#">Prodavnica</a>
//           <a className="nav-link" href="/login">Prijavi se</a>
//           <a className="nav-link disabled"
//             >Disabled</a>
//         </div>
//       </div>
//     </div>
//             </nav>
//   )
// }

// export default NavBar



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
              <NavLink className='nav-link' activeClassName='active' exact to='/'>Home</NavLink>
              <NavLink className='nav-link' to='/shop'>Store</NavLink>
              {/* {<NavLink className='nav-link' to='/orders'>My Orders</NavLink>}
              {<NavLink className='nav-link' to='/admin/create'>Create New Offer</NavLink>}
              { <NavLink className='nav-link' to='/admin/orders/pending'>Pending Orders</NavLink>}
              {<NavLink className='nav-link' to='/cart'>Cart</NavLink>} */}
             {token==null ? (<a className='nav-link' href='/login'>Login</a>):(<a className='nav-link' href='#' onClick={handleLogout}>Logout</a>)}
              {<NavLink className='nav-link' to='/register'>Register</NavLink>}
      </nav>
    </header>
    <Outlet/>
    </div>
  )
}

export default Navbar