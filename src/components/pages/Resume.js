import React from "react";

const styles = {
    resumeStyles: {
        height: "100%",
        backgroundColor: "grey",
        color: "ivory",
        textAlign: "center",
        border: "5px solid black",
    },
    pStyles: {
        height: "100%",
        backgroundColor: "grey",
        color: "ivory",
        textAlign: "center",
        padding: "20px",
        margin: "20px",
        border: "5px solid black",
    },
    skillsStyles: {
        height: "100%",
        backgroundColor: "grey",
        color: "ivory",
        textAlign: "center",
        padding: "20px",
        margin: "20px",
        border: "5px solid black",
    },

};

export default function Resume() {
    return (
        <div>
            <h1>Resume</h1>
            <p style={styles.pStyles} >Download my <a href="https://docs.google.com/document/d/1aD1lK1apb2Pq_5YiKVMDHzPSd2zgBIpg8Jjvgl_Ew4k/edit?usp=sharing">resume here!</a>.</p>
            <h2 style={styles.skillsStyles}>Front-end Proficiencies</h2>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>jQuery</li>
                <li>responsive design</li>
                <li>React</li>
                <li>Bootstrap</li>
            </ul>
            <h2 style={styles.skillsStyles}>Back-end Proficiencies</h2>
            <ul>
                <li>APIs</li>
                <li>Node</li>
                <li>Express</li>
                <li>MySQL, Sequelize</li>
                <li>MongoDB, Mongoose</li>
                <li>REST</li>
                <li>GraphQL</li>
            </ul>
        </div>
    );
}
