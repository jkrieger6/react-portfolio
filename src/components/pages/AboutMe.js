import React from "react";

const styles = {
    aboutMeStyles: {
        width: "100%",
        height: "100%",
        backgroundColor: "grey",
        color: "ivory",
        textAlign: "center",
        padding: "20px",
        margin: "20px",
        border: "5px solid black",
    },
    imgStyles: {
        width: "50%",
        height: "50%",
        border: "5px solid black",
    },
    pStyles: {
        width: "100%",
        height: "100%",
        backgroundColor: "grey",
        color: "ivory",
        textAlign: "center",
        padding: "20px",
        margin: "20px",
        border: "5px solid black",
    },
};

export default function AboutMe() {
    return (
        <div style={styles.aboutMeStyles}>
            <h1>About Me</h1>
            <img style={styles.imgStyles} src="" alt="Portrait picture of myself at the Grand Canyon" />
            <p style={styles.pStyles}>
                I am a full stack web developer with a full stack web development bootcamp certificate. 
                I have a passion for creating and learning new things.
                I am a team player and I am excited to bring my skills to a new team. 
                I am a hard worker and I am always looking for ways to improve my skills.
                I am a fast learner and I am excited to learn new skills.
            </p>
        </div>
    );
}