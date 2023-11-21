export function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Start Kicker
        </a>
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
            <a className="nav-link active" aria-current="page" href="#">
              All Projects
            </a>
            <a className="nav-link active" href="#">
              My Pledges
            </a>
            <a className="nav-link active " href="#">
              Login
            </a>
            <a className="nav-link active" aria-disabled="true">
              Logout
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
