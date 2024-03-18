// Define a project card class
class ProjectCard {
  title: string;
  short_description: string;
  description: string;
  components: string[];
  link: string;

  constructor(
    title: string,
    short_description: string,
    description: string,
    components: string[],
    link: string,
  ) {
    this.title = title;
    this.short_description = short_description;
    this.description = description;
    this.components = components;
    this.link = link;
  }
}

export default ProjectCard;
