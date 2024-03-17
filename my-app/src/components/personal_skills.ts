import Skill from './personal_skill';

// Define a persona skills class 
class Skills {
    skills: Skill[];
    constructor(skills: Skill[]) {
        this.skills = skills;
    }
}

export default Skills;