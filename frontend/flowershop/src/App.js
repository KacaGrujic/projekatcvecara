
import './App.css';
import NavBar from './components/NavBar';
import RegisterPage from './components/RegisterPage.jsx';
import LoginPage from './components/LoginPage';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <BrowserRouter className="App">
      <Routes>
        <Route path='/login' element={<LoginPage/>}/> 
        <Route path='/register' element={<RegisterPage/>}/> 
        <Route path='/' element={<NavBar/>}/> 

      
      </Routes>
      <Footer />
    </BrowserRouter></>
  );
}

export default App;
