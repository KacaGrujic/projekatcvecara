import { BsPlusLg, BsDashLg } from "react-icons/bs";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "jspdf-autotable";
import jsPDF from "jspdf";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

function Order({ flowers, onAdd, onRemove, sum }) {
  //javni web servis da dobijemo koeficijent RSD_EUR
  const [RSD_EUR, setRSDEUR] = useState([]);
  useEffect(() => {
    axios({
      method: "GET",
      url: "https://api.currencyapi.com/v3/latest?apikey=LMBGzZb702eYKmMSKpHwBb8ojaw3EKxCOeAkIB1L&currencies=RSD&base_currency=EUR",
    })
      .then((response) => {
        console.log(response.data.data["RSD"].value);
        setRSDEUR(response.data.data["RSD"].value);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //javni web servis da dobijemo koeficijent RSD_USD
  const [RSD_USD, setRSDUSD] = useState([]);
  useEffect(() => {
    axios({
      method: "GET",
      url: "https://api.currencyapi.com/v3/latest?apikey=LMBGzZb702eYKmMSKpHwBb8ojaw3EKxCOeAkIB1L&currencies=RSD&base_currency=USD",
    })
      .then((response) => {
        console.log(response.data.data["RSD"].value);
        setRSDUSD(response.data.data["RSD"].value);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  var navigate = useNavigate();
  function saveOrder() {
    const user_id = window.sessionStorage.getItem("auth_id");

    flowers.map((f) => {
      console.log(f);
      console.log(
        "http://127.0.0.1:8000/api/orderitems/?order_id=" +
          user_id +
          "&flower_id=" +
          f.id +
          "&quantity=" +
          f.quantity +
          "&user_id=" +
          user_id
      );

      axios
        .post(
          "http://127.0.0.1:8000/api/orderitems/?order_id=" +
            user_id +
            "&flower_id=" +
            f.id +
            "&quantity=" +
            f.quantity +
            "&user_id=" +
            user_id,
          {
            headers: {
              Authorization: `Bearer ${window.sessionStorage.getItem(
                "auth_token"
              )}`,
            },
          }
        )
        .then((res) => {
          console.log(res.data);
          alert("Saved successfully!");
          navigate("/");
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
    });
  }
  function exportPDF() {
    var valute = document.getElementById("currency");
    var trenutnaValuta = valute.selectedIndex;
    if (trenutnaValuta === 0) {
      var koeficijentValute = 1;
      var oznakaValute = "RSD";
    } else if (trenutnaValuta === 1) {
      koeficijentValute = RSD_EUR;
      oznakaValute = "EUR";
    } else {
      koeficijentValute = RSD_USD;
      oznakaValute = "USD";
    }
    saveOrder();
    const unit = "pt";
    const size = "A4";
    const orientation = "landscape";

    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);

    doc.setFontSize(15);
    var today = new Date();
    const footer =
      " \t\t\t\t\t\t\t\tTotal : " +
      (sum / koeficijentValute).toFixed(2) +
      "[" +
      oznakaValute +
      "]";
    const title =
      "Bill on a day: " +
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate() +
      footer;
    const headers = [
      [
        "BOUQET",
        "PRICE[" + oznakaValute + "]",
        "QUANTITY",
        "TOTAL[" + oznakaValute + "]",
      ],
    ];

    const data = flowers.map((elt) => [
      elt.name,
      (elt.price / koeficijentValute).toFixed(2),
      elt.quantity,
      ((elt.price * elt.quantity) / koeficijentValute).toFixed(2),
    ]);

    let content = {
      startY: 50,
      head: headers,
      body: data,
    };

    doc.text(title, marginLeft, 40);
    doc.autoTable(content);
    doc.save("bill.pdf");
  }
  return (
    <div>
      {window.sessionStorage.getItem("auth_name") == "" ? (
        <>
          <h1 style={{ color: "red" }}>Access denied</h1>
        </>
      ) : (
        <>
          <div className="korpa">
            <br />
            <br />
            <br />
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>NAME</th>
                  <th>PRICE</th>
                  <th>QUANTITY</th>
                  <th>ADD</th>
                  <th>REMOVE</th>
                </tr>
              </thead>
              <tbody>
                {flowers.map((f, i) => (
                  <tr key={i}>
                    <td>{f.id}</td>
                    <td>{f.name}</td>
                    <td>{f.price}</td>
                    <td>{f.quantity}</td>
                    <td>
                      <button className="btn" onClick={() => onAdd(f.id)}>
                        <BsPlusLg />
                      </button>
                    </td>
                    <td>
                      <button className="btn" onClick={() => onRemove(f.id)}>
                        <BsDashLg />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="cenaDiv">
              <h3>Total price: {sum} RSD</h3>
            </div>
            <br />
            <br />
            <br />
            <label htmlFor="currency">Select a currency:</label>

            <select name="currency" id="currency">
              <option value="RSD">RSD</option>
              <option value="EUR">EUR</option>
              <option value="USD">USD</option>
            </select>
            <div>
              <button
                className="btn btn-secondary"
                onClick={() => exportPDF()}
              >
                Generate bill
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Order;
