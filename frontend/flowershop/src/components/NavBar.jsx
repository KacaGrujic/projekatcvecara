

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

import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import '../style/navbar.css';

const Navbar = (props) => {
  const {loggedIn, isAdmin, logout} = props

  return (
    <header>
      <nav className='navbar-menu'>
              <Link className='navbar-brand' to='/'>Cvećara</Link>
              <NavLink className='nav-link' activeClassName='active' exact to='/'>Home</NavLink>
              <NavLink className='nav-link' to='/store'>Store</NavLink>
              {loggedIn && !isAdmin && <NavLink className='nav-link' to='/orders'>My Orders</NavLink>}
              {isAdmin && <NavLink className='nav-link' to='/admin/create'>Create New Offer</NavLink>}
              {isAdmin && <NavLink className='nav-link' to='/admin/orders/pending'>Pending Orders</NavLink>}
              {loggedIn && !isAdmin && <NavLink className='nav-link' to='/cart'>Cart</NavLink>}
              {loggedIn && <a className='nav-link' href='javascript:void(0)' onClick={logout}>Logout</a>}
              {!loggedIn && <NavLink className='nav-link' to='/login'>Login</NavLink>}
              {!loggedIn && <NavLink className='nav-link' to='/register'>Register</NavLink>}
      </nav>
    </header>
  )
}

export default Navbar