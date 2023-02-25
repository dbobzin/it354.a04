function Nav() {
  return (
    <>
      <div class="container">
        <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <a className="navbar-brand" href="#">
              Dev Profile
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
                  Home
                </a>
                <a className="nav-link" href="#">
                  Portfolio
                </a>
                <a className="nav-link" href="#">
                  Resume
                </a>
                <a className="nav-link" href="#">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Nav;
