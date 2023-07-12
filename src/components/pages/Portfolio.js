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
            deployed: "https://jkrieger6.github.io/beer-traveler/",
            github:""
        },
        {
            name: "The recipe Drawer",
            image: "",
            deployed: "https://the-recipe-drawer.herokuapp.com",
            github: ""
        },
        {
            name: "Work Day Scheduler",
            image: "",
            deployed: "https://jkrieger6.github.io/work-day-scheduler/",
            github: ""
        },
        {
            name: "README Generator",
            image: "",
            deployed: "",
            github: "https://github.com/jkrieger6/README-generator/blob/main/README.md"
        },
        {
            name: "Employee Tracker",
            image: "",
            deployed: "",
            github: "https://github.com/jkrieger6/Employee-tracker.git"
        },
        {
            name: "SVG Generator",
            image: "",
            deployed: "",
            github: "https://github.com/jkrieger6/brand-logo-generator"
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
