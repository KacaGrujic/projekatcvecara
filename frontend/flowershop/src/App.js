
import './App.css';
import NavBar from './components/NavBar';
import RegisterPage from './components/RegisterPage.jsx';
import LoginPage from './components/LoginPage';
import Shop from './components/Shop';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Footer from './components/Footer';
import { useState } from 'react';



function App() {

const[token,setToken]=useState();
function addToken(auth_token){
  setToken(auth_token);
}

  return (
    <>
    <BrowserRouter className="App">
      <Routes>
        <Route path='/login' element={<LoginPage addToken={addToken}/>}/> 
        <Route path='/register' element={<RegisterPage/>}/> 
        <Route path='/' element={<NavBar token={token}/>}> 
          <Route path='shop' element={<Shop/>}/>
      

      </Route>
      </Routes>
      <Footer />
    </BrowserRouter></>
  );
}

export default App;
