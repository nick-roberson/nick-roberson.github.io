// Define a project card class
class ProjectCard {
  title: string;

  short_description: string;
  description: string;

  images: string[];
  components: string[];

  readme_link: string;
  link: string;

  constructor(
    title: string,
    short_description: string,
    description: string,
    images: string[],
    components: string[],
    readme_link: string,
    link: string,
  ) {
    this.title = title;
    this.short_description = short_description;
    this.description = description;
    this.images = images;
    this.components = components;
    this.readme_link = readme_link;
    this.link = link;
  }
}

export default ProjectCard;
