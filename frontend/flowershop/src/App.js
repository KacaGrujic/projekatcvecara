
import './App.css';
import HomePage from './components/Home';
import NavBar from './components/NavBar';
import RegisterPage from './components/RegisterPage.jsx';
import LoginPage from './components/LoginPage';
import Shop from './components/Shop';
import {BrowserRouter, Routes,Route, Switch} from 'react-router-dom';
import Footer from './components/Footer';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';


function App() {

const[token,setToken]=useState();
function addToken(auth_token){
  setToken(auth_token);
}

  return (
    <>
    <BrowserRouter className="App">
      
      {/* <NavBar/>
      <HomePage/> */}

      <NavBar token={token}/>
      <Routes>

      <Route path='/' element={<HomePage/>}/> 

        <Route path='/login' element={<LoginPage addToken={addToken}/>}/> 
        <Route path='/register' element={<RegisterPage/>}/> 
        <Route path='/' element={<NavBar token={token}/>}> 
        
          <Route path='shop' element={<Shop/>}/>
      

      </Route>
      </Routes>
      <Footer />
    </BrowserRouter></>



  //   <div className='App'>
  //   <NavBar
  //       token={token}
  //     // loggedIn={this.state.loggedIn}
  //     // isAdmin={isAdmin}
  //     // logout={this.logout} 
  //     />
  //   <main>
  //     <Routes>
  //       <Route exact path='/' element={<HomePage/>} />
  //       <Route exact path='/shop' element={<Shop/>}/>
  //       <Route path='/register' element={<RegisterPage/>} />
  //       <Route path='/login' element={<LoginPage addToken={addToken}/>} />
  //       {/* <AdminRoute path='/admin/create' component={CreatePage} />
  //       <AdminRoute path='/admin/edit/:id' component={EditPage} />
  //       <AdminRoute path='/admin/orders' component={OrdersPage} />
  //       <PrivateRoute path='/details/:id' component={DetailsPage} />
  //       <PrivateRoute path='/cart' component={CartPage} />
  //       <PrivateRoute path='/orders/details/:id' component={OrderDetailsPage} />
  //       <PrivateRoute exact path='/orders' component={OrdersPage} />
  //       <Route component={NotFoundPage} /> */}
  //     </Routes>
  //   </main>
  //   <Footer />
  // </div>
  );
}

export default App;
