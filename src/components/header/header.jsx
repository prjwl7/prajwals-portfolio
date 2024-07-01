import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faFileAlt, faEnvelope, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./header.css";

const Header = () => {
    const [isToggled, setIsToggled] = useState(false);

    return (
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav_logo">Prajwal Chaudhary</a>

                <div className={isToggled ? "nav_menu show-menu" : "nav_menu"}>
                    <ul className="nav_list grid">
                        <li className="nav_item">
                            <a href="#home" className="nav_link">
                                <FontAwesomeIcon icon={faHome} className="nav_icon" /> Home
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#about" className="nav_link">
                                <FontAwesomeIcon icon={faUser} className="nav_icon" /> About
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#skills" className="nav_link">
                                <FontAwesomeIcon icon={faFileAlt} className="nav_icon" /> Skills
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#contact" className="nav_link">
                                <FontAwesomeIcon icon={faEnvelope} className="nav_icon" /> Contact
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="nav_toggle" onClick={() => setIsToggled(!isToggled)}>
                    <FontAwesomeIcon icon={isToggled ? faTimes : faBars} />
                </div>
            </nav>
        </header>
    );
};

export default Header;
