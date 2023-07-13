import React from "react";
// import "../public/images/headerBg.jpg"

const styles = {
    headerStyles: {
        backgroundColor: "grey",
        color: "ivory",
        textAlign: "center",
        padding: "40px",
},
};



export default function Header() {
    return (
        <header style={styles.headerStyles}>
            <h1>Jacob Krieger</h1>
            <div>
                 <img src="./public/images/headerBg.jpg" alt="background" /> 
            </div>
        </header>
    );
}