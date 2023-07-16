import React from "react";
import selfie from "../../images/IMG_3883 Small.jpeg";

const styles = {
    aboutMeStyles: {
        height: "100%",
        backgroundColor: "grey",
        color: "#9CF6F6",
        textAlign: "center",
        border: "5px solid black",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    imgStyles: {
        width: "50%",
        height: "50%",
        border: "5px solid black",
    },
    pStyles: {
        height: "100%",
        backgroundColor: "grey",
        color: "#9CF6F6",
        textAlign: "center",
        padding: "20px",
        margin: "20px",
        border: "5px solid black",
        display: "flex",

    },
};

export default function AboutMe() {
    return (
        <div style={styles.aboutMeStyles}>
            <h1>About Me</h1>
            <img style={styles.imgStyles} src={selfie} alt="Portrait of myself at the Grand Canyon" />
            <div class="container" style={styles.pStyles}>
                I am a full stack web developer with a full stack web development bootcamp certificate. 
                I have a passion for creating and learning new things.
                I am a team player and I am excited to bring my skills to a new team. 
                I am a hard worker and I am always looking for ways to improve my skills.
                I am a fast learner and eager to learn.
                Some hobbies I enjoy are hiking, camping, climbing, playing soccer and anything that has to do with nature!
            </div>
        </div>
    );
}