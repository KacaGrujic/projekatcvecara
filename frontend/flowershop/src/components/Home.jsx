import React from "react";
import "../style/homepage.css"
import { Outlet } from "react-router-dom";

function Home() {
  const petals = Array.from({ length: 10 }, () => ({ randomX: Math.random(), randomDelay: Math.random() }));  return (
    <div className="home-page">
<h1 className="welcome-message">
        Dobrodosli u online cvecaru!
        {/* <div className="heart"></div> */}
        
      </h1>
      {/* <div className="petal-container">
        {petals.map(({ randomX, randomDelay }, index) => (
          <div key={index} className="petal" style={{ "--random-x": randomX, "--random-delay": randomDelay }}></div>
        ))}
      </div> */}
      <Outlet/>
</div>
    
  );
}


export default Home;

