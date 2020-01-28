import React from 'react'

const About = () => {
    return (
        <div className="about">
            <div className="about__grid">
                <div className="about__item--1">
                    <div className="about__item--1--bild"></div>
                </div>
                <div className="about__item--2">
                    <h1 className="about__content-text">Hello and Welcome! My name is Per Eriksson and I'm a Junior Full Stack Developer with a passion for computers, music, health and so much more. I am opera singer with a master degree but I've recently decided to switch career and become a developer.    </h1>
                </div>

                <div className="about__item--3">
                    SKILLS
                </div>

                <ul className="about__item--4 about__item--4--list--1">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>SASS</li>
                    <li>REACT</li>
                </ul>

                <ul className="about__item--4 about__item--4--list--2">

                    <li>RUBY</li>
                    <li>RUBY ON RAILS</li>
                    <li>SQL</li>
                    <li>PYTHON</li>
                </ul>
                <ul className="about__item--4 about__item--4--list--3">

                    <li>RUBY</li>
                    <li>RUBY</li>
                    <li>RUBY</li>
                    <li>RUBY</li>
                </ul>

                <div className="about__item--5">
                    EDUCATION
                </div>


            </div>
        </div>
    )

}

export default About