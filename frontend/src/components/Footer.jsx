import React from "react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About us</h6>
            <p className="text-justify">
            Welcome to Blossom Blooms, a flower shop established in 2005.
            We are a sanctuary of beauty, where nature's vibrant colors and delicate fragrances come together to create enchanting floral arrangements that evoke emotions and ignite the senses.
            With a passion for floristry and an unwavering commitment to excellence,
             Blossom Blooms has become a beloved destination for floral enthusiasts and discerning customers alike.
            </p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>You can find us at the following locations</h6>
            <ul className="footer-links">
              <li> Bulevar umetnosti 75a, Beograd </li>
              <li> Višegradska 7, Beograd</li>
              <li> Jurija Gagarina 79, Beograd</li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Links</h6>
            <ul className="footer-links">
              <li>
                <Link to="/">Homepage</Link>
              </li>
              <li>
                <Link to="/flowers">Shop</Link>
              </li>
              <li>
                <Link to="/order">Cart</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">
              Copyright &copy; 2023 All Rights Reserved by
              <a href="#"> Katarina Grujic & Filip Djalic</a>.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
