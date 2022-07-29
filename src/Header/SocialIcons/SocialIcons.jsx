import React from "react";
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';

function SocialIcons(){
    return(
        <div className="social__header">
            <a href="https://www.linkedin.com/in/marcelo-colm%C3%A1n-vel%C3%A1zquez-898944244//" rel="noreferrer" target="_blank"><BsLinkedin size="2.4rem"/></a>
            <a href="https://github.com/marmigue" rel="noreferrer" target="_blank"><BsGithub size="2.4rem"/></a>
            <div className="container__decorative">
                <div className="decorative"></div>
            </div>
        </div>
    );
}

export { SocialIcons };