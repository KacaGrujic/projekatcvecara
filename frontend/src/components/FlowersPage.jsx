import React, { useState } from "react";
import SingleFlower from "./SingleFlower";

function FlowersPage({ flowers, onAdd, onRemove }) {
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
          <h1 style={{ color: "red" }}>Nemate pristup</h1>
        </>
      ) : (
        <>
          <button className="sortbtn btn" onClick={sortAsc}>
            Sortiraj rastuće
          </button>
          <button className="sortbtn btn" onClick={sortDesc}>
            Sortiraj opadajuće
          </button>
          <div className="svaOprema">
            {sort === true ? (
              <>
                {flowers
                  .sort((a, b) => (a.price < b.price ? -1 : 1))
                  .map((t) => (
                    <SingleFlower
                      key={t.id}
                      product={t}
                      onAdd={onAdd}
                      onRemove={onRemove}
                    ></SingleFlower>
                  ))}
              </>
            ) : (
              <>
                {flowers
                  .sort((a, b) => (a.price > b.price ? -1 : 1))
                  .map((t) => (
                    <SingleFlower
                      key={t.id}
                      product={t}
                      onAdd={onAdd}
                      onRemove={onRemove}
                    ></SingleFlower>
                  ))}
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default FlowersPage;
