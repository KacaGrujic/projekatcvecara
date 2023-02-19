import React from "react";

function HomePage() {
    let arrangements;
  return (
    <div>
      <h1>Welcome to our Flower Shop</h1>
      <p>Discover a wide selection of beautiful flowers for all occasions.</p>
      <img src="flower-shop.jpg" alt="Flower shop" />

      <h2>Featured Arrangements</h2>
      {arrangements.map((a)=> (
        <Arrangement a={a}/>
      ))}

      <button>View More Arrangements</button>

      <h2>About Us</h2>
      <p>
        Our flower shop has been serving the community for over 20 years. We
        take pride in providing the freshest and most beautiful flowers for all
        occasions.
      </p>
    </div>
  );
}

export default HomePage;
