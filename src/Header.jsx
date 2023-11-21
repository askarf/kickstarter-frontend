import { Link } from "react-router-dom";

export function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          Start Kicker
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to="/" className="nav-link active" aria-current="page" href="#">
              All Projects
            </Link>
            <Link to="/pledges" className="nav-link active" href="#">
              My Pledges
            </Link>
            <a className="nav-link active" href="#">
              Sign Up
            </a>
            <Link to="/login" className="nav-link active ">
              Login
            </Link>
            <a className="nav-link active" aria-disabled="true">
              Logout
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
