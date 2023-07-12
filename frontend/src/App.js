import "./App.css";


import Register from "./Components/Register";

import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import "./Components/LoginRegister.css";

import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import Flower from "./components/Flower";
import Order from "./components/Order";
import Contact from "./components/Contact";
import Inbox from "./components/Inbox";
import AdminView from "./components/AdminView";
import Edit from "./components/Edit";
import Add from "./components/Add";
import Analytics from "./components/Analytics";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

function App() {
  const [token, setToken] = useState();
  const [cartNum, setCartNum] = useState(0);
  const [cartProducts, setCartProducts] = useState([]);
  const [sum, setSumPrice] = useState(0);
  const [flowers, setFlowers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [ID, setID] = useState(0);
  const [categoryID, setCategoryID] = useState(0);
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
    let in_cart = flowers.filter((f) => f.quantity > 0);
    setCartProducts(in_cart);
    var suma = 0;
    if (in_cart.length === 1) {
      suma = in_cart[0].price * in_cart[0].quantity;
    } else {
      for (var x = 0; x < in_cart.length; x++) {
        suma += in_cart[x].price * in_cart[x].quantity;
      }
   
    }

    console.log(suma);
    setSumPrice(suma);
  }
  function IsInCart(id) {
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
    if (IsInCart(id) === 1) {
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
    setCategoryID(categoryID);
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
          <Route path="/register" element={<Register></Register>}></Route>
          <Route
            path="/flowers"
            element={
              <Flower
                flowers={flowers}
                onAdd={addProduct}
                onRemove={removeProduct}
              ></Flower>
            }
          ></Route>
          <Route
            path="/order"
            element={
              <Order
                flowers={cartProducts}
                onAdd={addProduct}
                onRemove={removeProduct}
                sum={sum}
              ></Order>
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
            element={<Edit id={ID} categoryID={categoryID}></Edit>}
          ></Route>
            <Route
            path="/admin/add"
            element={<Add ></Add>}
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
