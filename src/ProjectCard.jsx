import React from "react"
import "./index.scss"


const ProjectCard = (props) => {
    let project = props.project
    return (
        <div key={project.id} className="card">
        </div>
    )
}

export default ProjectCard
