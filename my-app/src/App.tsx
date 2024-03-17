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

// Define a personal information class
class PersonalInfo {

  name: string;
  email: string;
  phone: string;

  constructor(name: string, email: string, phone: string) {
    this.name = name;
    this.email = email;
    this.phone = phone;
  }
}

// Create a list of projects
const projects: ProjectCard[] = [
  new ProjectCard("Project 1", "Description 1", "Link 1"),
  new ProjectCard("Project 2", "Description 2", "Link 2"),
  new ProjectCard("Project 3", "Description 3", "Link 3"),
];

// Create a personal information object
const personalInfo: PersonalInfo = new PersonalInfo(
  "Nick Roberson",
  "nicholas.roberson.95@gmail.com",
  "703-336-9516"
);

function App() {

  return (
    <div className="App">

      <Box sx={{ bgcolor: 'background.paper', pt: 8, pb: 6 }}>
        <Container maxWidth="sm">
          <Typography component="h1" variant="h2" align="center" color="text.primary" gutterBottom>
            {personalInfo.name}
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Email: {personalInfo.email}
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Phone: {personalInfo.phone}
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" paragraph>
            <Link href="https://www.linkedin.com/in/nicholas-roberson/" color="inherit">
              LinkedIn
            </Link>
          </Typography>
        </Container>
      </Box>

      <Box sx={{ bgcolor: 'background.paper', pt: 8, pb: 6 }}>
        <Container maxWidth="sm">
          <Typography component="h2" variant="h4" align="center" color="text.primary" gutterBottom>
            Projects
          </Typography>
          {projects.map((project) => (
            <div>
              <Typography variant="h5" align="center" color="text.secondary" paragraph>
                {project.title}
              </Typography>
              <Typography variant="h5" align="center" color="text.secondary" paragraph>
                {project.description}
              </Typography>
              <Typography variant="h5" align="center" color="text.secondary" paragraph>
                <Link href={project.link} color="inherit">
                  {project.link}
                </Link>
              </Typography>
            </div>
          ))}
        </Container>
      </Box>

    </div>
  );
}

export default App;
