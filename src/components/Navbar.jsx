import React from 'react'
import Style from './navbar.module.css';
const Navbar = () => {
    return (
        <>
            <div>

                <nav className="navbar navbar-expand-lg bg-light ">
                    <div className="container-fluid">
                        <a className="navbar_brand nav_logo" href="#">
                            <svg width="80" height="32" viewBox="0 0 80 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M51.4596 0.432373C53.8478 0.432373 55.7839 2.36844 55.7839 4.7567V26.8108C55.7839 29.199 53.8478 31.1351 51.4596 31.1351C49.0713 31.1351 47.1353 29.199 47.1353 26.8108V4.7567C47.1353 2.36844 49.0713 0.432373 51.4596 0.432373Z"
                                    fill="currentColor"></path>
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M39.3512 0.432373C41.7394 0.432373 43.6755 2.36844 43.6755 4.7567V26.8108C43.6755 29.199 41.7394 31.1351 39.3512 31.1351C36.9629 31.1351 35.0269 29.199 35.0269 26.8108V4.7567C35.0269 2.36844 36.9629 0.432373 39.3512 0.432373Z"
                                    fill="currentColor"></path>
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M63.5675 10.3784C65.9557 10.3784 67.8918 12.3145 67.8918 14.7027V17.2973C67.8918 19.6856 65.9557 21.6217 63.5675 21.6217C61.1792 21.6217 59.2432 19.6856 59.2432 17.2973V14.7027C59.2432 12.3145 61.1792 10.3784 63.5675 10.3784Z"
                                    fill="currentColor"></path>
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M75.6759 6.05396C78.0641 6.05396 80.0002 7.99002 80.0002 10.3783V21.1891C80.0002 23.5773 78.0641 25.5134 75.6759 25.5134C73.2876 25.5134 71.3516 23.5773 71.3516 21.1891V10.3783C71.3516 7.99002 73.2876 6.05396 75.6759 6.05396Z"
                                    fill="currentColor"></path>
                                <path
                                    d="M15.7996 23.281C19.9967 23.281 23.3992 19.8786 23.3992 15.6814C23.3992 11.4843 19.9967 8.08183 15.7996 8.08183C11.6024 8.08183 8.19998 11.4843 8.19998 15.6814C8.19998 19.8786 11.6024 23.281 15.7996 23.281ZM15.7838 31.5676C7.06664 31.5676 0 24.5009 0 15.7838C0 7.06664 7.06664 0 15.7838 0C24.5009 0 31.5676 7.06664 31.5676 15.7838C31.5676 24.5009 24.5009 31.5676 15.7838 31.5676Z"
                                    fill="currentColor"></path>
                            </svg>
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
                                <li className="nav-item">
                                    <a className="nav-link active navrighttax" aria-current="page" href="#">
                                        Why otter.ai
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link navrighttax" href="#">
                                        Pricing
                                    </a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle navrighttax"
                                        href="#"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Download
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <a className="dropdown-item navrighttax" href="#">
                                                Action
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item navrighttax" href="#">
                                                Another action
                                            </a>
                                        </li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Something else here
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown ">
                                    <a
                                        className="nav-link dropdown-toggle navrighttax"
                                        href="#"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Resources
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Action
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Another action
                                            </a>
                                        </li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Something else here
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <form className="d-flex">

                                <li className="d-flex navlefttax">
                                    <p>Contact Sales  |</p>
                                    <p >Log in</p>
                                </li>
                                <button className="btn btn-outline-success nav_button" type="submit">
                                    Start for free
                                </button>
                            </form>
                        </div>
                    </div>
                </nav>

            </div>

        </>
    )
}

export default Navbar