import React from "react";

const styles = {
    headerStyles: {
        backgroundColor: "grey",
        // color: "ivory",
        textAlign: "center",
        padding: "40px",
},
};



export default function Header() {
    return (
        <header style={styles.headerStyles}>
            <h1>Jacob Krieger</h1>
            <div>
                 <img src="/images/headerBg.jpeg" alt="background" /> 
            </div>
        </header>
    );
}