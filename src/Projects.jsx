import React, { Component } from "react"
import ProjectCard from './ProjectCard'

class Projects extends Component {
    constructor() {
        super();
        this.state = {
            projects: [
                {
                    "id": 1,
                    "name": "CSS/SASS project",
                    "page": "http://www.aftonbladet.se",
                    "description": "CSS/SASS Project",
                    "image": "./sass/img/natour.png"
                },
                {
                    "id": 2,
                    "name": "Sten sax påse",
                    "page": "https://stensaxpawse.netlify.com/",
                    "description": "Simple Rock Paper Scissor game in vanilla Javascript",
                    "image": "./sass/img/natour.png"         
                },
                {
                    "id": 3,
                    "name": "Sten sax påse",
                    "page": "https://stensaxpawse.netlify.com/",
                    "description": "Simple Rock Paper Scissor game in vanilla Javascript",
                    "image": "./sass/img/natour.png"            
                }
            ]
        };
    }

    render() {
        const projects = this.state.projects
        let projectsList 

        if (projects.length > 0) {
            projectsList = projects.map(project => {
                return (
                    <div key={project.id} className={`projects__item--${project.id}`}>
                        <ProjectCard project={project} />
                    </div>
                )
            })
        }

        return (
            <div className="projects">
                {projectsList}
            </div>
        )
    }
};

export default Projects