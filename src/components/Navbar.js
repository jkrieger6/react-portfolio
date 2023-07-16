import React from "react";

const styles = {
    NavStyles: {
        backgroundColor: "#416788",
        justifyContent: "center",
        display: "flex"
    },
    aStyles: {
        color: "#71B340",
        padding: "10px",
        margin: "10px",
        fontSize: "20px",
        fontWeight: "bold",
        backgroundColor: "#416788"
    },
};

function NavBar({ currentPage, handlePageChange }) {
    return (
        <nav style={styles.NavStyles} className="nav-tabs">
            <nav className="nav-item">
                <a style={styles.aStyles}
                    href="#AboutMe"
                    onClick={() => handlePageChange("AboutMe")}
                    // This is a conditional (ternary) operator that checks to see if the current page is "AboutMe"
                    className={currentPage === "AboutMe" ? "nav-link active" : "nav-link"}
                >
                    About Me
                </a>
            </nav>
            
            <nav className="nav-item">
                <a style={styles.aStyles}
                    href="#Portfolio"
                    onClick={() => handlePageChange("Portfolio")}

                    className={currentPage === "Portfolio" ? "nav-link active" : "nav-link"}
                >
                    Portfolio
                </a>
            </nav>
            <nav className="nav-item">
                <a style={styles.aStyles}
                    href="#Resume"
                    onClick={() => handlePageChange("Resume")}
                    className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
                >
                    Resume
                </a>
            </nav>
            <nav className="nav-item">
                <a style={styles.aStyles}
                    href="#ContactForm"
                    onClick={() => handlePageChange("ContactForm")}
                    className={currentPage === "ContactForm" ? "nav-link active" : "nav-link"}
                >
                    Contact
                </a>
            </nav>
        </nav>
    );
}

export default NavBar;