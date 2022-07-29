import React from "react";
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';

function SocialIcons(){
    return(
        <div className="social__header">
            <a href="https://es.linkedin.com/" rel="noreferrer" target="_blank"><BsLinkedin size="2.4rem"/></a>
            <a href="https://github.com/" rel="noreferrer" target="_blank"><BsGithub size="2.4rem"/></a>
            <div className="container__decorative">
                <div className="decorative"></div>
            </div>
        </div>
    );
}

export { SocialIcons };