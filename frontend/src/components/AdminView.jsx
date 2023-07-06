import React from "react";
import { BsFillTrashFill, BsPencilFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function AdminView({ flowers, deleteFlower, setID }) {
    let navigate = useNavigate();
    function editFlower(id, categoryID) {
      setID(id, categoryID);
      navigate("/admin/edit");
    }
    return (
      <div>
        {window.sessionStorage.getItem("auth_name") == "Admin" ? (
          <>
            <h1 className="display-4">Admin view</h1>
            <div className="korpa">
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Delete</th>
                    <th>Edit</th>
                  </tr>
                </thead>
                <tbody>
                  {flowers.map((f) => (
                    <tr key={f.id}>
                      <td>{f.name}</td>
                      <td>{f.description}</td>
                      <td>{f.price}</td>
                      <td>
                        <button
                          className="btn"
                          onClick={() => deleteFlower(f.id)}
                        >
                          <BsFillTrashFill></BsFillTrashFill>
                        </button>
                      </td>
                      <td>
                        <button
                          className="btn"
                          onClick={() => editFlower(f.id, f.category.id)}
                        >
                          <BsPencilFill></BsPencilFill>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        ) : (
          <>
            <h1 style={{ color: "red" }}>You do not have access.</h1>
          </>
        )}
      </div>
    );
  }
  

export default AdminView;
