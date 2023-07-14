import React from 'react';

const styles = {
    card: {
        background: 'grey',
        color: '#bed630',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        textAlign: 'center',
        },
    content: {
        background: 'grey',
        minHeight: 50,
        lineHeight: 3.5,
        fontSize: '1.2rem',
        color: '#bed630',
        padding: '0 20px',
        textAlign: 'center'
    },
    image: {
        padding: 20,
        border: '1px solid #bed630',
    }
}

// Single component to be reused for multiple projects
 function Project(props) {
    return (
        <div style={styles.card} className="card">
            <div className="img-container">
                <img style={styles.image} alt={props.data.name} src={props.data.image} />
            </div>
            <div style={styles.content} className="content">
                <p>
                    <li>
                        Name: {props.data.name}
                    </li>
                    <li>
                        Deployed Application Link: {props.data.deployed}
                        {/* <p style={styles.pStyles} >Deployed Application <a href="{props.data.deployed}">here!</a></p> */}
                    </li>
                    <li>
                        GitHub Repository Link: {props.data.github}
                    </li>
                </p>
            </div>
        </div>
    );
}

export default function Portfolio() {
    const projects = [
        {
            name: "Beer Traveler",
            image: "/images/beerTraveler.jpeg",
            deployed: "https://jkrieger6.github.io/beer-traveler/",
            github:""
        },
        {
            name: "The Recipe Drawer",
            image: "/images/recipeDrawer.jpeg",
            deployed: "https://the-recipe-drawer.herokuapp.com",
            github: ""
        },
        {
            name: "Work Day Scheduler",
            image: "/images/workDay.jpeg",
            deployed: "https://jkrieger6.github.io/work-day-scheduler/",
            github: ""
        },
        {
            name: "README Generator",
            image: "/images/readmegen.jpeg",
            deployed: "",
            github: "https://github.com/jkrieger6/README-generator/blob/main/README.md"
        },
        {
            name: "Employee Tracker",
            image: "/images/employeeTracker.jpeg",
            deployed: "",
            github: "https://github.com/jkrieger6/Employee-tracker.git"
        },
        {
            name: "SVG Generator",
            image: "/images/SVG.jpeg",
            deployed: "",
            github: "https://github.com/jkrieger6/brand-logo-generator"
        }
    ]
    return (
        <div style={styles.card}>
            <h1>Portfolio</h1>
            {
                projects.map(project => <Project data={project} />)
            }
        </div>
    )
}
