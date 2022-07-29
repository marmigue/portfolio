import React from "react";
import './about.css';
import ME from '../assets/me-about.jpeg';
import { RiLightbulbFill } from 'react-icons/ri';
import { GiEmptyHourglass } from 'react-icons/gi'

function About(){
    return(
        <section id="about">
            <h3 className="information">Más Información</h3>
            <div className="about__container">
                <div className="about__me">
                    <img src={ME} alt="Imagen de referencia" className="me__secundary" />
                </div>
                <div className="about__content">
                    <div className="qualities">
                        <h3>Mis Cualidades:</h3>
                        <div className="card__container">
                            <div className="about__card">
                                <div className="icon__part">
                                    <RiLightbulbFill size="2.2rem"/>
                                </div>
                                <div className="text__part">
                                    <p>Autodidacta</p>
                                    <p>Creativo</p>
                                </div>
                            </div>
                            <div className="about__card">
                                <div className="icon__part">
                                    <GiEmptyHourglass size="2.2rem"/>
                                </div>
                                <div className="text__part">
                                    <p>Organizado</p>
                                    <p>Hábil en trabajos de equipo</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text__about">
                        <h3>Una breve descripción sobre mí:</h3>
                        <p>Soy un desarrollador Frontend de 25 años, viviendo en luque, con un gran deseo de aplicar y ampliar mis habilidades en nuevos y desafiantes proyectos. Cuento con conocimientos en frameworks de JavaScript, tales como React y Angular.</p>
                    </div>
                    <div className="button__about">
                        <a 
                            href="#contact"
                            className="btn btn-secundary"
                        >Escríbeme</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export { About };