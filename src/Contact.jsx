import React from 'react'

const Contact = () => {
    return (
        <div className="contact__container">
            <div className="contact">
                <div className="contact__name">Name: Per Eriksson</div>
                <div className="contact__telefon">Telephone: +46707289554</div>
                <div className="contact__mail">Email: per_hegg@hotmail.com</div>
            </div>  
            <div className="icons">
                <a href="https://www.linkedin.com/in/per-eriksson-537761a8/" target="_blank" rel="noopener noreferrer" className="icons__link">
                    <div className="icons__linkedin"></div>
                </a>

                <a href="https://github.com/perhegg" target="_blank" rel="noopener noreferrer" className="icons__link">
                    <div className="icons__github"></div>
                </a>
            </div>
        </div>
    )

}

export default Contact