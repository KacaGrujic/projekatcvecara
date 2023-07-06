import { Link } from "react-router-dom";
function NavBar({ token, logout }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        Flower shop
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          {window.sessionStorage.getItem("auth_name") == "" ? (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  Register
                </Link>
              </li>
            </>
          ) : (
            <>
              {window.sessionStorage.getItem("auth_name") == "Admin" ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/admin">
                      Admin
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/admin/inbox">
                      Inbox
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/admin/analytics">
                      Antalytics
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/flowers">
                      Flowers
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/cart">
                      Cart
                    </Link>
                  </li>
                  <li className="nav-item active">
                    <Link className="nav-link" to="/contact">
                      Contact
                    </Link>
                  </li>
                </>
              )}

              <li className="nav-item active">
                <Link className="nav-link" to="/" onClick={logout}>
                  Log out
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
