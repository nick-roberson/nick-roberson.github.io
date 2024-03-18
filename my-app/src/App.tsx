import React from "react";

// Material-UI imports
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
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

// Static variables
const githubLink = "https://github.com/nick-roberson";
const linkedInLink = "https://www.linkedin.com/in/nick-roberson/";
const resumePath = "data/resume.pdf";

// Work Experience
const workExperience = [
  atomwiseExperience,
  plentySeniorExperience,
  plentyEngineerExperience,
];

// Create a list of projects
const projects: ProjectCard[] = [
  new ProjectCard(
    "My Places",
    "Personal website to manage places and recipes",
    "Personal website to manage places and recipes. Built with React, TypeScript, Material-UI, Node.js, FastAPI, and MongoDB. Complete with a front end, back end, and API documentation.",
    [
      "Python",
      "React",
      "TypeScript",
      "Material-UI",
      "Node.js",
      "FastAPI",
      "OpenAPI",
      "MongoDB",
    ],
    "https://github.com/nick-roberson/places",
  ),
  new ProjectCard(
    "Fast API Gen",
    "FastAPI Service Generator w/ MongoDB backend.",
    "Generate a FastAPI service with a MongoDB backend using a Jinja2 templates. Driven by a simple YAML configuration file for the data models that you wish to manage.",
    ["Python", "FastAPI", "Jinja2", "MongoDB"],
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
const personalStatement: PersonalStatement = new PersonalStatement(
  "As a Senior Engineer with over five years of experience, I specialize in back-end development, data engineering, and project management. I have led the development of innovative solutions at both of my previous companies, focusing on clear requirements and a user-centered approach. Notable projects include a low-latency, high-availability tracking and automation platform for indoor farming at Plenty, and cost estimation software for Kubernetes at Atomwise. Furthermore, I have proven expertise in managing large-scale data warehouses, effectively meeting the diverse needs of internal teams at both organizations. Overall, I excel in backend service/API development and data engineering, coupled with a strong ability to solve complex problems. My commitment to fostering team collaboration has been instrumental in delivering top-notch solutions.",
);

// Define a list of skills
const warehouseSkills = new Skills("Data Warehouse", [
  "Snowflake",
  "Redshift",
  "DBT",
]);
const pythonSkills = new Skills("Python Backend", [
  "Flask",
  "FastAPI",
  "Alembic",
  "Redis",
  "Celery",
]);
const javaSkills = new Skills("Java Backend", ["Spring", "Dropwizard", "jOOQ"]);
const dbSkills = new Skills("DBs", ["RDBMSs", "MySQL", "Postgres", "MongoDB"]);
const toolSkills = new Skills("Tools", ["Pandas", "Jupyter", "DuckDB"]);
const workflowSkills = new Skills("Workflows", ["Airflow", "Flyte", "Prefect"]);
const awsSkills = new Skills("AWS", [
  "EC2",
  "S3",
  "Athena",
  "Glue",
  "RDS",
  "SQS",
  "Lambda",
]);
const allSkills = [
  warehouseSkills,
  pythonSkills,
  javaSkills,
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
        <Accordion key={experience.title} sx={{ marginBottom: 2 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography align="left" color="text.secondary">
              {experience.title} - {experience.company} :{" "}
              {experience.start_date} - {experience.end_date}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography align="left" paragraph>
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
        <Accordion key={project.title} sx={{ marginBottom: 2 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography align="left" color="text.secondary">
              {project.title} - {project.short_description}
            </Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Stack direction="row" spacing={2}>
              {project.components.map((component) => (
                <Button variant="outlined" color="primary">
                  {component}
                </Button>
              ))}
            </Stack>
            <br />
            <Typography align="left" paragraph>
              {project.description}
            </Typography>

            <AccordionActions>
              <Button size="small" href={project.link}>
                <GitHubIcon />
                GitHub Link
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
            align="left"
            color="text.primary"
            gutterBottom
          >
            {personalInfo.name}
          </Typography>

          <Divider variant="middle"> Links </Divider>

          <Stack direction="row" spacing={2}>
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
            <Button startIcon={<FileDownloadIcon />} href={resumePath} download>
              Resume
            </Button>
          </Stack>

          <Divider variant="middle"> About Me </Divider>

          <Typography color="text.secondary" align="left" paragraph>
            {personalStatement.statement}
          </Typography>
        </Box>

        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={9}>
            <Divider variant="middle"> Experience </Divider>
            {renderExperience()}

            <Divider variant="middle"> Projects </Divider>
            {renderProjects()}
          </Grid>

          <Grid item xs={3}>
            <Container maxWidth="sm">
              <Divider variant="middle"> Skills </Divider>
              {allSkills.map((skill_category) => (
                <div>
                  <Typography
                    variant="h6"
                    align="left"
                    color="text.secondary"
                    paragraph
                  >
                    {skill_category.category}
                  </Typography>
                  <Grid container spacing={1}>
                    {skill_category.skills.map((skill) => (
                      <Grid item xs={5}>
                        <Button variant="outlined" color="primary">
                          {skill}
                        </Button>
                      </Grid>
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
