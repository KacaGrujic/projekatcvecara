import React from "react";
import { MDBDataTableV5 } from "mdbreact";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Inbox({ messages }) {
  var navigate = useNavigate();
  console.log(messages);
  const [dataTable, setDataTable] = useState({
    columns: [
      {
        label: "Name",
        field: "name",
        width: 150,
        attributes: {
          "aria-controls": "DataTable",
          "aria-label": "Name",
        },
      },
      {
        label: "Email",
        field: "email",
        width: 200,
      },
      {
        label: "Message",
        field: "message",
        width: 270,
      },
    ],
    rows: messages.map((m) => {
      return {
        name: m.name,
        email: m.email,
        message: m.message,
      };
    }),
  });
  return (
    <div className="tabelaPoruka">
      {window.sessionStorage.getItem("auth_name") == "Admin" ? (
        <>
          <MDBDataTableV5
            hover
            entriesOptions={[5, 20, 25]}
            entries={5}
            pagesAmount={4}
            data={dataTable}
          />
        </>
      ) : (
        <>
          <h1 style={{ color: "red" }}>You do not have access!</h1>
        </>
      )}
    </div>
  );
}

export default Inbox;
