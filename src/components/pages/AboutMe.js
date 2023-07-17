import React from "react";
import selfie from "../../images/IMG_3883 Small.jpeg";
import 'animate.css'

const styles = {
    aboutMeStyles: {
        backgroundColor: "#C2C2C2",
        color: "#113e7c",
        border: "5px solid green",
        margin: "20px",
    },
    body: {
        backgroundColor: "grey",
    },
}

export default function AboutMe() {
  return (
    <div style={styles.body}>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div style={styles.aboutMeStyles} className="card mb-3">
            <div className="card-body text-center">
              <h1 className="card-title">About Me</h1>
              <div class="animate__animated animate__jello">
              <img
                className="img-fluid rounded-circle"
                src={selfie}
                alt="Portrait of myself at the Grand Canyon"
              />
              </div>
              <p className="card-text mt-4">
                I am a full stack web developer with a full stack web development
                bootcamp certificate. I have a passion for creating and learning
                new things. I am a team player and I am excited to bring my skills
                to a new team. I am a hard worker and I am always looking for ways
                to improve my skills. I am a fast learner and eager to learn. Some
                hobbies I enjoy are hiking, camping, climbing, playing soccer and
                anything that has to do with nature!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
