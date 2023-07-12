import React from "react";

const styles = {
    headerStyles: {
        width: "100%",
        backgroundColor: "grey",
        color: "ivory",
        textAlign: "center",
        padding: "40px",
        margin: "20px",
},
};

export default function Header() {
    return (
        <header style={styles.headerStyles}>
            <h1>Jacob Krieger</h1>
        </header>
    );
}