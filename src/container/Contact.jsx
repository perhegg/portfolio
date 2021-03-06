import React from 'react'

const Contact = () => {
    return (
        <div className="contact__container">
            <div className="contact">
                <div className="contact__text contact__name">Name: Per Eriksson</div>
                <div className="contact__text contact__bild"></div>
                <div className="contact__text contact__telefon">Telephone: +46707289554</div>
                <div className="contact__text contact__mail">Email: per_hegg@hotmail.com</div>
                <a href="https://www.linkedin.com/in/per-eriksson-537761a8/" target="_blank" rel="noopener noreferrer" className="contact__linkedin">
                    <div className="icons__linkedin"></div>
                </a>
                <a href="https://github.com/perhegg" target="_blank" rel="noopener noreferrer" className="contact__github">
                    <div className="icons__github"></div>
                </a>
            </div>  
            <div className="icons">

            </div>
        </div>
    )

}

export default Contact