
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynav"
                    aria-controls="mynav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand" href="#">
                    <div className="d-flex">
                        <div className="d-flex align-items-center logo bg-purple">
                            <div className="fab fa-joomla h2 text-white"></div>
                        </div>
                        <div className="ms-3 d-flex flex-column">
                            <div className="h4">Ecommerce</div>
                        </div>
                    </div>
                </a>
                <div className="collapse navbar-collapse" id="mynav">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Categories <span
                                    className="fas fa-th-large px-1"></span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Exclusive</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Collections</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Blogs</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <div className="cart bg-purple">
                                    <span className="fas fa-shopping-cart text-white"></span>
                                </div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"> <span className="fas fa-user pe-2"></span> Hello Jhon</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Navbar;