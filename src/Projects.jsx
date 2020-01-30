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
                    "page": "https://css-sass-project.netlify.com/",
                    "description": "CSS/SASS Project"                },
                {
                    "id": 2,
                    "name": "Sten sax påse",
                    "page": "https://stensaxpawse.netlify.com/",
                    "description": "Simple Rock Paper Scissor game in vanilla Javascript"
                },
                {
                    "id": 3,
                    "name": "Sten sax påse",
                    "page": "https://budgetjavascript.netlify.com/",
                    "description": "Simple Rock Paper Scissor game in vanilla Javascript"
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
                        <a href={project.page} target="_blank" rel="noopener noreferrer" className={`projects__link--${project.id}`}><ProjectCard project /></a>
                    </div>
                )
            })
        }

        return (
            <div className="projects">
                {projectsList}
                <div className="projects__description projects__description--1">Pure CSS/SASS page</div>
                <div className="projects__description projects__description--2">Simple rock paper scissor game</div>
                <div className="projects__description projects__description--3">A vanilla Javascript budget app</div>
            </div>
        )
    }
};

export default Projects