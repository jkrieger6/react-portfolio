import React from 'react';

// Single component to be reused for multiple projects
 function Project(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img alt={props.data.name} src={props.data.image} />
            </div>
            <div className="content">
                <ul>
                    <li>
                        Name: {props.data.name}
                    </li>
                    <li>
                        Deployed Application Link: {props.data.deployed}
                    </li>
                    <li>
                        GitHub Repository Link: {props.data.github}
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default function Portfolio() {
    const projects = [
        {
            name: "Beer Traveler",
            image: "",
            deployed: "",
            github:""
        }
    ]
    return (
        <div>
            <h1>Portfolio</h1>
            {
                projects.map(project => <Project data={project} />)
            }
        </div>
    )
}
