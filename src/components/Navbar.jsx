import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
    return (
        <section id="header">
            <nav
                id="navbar"
                className="navbar fixed-top navbar-expand-md navbar-dark "
            >
                <a
                    className="navbar-brand"
                    data-aos="slide-right"
                    data-aos-duration="1500"
                    href="#header"
                >
                    <h1>
                        Taher <FontAwesomeIcon icon={faHeart} /> Sabiya
                    </h1>
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#slide">
                                Slide
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#guest">
                                Guest
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#couple">
                                Couple
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#timeline">
                                Date
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#invite-note">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </section>
    );
}

export default Navbar;
