import React from "react";

const styles = {
    resumeStyles: {
        backgroundColor: "grey",
        textAlign: "center",
        textDecoration: "underline",
        display: "flex",
        justifyContent: "center"
    },
    pStyles: {
        height: "100%",
        backgroundColor: "grey",
        color: "ivory",
        textAlign: "center",
        border: "5px solid black",
    },
    skillsStyles: {
        backgroundColor: "grey",
        color: "#E2B4BD",
        textAlign: "center",
        padding: "20px",
    },
    divStyles: {
        textAlign: "center",
        backgroundColor: "grey",
        color: "#9CF6F6",
        margin: "auto",
        padding: "20px"
    },

};

export default function Resume() {
    return (
        <div style={styles.divStyles}>
            <h1>Resume</h1>
            <p style={styles.pStyles} >Download my <a href="https://docs.google.com/document/d/1aD1lK1apb2Pq_5YiKVMDHzPSd2zgBIpg8Jjvgl_Ew4k/edit?usp=sharing">resume</a> here!</p>
            <h2 style={styles.resumeStyles}>Front-end Proficiencies</h2>
            <div style={styles.skillsStyles}>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>jQuery</li>
                <li>responsive design</li>
                <li>React</li>
                <li>Bootstrap</li>
            </div>
            <h2 style={styles.resumeStyles}>Back-end Proficiencies</h2>
            <div style={styles.skillsStyles}>
                <li>APIs</li>
                <li>Node</li>
                <li>Express</li>
                <li>MySQL, Sequelize</li>
                <li>MongoDB, Mongoose</li>
                <li>REST</li>
                <li>GraphQL</li>
            </div>
        </div>
    );
}
