import React from "react";

function NavBar({ currentPage, handlePageChange }) {
    return (
        <ul className="nav-tabs">
            <li className="nav-item">
                <a
                    href="#AboutMe"
                    onClick={() => handlePageChange("AboutMe")}
                    // This is a conditional (ternary) operator that checks to see if the current page is "AboutMe"
                    className={currentPage === "AboutMe" ? "nav-link active" : "nav-link"}
                >
                    About Me
                </a>
            </li>
            <li className="nav-item">
                <a
                    href="#Portfolio"
                    onClick={() => handlePageChange("Portfolio")}

                    className={currentPage === "Portfolio" ? "nav-link active" : "nav-link"}
                >
                    Portfolio
                </a>
            </li>
            <li className="nav-item">
                <a
                    href="#Resume"
                    onClick={() => handlePageChange("Resume")}
                    className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
                >
                    Resume
                </a>
            </li>
            <li className="nav-item">
                <a
                    href="#ContactForm"
                    onClick={() => handlePageChange("ContactForm")}
                    className={currentPage === "ContactForm" ? "nav-link active" : "nav-link"}
                >
                    Contact
                </a>
            </li>
        </ul>
    );
}

export default NavBar;