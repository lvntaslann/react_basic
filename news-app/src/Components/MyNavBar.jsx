const MyNavBar = ({setCategory}) => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <span className="badge bg-light text-dark fs-4">News</span>
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    News Category
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" onClick={()=>setCategory("technology")} >
                                            Technolohy
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" onClick={()=>setCategory("business")}>
                                             Business
                                        </a>
                                    </li>
                                    <li>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" onClick={()=>setCategory("health")}>
                                            Health
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" onClick={()=>setCategory("sports")}>
                                            Sports
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" onClick={()=>setCategory("entertainment")}>
                                            Entertainment
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>

        </>
    )
}

export default MyNavBar
