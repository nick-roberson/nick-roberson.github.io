import ProfessionalExperience from "./professional_experience";

// Atomwise Experience
const atomwiseExperience = new ProfessionalExperience(
  "Senior Software Engineer",
  "Atomwise",
  "https://www.atomwise.com/",
  "Dec 2021",
  "Jan 2024",
  "Implemented Atomwise's Data Warehouse Infrastructure using DBT, Redshift, and Flyte, as well as played a key role in the development and improvement of internal Microservices and AI/ML pipelines.",
  // Tooling
  [
    "DBT",
    "Redshift",
    "Flyte",
    "Kubernetes",
    "Python",
    "Pandas",
    "Jupyter",
    "Flyte",
    "Docker",
    "CI/CD",
    "Prometheus",
    "AWS",
  ],
  // Skills
  [
    "Data Warehouse",
    "Microservices",
    "Kubernetes",
    "CI/CD",
    "Cost Optimization",
    "ML/AI Pipelines",
    "Data Pipelines",
  ],
  [
    "Implemented Atomwise's first terabyte-scale Data Warehouse utilizing DBT, Redshift, and Flyte.",
    "Created automated pipelines integrating data from various sources achieving end-to-end refresh time of under 45 minutes for over 200 tables.",
    "Collaborated with teams across Machine Learning, Engineering, CADD, and Biology to integrate the Data Warehouse into company-wide applications.",
    "Played a key role in the development and improvement of over 75% of internal Microservices.",
    "Implemented a centralized CLI for 70+ internal tool deployments supported by a robust CI/CD system, reducing time-to-delivery by 75%.",
    "Developed a Kubernetes cost optimization tool utilizing Prometheus and AWS cost data, leading to a 20% annual reduction in cloud costs.",
    "Engineered core ML/AI execution pipelines using Python and Flyte, decreasing cost by 30% and improving overall speed.",
  ],
);

// Plenty Experience (Senior Software Engineer)
const plentySeniorExperience = new ProfessionalExperience(
  "Senior Software Engineer",
  "Plenty",
  "https://www.plenty.ag/",
  "Aug 2019",
  "Aug 2021",
  "Key developer and project manager for Plenty's indoor farm automation platform, as well as led the development and integration of low-latency tracking software for Bay Area factory operations.",
  // Tooling
  [
    "Akka",
    "Stitch",
    "DBT",
    "Snowflake",
    "Sisense",
    "Python",
    "Flask",
    "Postgres",
    "Docker",
    "Kubernetes",
  ],
  // Skills
  [
    "Akka Actor Model",
    "Low-latency Tracking Software",
    "Data Warehouse",
    "Project Management",
  ],
  [
    "Engineered an innovative platform using Akka Actor model to automate indoor farm operations, orchestrating tens of thousands of daily machinery actions.",
    "Oversaw development and integration of low-latency tracking software for Bay Area factory operations.",
    "Implemented data warehouse using Stitch, DBT, Snowflake, and Sisense to support various internal teams.",
    "Led a team of contractors in the Apps and Data division, driving project milestones and deliverables.",
  ],
);

// Plenty Experience (Software Engineer)
const plentyEngineerExperience = new ProfessionalExperience(
  "Software Engineer",
  "Plenty",
  "https://www.plenty.ag/",
  "Jul 2018",
  "Aug 2019",
  "As an early team member, designed and developed core Java and Python Microservices and led Plenty's Corporate Social Responsibility (CSR) team.",
  // Tooling
  ["Java", "Python", "Spring", "Docker", "Kubernetes", "Flask", "Postgres"],
  // Skills
  [
    "Microservices",
    "Backend Development",
    "Full-stack Development",
    "Corporate Social Responsibility (CSR)",
  ],
  [
    "Designed and developed Java and Python Microservices core to the company's operations.",
    "Initiated and led Plenty's Corporate Social Responsibility (CSR) team, guiding the company's commitment to sustainable produce.",
  ],
);

export { atomwiseExperience, plentySeniorExperience, plentyEngineerExperience };
