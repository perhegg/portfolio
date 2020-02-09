import React, { Component } from "react"
import ProjectCard from './ProjectCard'
import axios from 'axios'

class Projects extends Component {
    constructor() {
        super();
        this.state = {
            projects: []
        };
    }
    
    componentDidMount() {
        axios.get('projects.json')
        .then(response => {
            this.setState({
                projects: response.data
            })
        })
    }

    render() {
        const projects = this.state.projects
        let projectsList 

        if (projects.length > 0) {
            projectsList = projects.map(project => {
                return (
                    <div key={project.id} className="project">
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