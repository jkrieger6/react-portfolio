import React from "react";
const styles = {
    footerStyles: {
        backgroundColor: "#FE9000",
        color: "#E2B4BD",
        display: "flex",
        justifyContent: "center",
    },
    linkStyles: {
        color: "#9CF6F6"
    }

};

export default function Footer() {
    return (
        <footer style={styles.footerStyles}>
            <div className="footer">
                <div className="footer">
                    <a style={styles.linkStyles} href="https://github.com/jkrieger6">GitHub</a>
                </div>
                <div className="footer">
                    <a style={styles.linkStyles} href="https://www.linkedin.com/in/jacob-krieger-043066b8/">LinkedIn</a>
                </div>
            </div>
        </footer>
    );
}