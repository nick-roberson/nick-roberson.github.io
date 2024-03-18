// Create a class for Professional Experience
class ProfessionalExperience {
  title: string;
  company: string;
  company_link: string;
  start_date: string;
  end_date: string;

  description: string;

  tooling: string[];
  skills: string[];

  items: string[];

  constructor(
    title: string,
    company: string,
    company_link: string,
    start_date: string,
    end_date: string,
    description: string,
    tooling: string[],
    skills: string[],
    items: string[],
  ) {
    this.title = title;
    this.company = company;
    this.company_link = company_link;
    this.start_date = start_date;
    this.end_date = end_date;
    this.description = description;
    this.tooling = tooling;
    this.skills = skills;
    this.items = items;
  }
}

export default ProfessionalExperience;
