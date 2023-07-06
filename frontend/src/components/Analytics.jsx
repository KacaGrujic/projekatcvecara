import React from "react";
import Plot from "./Plot";

function Analytics({ flowers }) {
  return (
    <div>
      {window.sessionStorage.getItem("auth_name") == "Admin" ? (
        <>
          <h1 className="display-4">Analytics</h1>
          <div className="korpa">
            <Plot flowers={flowers}></Plot>
          </div>
        </>
      ) : (
        <>
          <h1 style={{ color: "red" }}>You do not have access!</h1>
        </>
      )}
    </div>
  );
}

export default Analytics;
