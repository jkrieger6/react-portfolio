import React from "react";
import headerBg from "../images/headerBg.jpeg";

const styles = {
    headerStyles: {
        backgroundColor: "grey",
        color: "#C2C2C2",
        padding: "40px",
        position: "relative",
        justifyContent: "center",
        display: "flex",
},
imageStyles: {
    width: "100%",
    height: "140px",
    position: "absolute",
    top: "0",
    left: "0",
},
textStyles: {
    position: "relative",
    zIndex: "1",
}
};



export default function Header() {
    return (
        <header style={styles.headerStyles}>
            <div style={styles.textStyles}>
            <h1> Hello There! I'm Jacob Krieger</h1>
            </div>
                 <img style={styles.imageStyles} src={headerBg} alt="background" /> 
        </header>
    );
}