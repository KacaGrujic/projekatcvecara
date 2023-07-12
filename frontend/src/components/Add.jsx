import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Add({ categoryID }) {
    const [flowerData, setFlowerData] = useState({
      name: "",
      description: "",
      price: "",
      quantity: 0,
      image: "",
      category: categoryID,
    });
  
    function handleInput(e) {
    let newFlowerData = flowerData;

    newFlowerData[e.target.name] = e.target.value;

    setFlowerData(newFlowerData);
    console.log(newFlowerData);
      }
    
  
    const navigate = useNavigate();
  
    function add(e) {
      e.preventDefault();
      axios
        .post("http://127.0.0.1:8000/api/flower", flowerData, {
          headers: {
            Authorization: `Bearer ${window.sessionStorage.getItem(
              "auth_token"
            )}`,
          },
        })
        .then((res) => {
          console.log(res.data);
          alert("Flower successfully added!");
          navigate("/admin"); 
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
  
    return (
      <div id="kontakt">
        {window.sessionStorage.getItem("auth_name") == "Admin" ? (
          <>
            <div id="container1">
              <div id="contact-box">
                <div id="left"></div>
                <div id="right">
                  <h2>Add a bouqet</h2>
                  <form onSubmit={add}>
                    <div className="input-group">
                      <input
                        className="input--style-3"
                        type="text"
                        placeholder="Name"
                        name="name"
                        onInput={handleInput}
                        defaultValue={flowerData.name}
                      />
                    </div>
  
                    <div className="input-group">
                      <input
                        className="input--style-3"
                        type="text"
                        placeholder="Description"
                        name="description"
                        onInput={handleInput}
                        defaultValue={flowerData.description}
                      />
                    </div>
                    <div className="input-group">
                      <input
                        className="input--style-3"
                        type="text"
                        placeholder="Price"
                        name="price"
                        onInput={handleInput}
                        defaultValue={flowerData.price}
                      />
                    </div>
                    <div className="input-group">
                      <input
                        className="input--style-3"
                        type="text"
                        placeholder="Image (URL)"
                        name="image"
                        onInput={handleInput}
                        defaultValue={flowerData.image}
                      />
                    </div>
  
                    <div>
                      <select
                        className="input--style-3"
                        name="category"
                        id="category"
                        defaultValue={flowerData.category}
                        onInput={handleInput}
                      >
                        <option className="input--style-3" value={1} id={1}>
                      Suncokreti
                      </option>
                      <option className="input--style-3" value={2} id={2}>
                        Ruze
                      </option>
                      <option className="input--style-3" value={3} id={3}>
                        Lale
                      </option>

                      <option className="input--style-3" value={4} id={4}>
                        Gerberi
                      </option>

                      <option className="input--style-3" value={5} id={5}>
                        Orhideje
                      </option>

                      <option className="input--style-3" value={6} id={6}>
                        Irisi
                      </option>
                      </select>
                    </div>
                    <div className="p-t-10">
                      <button
                        className="btn btn-secondary"
                        type="submit"
                        id="login"
                        name="login"
                      >
                        Confirm
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <h1 style={{ color: "red" }}>Access denied</h1>
          </>
        )}
      </div>
    );
  }
  
  export default Add;
  