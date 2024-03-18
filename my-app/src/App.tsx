import React from "react";

// Material-UI imports
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";

// My imports
import PersonalInfo from "./components/personal_info";
import PersonalStatement from "./components/personal_statement";
import ProjectCard from "./components/project_card";
import Skill from "./components/personal_skill";
import Skills from "./components/personal_skills";

// CSS imports
import "./App.css";

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

function App() {
  return (
    <div className="App">
      <Box m={2}>
        <Box sx={{ bgcolor: "background.paper" }}>
          <Container>
            <Typography
              component="h1"
              variant="h2"
              color="text.primary"
              gutterBottom
            >
              {personalInfo.name}
            </Typography>
            <Typography variant="h5" color="text.secondary" paragraph>
              {personalStatement.statement}
            </Typography>
            <Typography variant="h5" color="text.secondary" paragraph>
              Email: {personalInfo.email}
            </Typography>
            <Typography variant="h5" color="text.secondary" paragraph>
              Phone: {personalInfo.phone}
            </Typography>
            <Typography variant="h5" color="text.secondary" paragraph>
              <Link
                href="https://www.linkedin.com/in/nicholas-roberson/"
                color="inherit"
              >
                LinkedIn
              </Link>
            </Typography>
          </Container>
        </Box>

        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={9}>
            <Container maxWidth="sm">
              <Typography
                component="h2"
                variant="h4"
                color="text.primary"
                gutterBottom
              >
                Projects
              </Typography>
              {projects.map((project) => (
                <div>
                  <Typography variant="h5" color="text.secondary" paragraph>
                    {project.title}
                  </Typography>
                  <Typography variant="h5" color="text.secondary" paragraph>
                    {project.description}
                  </Typography>
                  <Typography variant="h5" color="text.secondary" paragraph>
                    <Link href={project.link} color="inherit">
                      {project.link}
                    </Link>
                  </Typography>
                </div>
              ))}
            </Container>
          </Grid>

          <Grid item xs={3}>
            <Container maxWidth="sm">
              <Typography
                component="h2"
                variant="h4"
                color="text.primary"
                gutterBottom
              >
                Skills
              </Typography>
              {allSkills.map((skill_category) => (
                <div>
                  <Typography variant="h4" color="text.secondary" paragraph>
                    {skill_category.category}
                  </Typography>
                  <ul>
                    {skill_category.skills.map((s) => (
                      <li>
                        <Typography
                          variant="h5"
                          color="text.secondary"
                          paragraph
                        >
                          {s}
                        </Typography>
                      </li>
                    ))}
                  </ul>
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
