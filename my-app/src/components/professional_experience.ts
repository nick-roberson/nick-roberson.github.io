// Create a class for Professional Experience
class ProfessionalExperience {
  title: string;
  company: string;
  start_date: string;
  end_date: string;
  description: string;
  items: string[];

  constructor(
    title: string,
    company: string,
    start_date: string,
    end_date: string,
    description: string,
    items: string[],
  ) {
    this.title = title;
    this.company = company;
    this.start_date = start_date;
    this.end_date = end_date;
    this.description = description;
    this.items = items;
  }
}

export default ProfessionalExperience;
