import React from 'react'
import './footer.css';
import { BsGithub } from 'react-icons/bs';

function Footer(){
    return(
        <footer className='footer__container'>
            <ul className='list__container'>
                <li><a href="#main">Inicio</a></li>
                <li><a href="#about">Más Información</a></li>
                <li><a href="#knowledges">Cursos</a></li>
                <li><a href="#contact">Contáctame</a></li>
            </ul>
            <p>Creado por:</p>
            <p>Marmigue96@gmail.com</p>
            <p>Visita el código en mi perfil de github:</p>
            <p><a href="https://github.com/marmigue/portfolio" rel="noreferrer" target="_blank"><BsGithub size="3rem"/></a></p>
        </footer>
    );
}

export { Footer };
