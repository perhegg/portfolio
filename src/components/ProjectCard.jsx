import React from "react"
import "../index.scss"

import budget from '../data/img/budget2.png'
import css from '../data/img/css.png'
import grid from '../data/img/gridprojekt.png'
import sten from '../data/img/sten1.png'
import burger from '../data/img/burger.PNG'
import opera from '../data/img/opera.png'


const ProjectCard = (props) => {
    const {project} = props

    let image = null

    switch (project.image) {
        case "budget":
            image = budget
            break;
        case "css":
            image = css
            break;
        case "grid":
            image = grid
            break;
        case "sten":
            image = sten
            break;
        case "burger":
            image = burger
            break;
        case "opera":
            image = opera
            break;
        default:
            break;
    }

    return (
            <div key={project.id} className="card">
                <a href={project.page} target="_blank" rel="noopener noreferrer">
                    <img src={image} className="card__img" alt="" />
                </a>
                <a href={project.page} target="_blank" rel="noopener noreferrer">
                    <p className="card__title">{project.name}</p>
                </a>
                <p className="card__description">{project.description}</p>
            </div>
        )
}

export default ProjectCard
