import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';

import Login from './components/Login';
import axios from 'axios'
import { useEffect, useState } from "react";


import RegisterPage from './components/RegisterPage';
import Footer from './components/Footer';
import Cart from './components/Cart';
import AboutUs from './components/AboutUs';
import AdminView from './components/AdminView';

import EditFlower from './components/EditFlower';
import Analytics from './components/Analytics';
import Inbox from './components/Inbox';
import Contact from './components/Contact';
import FlowersPage from './components/FlowersPage';




const App = () => {


const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

  const [token, setToken] = useState();
  const [cartNum, setCartNum] = useState(0);
  const [cartProducts, setCartProducts] = useState([]);
  const [sum, setSumPrice] = useState(0);
  const [flowers, setFlowers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [ID, setID] = useState(0);
  const [categoryID, setcategoryID] = useState(0);
  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axiosInstance.get(
          "http://127.0.0.1:8000/api/flower",
          {
            headers: {
              token: "Bearer " + window.sessionStorage.getItem("auth_token"),
            },
          }
        );
        setFlowers(res.data.data);
        console.log(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [axiosInstance]);
  useEffect(() => {
    const getRandomLists2 = async () => {
      try {
        const res = await axiosInstance.get(
          "http://127.0.0.1:8000/api/messages",
          {
            headers: {
              token: "Bearer " + window.sessionStorage.getItem("auth_token"),
            },
          }
        );
        setMessages(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists2();
  }, [axiosInstance]);
  function handleLogout() {
    window.sessionStorage.setItem("auth_token", null);
    window.sessionStorage.setItem("auth_name", "");
    window.sessionStorage.setItem("auth_id", null);
    window.location("/");
  }
  function addToken(auth_token) {
    setToken(auth_token);
  }
  function refreshCart() {
    let inCart = flowers.filter((f) => f.quantity > 0);
    setCartProducts(inCart);
    var sum = 0;
    if (inCart.length === 1) {
      sum = inCart[0].price * inCart[0].quantity;
    } else {
      for (var x = 0; x < inCart.length; x++) {
        sum += inCart[x].price * inCart[x].quantity;
      }
    
    }

    console.log(sum);
    setSumPrice(sum);
  }
  function isInCart(id) {
    var exists = 0;
    cartProducts.forEach((f) => {
      if (f.id === id) {
        exists = 1;
      }
    });

    return exists;
  }
  function addProduct(id) {
    console.log(id);
    setCartNum(cartNum + 1);

    flowers.forEach((f) => {
      if (f.id === id) {
        f.quantity++;

        console.log(sum);
      }
    });
    refreshCart();
  }

  function removeProduct(id) {
    if (isInCart(id) === 1) {
      setCartNum(cartNum - 1);
      flowers.forEach((f) => {
        if (f.id === id) {
          if (f.quantity === 0) {
            return;
          } else {
            f.quantity--;
          }
        }
      });
      refreshCart();
    }
  }

  function deleteFlower(id) {
    axios
      .delete("http://127.0.0.1:8000/api/flower/" + id, {
        headers: {
          Authorization: `Bearer ${window.sessionStorage.getItem(
            "auth_token"
          )}`,
        },
      })
      .then((res) => {
        const token = window.sessionStorage.getItem("auth_token");
        window.location.reload();
        window.sessionStorage.setItem("auth_token", token);
      })
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log("Error", error.message);
        }
      });
  }

  function IDEdit(id, categoryID) {
    setID(id);
    setcategoryID(categoryID);
  }

  return (
    <div>
      <BrowserRouter className="App">
        <NavBar token={token} logout={handleLogout}></NavBar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route
            path="/login"
            element={<Login addToken={addToken}></Login>}
          ></Route>
          <Route path="/register" element={<RegisterPage></RegisterPage>}></Route>
          <Route
            path="/flowers"
            element={
              <FlowersPage
                flowers={flowers}
                onAdd={addProduct}
                onRemove={removeProduct}
              ></FlowersPage>
            }
          ></Route>
          <Route
            path="/cart"
            element={
              <Cart
                flowers={cartProducts}
                onAdd={addProduct}
                onRemove={removeProduct}
                sum={sum}
              ></Cart>
            }
          ></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route
            path="/admin/inbox"
            element={<Inbox messages={messages}></Inbox>}
          ></Route>
          <Route
            path="/admin"
            element={
              <AdminView
                flowers={flowers}
                deleteFlower={deleteFlower}
                setID={IDEdit}
              ></AdminView>
            }
          ></Route>
          <Route
            path="/admin/edit"
            element={<EditFlower id={ID} categoryID={categoryID}></EditFlower>}
          ></Route>
          <Route
            path="/admin/analytics"
            element={<Analytics flowers={flowers}></Analytics>}
          ></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;

