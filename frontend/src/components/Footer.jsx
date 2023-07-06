import React from 'react';
import '../style/footer.css';
import { Link } from "react-router-dom";

/*function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/shop">Shop</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>
        <div className="footer-social">
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
      <div className="footer-info">
        <p>Flower Shop &copy; 2023</p>
  
      </div>
    </footer>
  );
}

export default Footer;*/
function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>O nama</h6>
            <p className="text-justify">
              Vision Locker je lider sportske maloprodaje na Balkanu. Osnovan je
              1996. godine kao kompanija čije su osnovne delatnosti trgovina,
              maloprodaja i veleprodaja u oblasti sportske industrije. Danas
              Sport Vision zapošljava više od 4500 radnika i posluje u 12
              zemalja − Srbija, Bosna i Hercegovina, Hrvatska, Slovenija, Crna
              Gora, Severna Makedonija, Albanija, Rumunija, Bugarska, Grčka,
              Republika Češka i Slovačka, a sedište kompanije nalazi se u
              Beogradu.
            </p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Možete nas naći na sledećim lokacijama</h6>
            <ul className="footer-links">
              <li> Bulevar umetnosti 75a, Beograd </li>
              <li> Višegradska 7, Beograd</li>
              <li> Jurija Gagarina 79, Beograd</li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Brzi linkovi</h6>
            <ul className="footer-links">
              <li>
                <Link to="/">Pocetna</Link>
              </li>
              <li>
                <Link to="/flowers">Ponuda</Link>
              </li>
              <li>
                <Link to="/cart">Korpa</Link>
              </li>
              <li>
                <Link to="/contact">Kontakt</Link>
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
              <a href="#"> Đurđica & Branislav & Jovana</a>.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;