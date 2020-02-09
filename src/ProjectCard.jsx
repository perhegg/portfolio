import React from "react"
import "./index.scss"





const ProjectCard = (props) => {
    let project = props.project
    return (
        <div key={project.id} className="card">
            <a href={project.page} target="_blank" rel="noopener noreferrer">
                <img src={require(`${project.image}`)} className="card__img" alt=""/>
            </a>
            <a href={project.page} target="_blank" rel="noopener noreferrer">
                <p className="card__title">{project.name}</p>
            </a>
            <p className="card__description">{project.description}</p>
        </div>
    )
}

export default ProjectCard
