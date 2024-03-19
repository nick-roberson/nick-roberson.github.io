import React from "react";

// Material-UI imports
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// Icons
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

// My imports
import PersonalInfo from "./components/personal_info";
import PersonalStatement from "./components/personal_statement";
import ProjectCard from "./components/project_card";
import Skills from "./components/personal_skills";
import {
  atomwiseExperience,
  plentyEngineerExperience,
  plentySeniorExperience,
} from "./components/experience";

// CSS imports
import "./App.css";
import { List, ListItem } from "@mui/material";

// Static variables
const githubLink = "https://github.com/nick-roberson";
const linkedInLink = "https://www.linkedin.com/in/nicholas-roberson/";
const resumePath = "./components/resume.pdf";

// Work Experience
const workExperience = [
  atomwiseExperience,
  plentySeniorExperience,
  plentyEngineerExperience,
];

// Create a list of projects
const projects: ProjectCard[] = [
  new ProjectCard(
    "My Places Service - Manage recipes and places you love!",
    "Personal web app to organize and manage favorite places and recipes built with Python, FastAPI, React, Typescript, and MongoDB",
    `I created 'places' as a personal project to organize and manage my favorite places to visit and the recipes
     I love to make at home. It features a web interface for adding, removing, and commenting on places and recipes, 
     supporting a dynamic and personal culinary and travel diary. Integrating MongoDB for storage and requiring 
     a Google Maps/Places API key, this project combines my interests in coding, food, and travel. It's a reflection 
     of my skills in web development and my passion for exploring and cooking.`,
    ["Python", "React", "TypeScript", "FastAPI", "OpenAPI", "MongoDB"],
    "https://github.com/nick-roberson/places/blob/main/README.md",
    "https://github.com/nick-roberson/places",
  ),
  new ProjectCard(
    "Fast API Service Generator - Create FastAPI services w/ MongoDB backend using a CLI!",
    "CLI Tool to generate FastAPI services w/ MongoDB Backend using OpenAPI and Jinja2",
    `I developed 'fastapi-gen' as a tool to streamline the development of FastAPI services by leveraging Python, 
    MongoDB, and Jinja templating. It allows for the quick generation of service scaffolding, models, and CRUD 
    operations through YAML configurations, aiming to reduce the initial setup time for new projects. This project 
    is especially helpful for those looking to quickly stand up FastAPI applications with MongoDB integration.`,
    ["Python", "FastAPI", "OpenAPI", "MongoDB", "Jinja2"],
    "https://github.com/nick-roberson/fastapi-gen/blob/main/README.md",
    "https://github.com/nick-roberson/fastapi-gen",
  ),
];

// Create a personal information object
const personalInfo: PersonalInfo = new PersonalInfo(
  "Nick Roberson",
  "nicholas.roberson.95@gmail.com",
  "703-336-9516",
);

// Create a personal statement object
const description = [
  `As a Senior Engineer with over five years of experience, I specialize in back-end 
  development, data engineering, and project management.`,
  `I have led the development of innovative 
  solutions at both of my previous companies, focusing on clear requirements and a user-centered 
  approach. Notable projects include a low-latency, high-availability tracking and automation 
  platform for indoor farming at Plenty, and cost estimation software for Kubernetes at Atomwise. 
  Furthermore, I have proven expertise in managing large-scale data warehouses, effectively meeting 
  the diverse needs of internal teams at both organizations. Overall, I excel in backend service/API 
  development and data engineering, coupled with a strong ability to solve complex problems. My 
  commitment to fostering team collaboration has been instrumental in delivering top-notch solutions.`,
  `On the side I enjoy working on personal projects, such as 'My Places', a web app to organize and
  manage favorite places and recipes. This was born our of a bit of frustration with existing tools
  like Google Maps and Yelp, and a desire to have a more personal and customizable way to keep track
  of places I've been and recipes I've enjoyed.`,
  `I also developed 'fastapi-gen', a CLI tool to generate
  FastAPI services with a MongoDB backend using OpenAPI and Jinja2. This tool was developed to streamline
  the development of FastAPI services by leveraging Python, MongoDB, and Jinja templating. It allows for
  the quick generation of service scaffolding, models, and CRUD+ operations through YAML configurations,
  which aims to reduce the initial setup time for new projects (but mostly POC implementations). Both are 
  still a work in progress, but I'm excited to continue to develop and improve them.`,
  `I am always looking for new opportunities to grow and learn,
  and I am excited to bring my expertise to a new team.`,
  `If you would like to reach out to me, please feel free to email me at nicholas.roberson.95@gmail.com, or
  call me at 703-336-9516. I am also available on LinkedIn and GitHub, and I can send on my resume 
  on request! Look forward to connecting with you soon.`,
];
const personalStatement = new PersonalStatement(description);

