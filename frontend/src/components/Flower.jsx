import React, { useState } from "react";
import FlowerItem from "./FlowerItem";

function Flower({ flowers, onAdd, onRemove }) {
  const [sort, setSort] = useState(true);
  function sortAsc() {
    setSort(true);
  }
  function sortDesc() {
    setSort(false);
  }
  return (
    <div>
      {window.sessionStorage.getItem("auth_name") == "" ? (
        <>
          <h1 style={{ color: "red" }}>Access denied</h1>
        </>
      ) : (
        <>
          <button className="btn btn-secondary" onClick={sortAsc}>
            Sort ascending
          </button>
          <button className="btn btn-secondary" onClick={sortDesc}>
            Sort descending
          </button>
          <div className="svaOprema">
            {sort === true ? (
              <>
                {flowers
                  .sort((a, b) => (a.price < b.price ? -1 : 1))
                  .map((t) => (
                    <FlowerItem
                      key={t.id}
                      product={t}
                      onAdd={onAdd}
                      onRemove={onRemove}
                    ></FlowerItem>
                  ))}
              </>
            ) : (
              <>
                {flowers
                  .sort((a, b) => (a.price > b.price ? -1 : 1))
                  .map((t) => (
                    <FlowerItem
                      key={t.id}
                      product={t}
                      onAdd={onAdd}
                      onRemove={onRemove}
                    ></FlowerItem>
                  ))}
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Flower;
