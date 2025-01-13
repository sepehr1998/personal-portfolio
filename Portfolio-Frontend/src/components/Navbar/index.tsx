function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent px-5">
            <a className="navbar-brand" href="">Sepehr Samadi</a>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarToggler"
                aria-controls="navbarToggler"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarToggler">
                <ul className="navbar-nav ms-auto mt-2 mt-lg-0 text-end">
                    <li className="nav-item active">
                        <a className="nav-link" href="">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#">Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