// Define a list of skills
const pythonSkills = new Skills("Python Backend", [
  "Flask",
  "FastAPI",
  "Alembic",
  "Redis",
  "Celery",
]);
const javaSkills = new Skills("Java Backend", ["Spring", "Dropwizard", "jOOQ"]);
const warehouseSkills = new Skills("Data Warehouse", [
  "Snowflake",
  "Redshift",
  "DBT",
]);
const dbSkills = new Skills("Database / Datastores", [
  "RDBMS",
  "MySQL",
  "Postgres",
  "MongoDB",
  "DynamoDB",
  "Athena",
  "S3",
  "RDS",
]);
const toolSkills = new Skills("Tools", ["Pandas", "Jupyter", "DuckDB"]);
const workflowSkills = new Skills("Workflows", ["Airflow", "Flyte", "Prefect"]);
const awsSkills = new Skills("Other AWS", [
  "EC2",
  "Glue",
  "SQS",
  "Lambda",
  "CloudWatch",
  "API Gateway",
]);
const allSkills = [
  pythonSkills,
  javaSkills,
  warehouseSkills,
  dbSkills,
  toolSkills,
  workflowSkills,
  awsSkills,
];

// Function to render the experience section
function renderExperience() {
  return (
    <div>
      {workExperience.map((experience) => (
        <Accordion sx={{ marginBottom: 2, marginTop: 3 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography align="left" color="text.secondary">
              <strong>
                {experience.title} - {experience.company} - {experience.yoe}
              </strong>
            </Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Typography align="left" paragraph>
              <strong>Company: </strong>
              <a href={experience.company_link}>{experience.company}</a>
            </Typography>
            <Typography align="left" paragraph>
              <strong>Languages / Tools </strong>
              <br />
            </Typography>
            <Stack direction="row" spacing={2}>
              {experience.tooling.map((tool) => (
                <Button variant="outlined" color="primary">
                  {tool}
                </Button>
              ))}
            </Stack>
            <br />

            <Typography align="left" paragraph>
              <strong>Skills / Experiences</strong>
              <br />
            </Typography>
            <Stack direction="row" spacing={2}>
              {experience.skills.map((skill) => (
                <Button variant="outlined" color="primary">
                  {skill}
                </Button>
              ))}
            </Stack>
            <br />

            <Typography align="left" paragraph>
              <strong>Description</strong>
              <br />
              {experience.description}
            </Typography>
            <Typography align="left" paragraph>
              <ul>
                {experience.items.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}

// Function to render the projects section
function renderProjects() {
  return (
    <div>
      {projects.map((project) => (
        <Accordion key={project.title} sx={{ marginBottom: 2, marginTop: 3 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography align="left" color="text.secondary">
              <strong>{project.title}</strong>
            </Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Typography align="left" paragraph>
              <strong>Tooling / Components</strong>
            </Typography>

            <Stack direction="row" spacing={2}>
              {project.components.map((component) => (
                <Button variant="outlined" color="primary">
                  {component}
                </Button>
              ))}
            </Stack>

            <br />
            <Typography align="left" paragraph>
              <strong>Summary:</strong>
              <br />
              {project.short_description}
            </Typography>

            <br />
            <Typography align="left" paragraph>
              <strong>Description:</strong>
              <br />
              {project.description}
            </Typography>

            <br />
            <Typography align="left" paragraph>
              Check out the project on GitHub using the links below!
            </Typography>

            <AccordionActions>
              <Button size="small" href={project.link}>
                <GitHubIcon /> Github
              </Button>
              <Button size="small" href={project.readme_link}>
                <GitHubIcon /> Project README.md
              </Button>
            </AccordionActions>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Box m={3}>
        <Box sx={{ bgcolor: "background.paper" }}>
          <Typography
            component="h3"
            variant="h3"
            color="text.primary"
            align="left"
          >
            Nick Roberson
          </Typography>
          <Typography
            component="h6"
            variant="h6"
            color="text.secondary"
            align="left"
          >
            Senior Software + Data Engineer
          </Typography>
          <Stack direction="row" spacing={2} justifyContent="left">
            <Button
              startIcon={<AlternateEmailIcon />}
              href={"mailto:" + personalInfo.email}
            >
              Email Me
            </Button>
            <Button
              startIcon={<ContactPhoneIcon />}
              href={"tel:" + personalInfo.phone}
            >
              Call Me
            </Button>
            <Button startIcon={<GitHubIcon />} href={githubLink}>
              GitHub
            </Button>
            <Button startIcon={<LinkedInIcon />} href={linkedInLink}>
              LinkedIn
            </Button>
          </Stack>
          <br />
          <Divider variant="middle">
            <strong>About Me</strong>
          </Divider>
          <br />
          {personalStatement.statement.map((paragraph) => (
            <Typography align="left" color="text.secondary" paragraph>
              {paragraph}
            </Typography>
          ))}
        </Box>

        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={9}>
            <br />
            <Divider variant="middle">
              <strong>Work Experience</strong>{" "}
            </Divider>
            <br />
            {renderExperience()}
            <br />
            <Divider variant="middle">
              <strong>Personal Projects</strong>
            </Divider>
            <br />
            {renderProjects()}
            <br />
          </Grid>

          <Grid item xs={3}>
            <Container>
              <br />
              <Divider variant="middle">
                <strong>Skills / Tools</strong>
              </Divider>
              <br />
              {allSkills.map((skill_category) => (
                <div>
                  <Typography variant="h6" align="left">
                    {skill_category.category}
                  </Typography>

                  <Grid container>
                    {skill_category.skills.map((skill) => (
                      <List>
                        <ListItem key={skill} disablePadding>
                          <Typography variant="body2" align="left" m={1}>
                            {skill}
                          </Typography>
                        </ListItem>
                      </List>
                    ))}
                  </Grid>
                </div>
              ))}
            </Container>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;
