import React from 'react';
import beerTraveler from '../../images/dataDisplay.jpeg';
import readmeGen from '../../images/readmegen.jpeg';
import svg from '../../images/SVG.jpeg';
import employeeTracker from '../../images/employee.jpeg';
import recipeDrawer from '../../images/recipeDrawer.jpeg';
import workDay from '../../images/workDay.jpeg';

const styles = {
  card1: {
    background: 'grey',
    color: '#9CF6F6',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    padding: '20px',
  },
  card2: {
    background: "#C2C2C2",
    color: '#113e7c',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    padding: '20px',
    borderRadius: '10px',
    marginBottom: '20px',
    },
  content: {
    minHeight: 50,
    lineHeight: '1.5rem',
    fontSize: '1.2rem',
    color: '#113e7c',
    padding: '0 20px',
    textAlign: 'center',
  },
  image: {
    height: '200px',
    objectFit: 'cover',
    padding: '10px',
    border: '1px solid #bed630',
    borderRadius: '5px',
  },
  projectStyles: {
    textDecoration: 'underline',
    fontSize: '30px',
    marginBottom: '10px',
  },
};

function Project(props) {
  return (
    <div className="card" style={styles.card2}>
      <div style={styles.projectStyles}>{props.data.name}</div>
      <div>
        <img style={styles.image} alt={props.data.name} src={props.data.image} />
      </div>
      <div style={styles.content}>
        <p>
          <strong>Link to Deployed Application:</strong>{' '}
          <a href={props.data.deployed} target="_blank" rel="noopener noreferrer">
            {props.data.deployed}
          </a>
        </p>
        <p>
          <strong>Link to GitHub Repository:</strong>{' '}
          <a href={props.data.github} target="_blank" rel="noopener noreferrer">
            {props.data.github}
          </a>
        </p>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const projects = [
    {
      name: 'Beer Traveler',
      image: beerTraveler,
      deployed: 'https://jkrieger6.github.io/beer-traveler/',
      github: 'https://github.com/jkrieger6/beer-traveler',
    },
    {
      name: 'The Recipe Drawer',
      image: recipeDrawer,
      deployed: 'https://the-recipe-drawer.herokuapp.com',
      github: 'https://github.com/BigMikeNova/the-recipe-drawer',
    },
    {
      name: 'Work Day Scheduler',
      image: workDay,
      deployed: 'https://jkrieger6.github.io/Work-Day-Calendar/',
      github: 'https://github.com/jkrieger6/Work-Day-Calendar',
    },
    {
      name: 'README Generator',
      image: readmeGen,
      deployed: 'https://github.com/jkrieger6/README-generator',
      github: 'https://github.com/jkrieger6/README-generator',
    },
    {
      name: 'Employee Tracker',
      image: employeeTracker,
      deployed: 'https://github.com/jkrieger6/Employee-tracker',
      github: 'https://github.com/jkrieger6/Employee-tracker',
    },
    {
      name: 'SVG Generator',
      image: svg,
      deployed: 'https://github.com/jkrieger6/brand-logo-generator',
      github: 'https://github.com/jkrieger6/brand-logo-generator',
    },
  ];

  return (
    <div style={styles.card1}>
      <h1>Portfolio</h1>
      <div className="card-columns">
        {projects.map((project, index) => (
          <Project key={index} data={project} />
        ))}
      </div>
    </div>
  );
}