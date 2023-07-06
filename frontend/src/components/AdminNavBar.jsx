import React from "react";
import { Link } from "react-router-dom";
import { useNavigate, Navigate} from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function AdminNavBar({cartNum}) {

        let navigate = useNavigate();
        function handleLogout(e) {
          clearInterval(intervalId);
          var config = {
            method: "post",
            url: "logout",
            headers: {
              Authorization: "Bearer " + window.sessionStorage.getItem("auth_token"),
            },
          };
          axios(config).then((res) => {
            console.log(res.data);
            window.sessionStorage.setItem("auth_token", null);

          });

          navigate("/login");
          e.preventDefault();
        }
        useEffect(() => {
          if (window.sessionStorage.getItem("auth_token") == "null") {
            clearInterval(intervalId);

            navigate("/login");
          }
        });

      


    return (
      <>
      {window.sessionStorage.getItem("auth_token") == null ? (
        <Navigate to={"/login"} />
      ) : (
        <>
        <div className="navBar">



                <Link to="/admin" style={{ marginLeft: 20 }}>Admin</Link>
          
                <div className="div-time-api">
                          <p className="txt-time-api"></p>
                        </div>
            <a
                              //className="dropdown-item"
                              onClick={handleLogout}
                              href="/login"
                            >
                              Logout
                            </a>
        </div>
        </>
    )
}
</>
)
}



export default AdminNavBar