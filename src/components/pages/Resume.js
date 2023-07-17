import React from "react";
import 'animate.css';

const styles = {
    resumeStyles: {
        backgroundColor: "#C2C2C2",
        color: "#113e7c",
    },
    bodyStyle: {
        backgroundColor: "grey",
    }
};

export default function Resume() {
  return (
    <div style={styles.bodyStyle}>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card mt-5">
            <div style={styles.resumeStyles} className="card-body text-center">
              <h1 className="card-title mb-4">Resume</h1>
              <p className="card-text mb-5">
                Download my{" "}
                <a
                  href="https://docs.google.com/document/d/1aD1lK1apb2Pq_5YiKVMDHzPSd2zgBIpg8Jjvgl_Ew4k/edit?usp=sharing"
                  className="text-info"
                >
                  resume
                </a>{" "}
                here!
              </p>
              <h2 className="text-uppercase mb-4">Front-end Proficiencies</h2>
              <ul className="list-unstyled mb-5">
                <li class="animate__animated animate__fadeInUp">HTML</li>
                <li class="animate__animated animate__fadeInUp">CSS</li>
                <li class="animate__animated animate__fadeInUp">JavaScript</li>
                <li class="animate__animated animate__fadeInUp">jQuery</li>
                <li class="animate__animated animate__fadeInUp">Responsive Design</li>
                <li class="animate__animated animate__fadeInUp">React</li>
                <li class="animate__animated animate__fadeInUp">Bootstrap</li>
              </ul>
              <h2 className="text-uppercase mb-4">Back-end Proficiencies</h2>
              <ul className="list-unstyled mb-0">
                <li>APIs</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MySQL, Sequelize</li>
                <li>MongoDB, Mongoose</li>
                <li>REST</li>
                <li>GraphQL</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
