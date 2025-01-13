import { Link, useLocation } from 'react-router-dom';

function Navbar() {
    const location = useLocation(); // Get the current route location
    const isHomePage = location.pathname === '/';

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-transparent px-5">
            <a className="navbar-brand text-gradient" href="">Sepehr Samadi</a>
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
                    {isHomePage ? (
                        <>
                            <li className="nav-item">
                                <a className="nav-link" href="#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#portfolio">Portfolio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact">Contact</a>
                            </li>
                        </>
                    ) : (
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>)}

                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
