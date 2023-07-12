import React from "react";
import { BsFillTrashFill, BsPencilFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function AdminView({ flowers, deleteFlower, setID }) {
  let navigate = useNavigate();
  function editFlower(id, categoryID) {
    setID(id, categoryID);
    navigate("/admin/edit");
  }

  function goToAdd() {
    navigate("/admin/add");
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
                  <th>NAME</th>
                  <th>DESCRIPTION</th>
                  <th>PRICE</th>
                  <th>DELETE</th>
                  <th>EDIT</th>
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
          <div style={{ textAlign: 'center' }}>
      <button style={{ display: 'inline-block' }} className="btn btn-secondary" onClick={goToAdd}>  Add new item  </button>
    </div>
        </>
      ) : (
        <>
          <h1 style={{ color: "red" }}>Access denied.</h1>
        </>
      )}
    </div>
  );
}

export default AdminView;
