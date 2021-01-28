import React from "react"
import ProjectCard from '../components/ProjectCard'
import { projectData } from '../data/projectsData'


const Projects = () => {

    const projects = projectData
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

};

export default Projects