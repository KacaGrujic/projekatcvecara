
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
import AdminHomePage from './components/AdminHomePage';

function App() {

const [data, setData] = useState([]);

useEffect(() => {
  fetch('http://127.0.0.1:8000/api/arrangements')
    .then(response => response.json())
    .then(data => setData(data))
    .catch(error => console.log(error));
}, []);



const[token,setToken]=useState();
function addToken(auth_token){
  setToken(auth_token);
}


  return (
    <>
    <BrowserRouter className="App">
  

      <NavBar token={token}/>
      <Routes>

      <Route path='/' element={<Home/>}/> 

        <Route path='/login' element={<LoginPage addToken={addToken}/>}/> 
        <Route path='/register' element={<RegisterPage/>}/> 
        {/* <Route path='/' element={<NavBar token={token}/>}>  */}
        
          <Route path='/store' element={<Store/>}/>
          <Route path='/adminhomepage' element={<AdminHomePage data={data} setData={setData}/>}/>
      

      {/* </Route> */}
      </Routes>
      <Footer />
    </BrowserRouter></>



  
  );
}

export default App;
