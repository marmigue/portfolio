import React from "react";
import CV from '../../assets/cv.pdf';
import '../header.css';


function Contact( { setStateActive } ){
    return(
        <div className="contact">
            <a href={CV} download className="btn btn-primary">Download</a>
            <a 
                href="#contact" 
                className="btn btn-secundary"
            >Contactame</a>
        </div>
    );
}

export { Contact };