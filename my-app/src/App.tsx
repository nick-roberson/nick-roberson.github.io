import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import './App.css';

// Define a project card class 
class ProjectCard {
  title: string;
  description: string;
  link: string;
  constructor(title: string, description: string, link: string) {
    this.title = title;
    this.description = description;
    this.link = link;
  }
}

function App() {

  // Create a list of projects
  const projects: ProjectCard[] = [
    new ProjectCard("Project 1", "Description 1", "Link 1"),
    new ProjectCard("Project 2", "Description 2", "Link 2"),
    new ProjectCard("Project 3", "Description 3", "Link 3"),
  ];

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Learn more about my personal projects!
        </p>

        <div>
          {projects.map((project) => {
            return (
              <div>
                <h1>{project.title}</h1>
                <p>{project.description}</p>
                <Button variant="contained" href={project.link}>
                  Learn More
                </Button>
              </div>
            );
          })}
        </div>
      </header>
    </div>
  );
}

export default App;
