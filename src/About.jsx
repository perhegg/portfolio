import React from 'react'

const About = () => {
    return (
        <div className="about">
            <div className="about__grid">
                <div className="about__item--2">
                    <p className="about__content-text">
                        My name is Per Eriksson and I'm a Junior Full Stack Developer with a passion for computers, music, health and so much more. 
                        I am opera singer with a master degree and have been working since 2015 but I've decided to switch career and become a developer. Computers, math and logic
                        have always been big passions of mine and I felt it was time to take those passions seriously.
                        In 2019 I took a 12 week Full stack Developer boot camp at Craft Academy. 
                        The course was very intense and I really learnt a lot. The focus was on 
                        Agile development, SCRUM and test driven development(TDD).  
                        We worked mainly with Ruby (Ruby on Rails) and Javascript (React). <br/> <br/>
                        After the course I continued to take courses in Javascript, CSS, Python, SQL.
                        I really feel that I'm ready to start working as a developer and to dive deeper into the world of code.   
                        As a developer I'm a quick learner and eager to learn new things. 
                        I have very good patience and enjoy solving difficult problems and tasks. 
                        From my work as a singer I have learnt how to work in tight teams consisting of many different personalities, always ensuring that in the end "the show must go on".

                    </p>
                </div>

                <div className="about__item--3">
                    <h4>SKILLS</h4>
                </div>

                <ul className="about__item--4 about__item--4--list--1">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>SASS</li>
                    <li>React</li>
                </ul>

                <ul className="about__item--4 about__item--4--list--2">

                    <li>Ruby</li>
                    <li>Ruby On Rails</li>
                    <li>SQL</li>
                    <li>Python</li>
                </ul>
                <ul className="about__item--4 about__item--4--list--3">

                    <li>Agile</li>
                    <li>Scrum</li>
                    <li>TDD</li>
                </ul>

                <div className="about__item--5">
                    <h4 className="about__item--5--title">EDUCATION</h4>
                    <div className="about__item--5--text">
                       <p>&diams; 12 week Full Stack Developer Boot Camp</p>
                       <p>&diams; 2 years of self studies</p>
                    </div>
                </div>




            </div>
        </div>
    )

}

export default About