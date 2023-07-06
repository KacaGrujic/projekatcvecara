import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

function EditFlower({ id, categoryID }) {
  const [flowerData, setFlowerData] = useState({
    name: "",
    description: "",
    price: "",
    quantity: 0,
    image: "",
    category: categoryID,
    id: id,
  });

  useEffect(() => {
    const getRandomLists2 = async () => {
      try {
        const res = await axiosInstance.get(
          "http://127.0.0.1:8000/api/flower/" + id,
          {
            headers: {
              token: "Bearer " + window.sessionStorage.getItem("auth_token"),
            },
          }
        );
        console.log(res.data.data);
        setFlowerData(res.data.data);
      } catch (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log("Error", error.message);
        }
      }
    };
    getRandomLists2();
  }, [axiosInstance]);
  function handleInput(e) {
    let newFlowerData = flowerData;

    newFlowerData[e.target.name] = e.target.value;

    setFlowerData(newFlowerData);
    console.log(newFlowerData);
  }
  let navigate = useNavigate();
  function edit(e) {
    e.preventDefault();
    axios
      .put("http://127.0.0.1:8000/api/flower/" + id, flowerData, {
        headers: {
          Authorization: `Bearer ${window.sessionStorage.getItem(
            "auth_token"
          )}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        alert("Edit was successful!");
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
                <h2>Izmeni</h2>
                <form onSubmit={edit}>
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
                      name="Category"
                      id="category"
                      defaultValue={flowerData.category.id}
                      onInput={handleInput}
                    >
                      <option className="input--style-3" value="1" id={1}>
                        Domace
                      </option>
                      <option className="input--style-3" value="2" id={2}>
                        Egzoticne
                      </option>
                      <option className="input--style-3" value="3" id={3}>
                        Americke
                      </option>

                      <option className="input--style-3" value="4" id={4}>
                        Evropske
                      </option>

                      <option className="input--style-3" value="5" id={5}>
                        Africke
                      </option>

                  
                    </select>
                  </div>
                  <div className="p-t-10">
                    <button
                      className="btn btn--pill btn--green"
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
          <h1 style={{ color: "red" }}>You do not have access</h1>
        </>
      )}
    </div>
  );
}

export default EditFlower;
