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

export default ProjectCard;