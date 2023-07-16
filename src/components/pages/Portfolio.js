import React from 'react';
import beerTraveler from '../../images/dataDisplay.jpeg';
import readmeGen from '../../images/readmegen.jpeg';
import svg from '../../images/SVG.jpeg';
import employeeTracker from '../../images/employee.jpeg';
import recipeDrawer from '../../images/recipeDrawer.jpeg';
import workDay from '../../images/workDay.jpeg';

const styles = {
    card: {
        background: 'grey',
        color: '#9CF6F6',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        },
    content: {
        background: 'grey',
        minHeight: 50,
        lineHeight: 3.5,
        fontSize: '1.2rem',
        color: '#E2B4BD',
        padding: '0 20px',
        textAlign: 'center'
    },
    image: {
        height: '200px',
        padding: 10,
        border: '1px solid #bed630',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        margin: '0 auto',
    },
}

// Single component to be reused for multiple projects
 function Project(props) {
    return (
        <div style={styles.card} className="card-container">
            <div className="card-container">
                <img style={styles.image} alt={props.data.name} src={props.data.image} />
            </div>
            <div style={styles.content} className="card-body">
                <p>
                    <li>
                        Name: {props.data.name}
                    </li>
                    {/*if there is a deployed link, show it, otherwise show nothing */}
                    <li>
                         {/* <script>
                        if (props.data.deployed === false) {
                            props.data.deployed = "No deployed link available"
                        }
                    </script> */}
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
            image: beerTraveler,
            deployed: "https://jkrieger6.github.io/beer-traveler/",
            github:""
        },
        {
            name: "The Recipe Drawer",
            image: recipeDrawer,
            deployed: "https://the-recipe-drawer.herokuapp.com",
            github: ""
        },
        {
            name: "Work Day Scheduler",
            image: workDay,
            deployed: "https://jkrieger6.github.io/work-day-scheduler/",
            github: ""
        },
        {
            name: "README Generator",
            image: readmeGen,
            deployed: "",
            github: "https://github.com/jkrieger6/README-generator/blob/main/README.md"
        },
        {
            name: "Employee Tracker",
            image: employeeTracker,
            deployed: "",
            github: "https://github.com/jkrieger6/Employee-tracker.git"
        },
        {
            name: "SVG Generator",
            image: svg,
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
