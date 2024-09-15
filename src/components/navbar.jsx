import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Ensure Bootstrap JS is included

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top px-3">
      <div className="container-fluid px-3">
        <Link className="navbar-brand" to="/">
          <i className="fas fa-store"></i> UR Store
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item px-3"> {/* Add padding */}
              <Link className="nav-link" to="/products">
                <i className="fas fa-home"></i> Products
              </Link>
            </li>
            <li className="nav-item px-3"> {/* Add padding */}
              <Link className="nav-link" to="/about">
                <i className="fas fa-info-circle"></i> About
              </Link>
            </li>
            <li className="nav-item px-3"> {/* Add padding */}
              <Link className="nav-link" to="/contact">
                <i className="fas fa-phone-alt"></i> Contact Us
              </Link>
            </li>
            <li className="nav-item px-3"> {/* Add padding */}
              <Link className="nav-link" to="/login">
                <i className="fas fa-sign-in-alt"></i> Login
              </Link>
            </li>
            <li className="nav-item px-3"> {/* Add padding */}
              <Link className="nav-link" to="/register">
                <i className="fas fa-user-plus"></i> Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

