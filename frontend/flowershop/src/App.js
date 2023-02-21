
import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import RegisterPage from './components/RegisterPage.jsx';
import LoginPage from './components/LoginPage';
import Store from './components/Store';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Footer from './components/Footer';
import {useEffect, useState } from 'react';
import FlowerTable from './components/FlowerTable';
import axios from 'axios'

function App() {

const [data, setData] = useState([]);

useEffect(() => {
  fetch('api/arrangements')
    .then(response => response.json())
    .then(data => setData(data))
    .catch(error => console.log(error));
}, []);



const[token,setToken]=useState();
const[admin,setAdmin]=useState();

function addToken(auth_token){
  setToken(auth_token);
}
function addAdmin(isAdmin){
  setAdmin(isAdmin);
}


  return (
    <>
    <BrowserRouter className="App">
  

      <NavBar token={token} admin={admin}/>
      <Routes>

      <Route path='/' element={<Home/>}/> 

        <Route path='/login' element={<LoginPage addToken={addToken} addAdmin={addAdmin}/>}/> 
        <Route path='/register' element={<RegisterPage/>}/> 
        {/* <Route path='/' element={<NavBar token={token}/>}>  */}
        
          <Route path='/store' element={<Store/>}/>
          <Route path='/table' element={<FlowerTable data={data} setData={setData}/>}/>
      

      {/* </Route> */}
      </Routes>
      <Footer />
    </BrowserRouter></>



  
  );
}

export default App;
