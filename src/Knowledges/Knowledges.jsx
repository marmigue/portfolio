import React from "react";
import './knowledges.css';
import { Title } from "./Title/Title";
import { CardCourse } from "./CardCourse/CardCourse";
import BD from "../assets/cursos/diploma-bd.jpg";
import ES6 from "../assets/cursos/diploma-ecmascript-6.jpg";
import GIT from "../assets/cursos/diploma-git-github.jpg";
import ASINC from "../assets/cursos/diploma-asincronismo-js-2019.jpg";
import HTML_CSS from "../assets/cursos/diploma-html-css.jpg";
import V8 from "../assets/cursos/diploma-javascript-navegador.jpg";
import SCOPE from "../assets/cursos/diploma-scope.jpg";
import OOP from "../assets/cursos/diploma-oop.jpg";
import FRAME from "../assets/cursos/diploma-frameworks-javascript.jpg";
import REACTPROF from "../assets/cursos/diploma-react-estado.jpg";
import FRONT from "../assets/cursos/diploma-frontend-developer.jpg";
import JAVAPRACT from "../assets/cursos/diploma-javascript-practico-2021.jpg";
import NPM from "../assets/cursos/diploma-npm.jpg";
import DOM from "../assets/cursos/diploma-dom.jpg";
import REACTINTRO from "../assets/cursos/diploma-react.jpg";
import REACTPATR from "../assets/cursos/diploma-react-patrones-render.jpg";
import TYPESCRIPT from "../assets/cursos/diploma-typescript.jpg";
import ANGULAR from "../assets/cursos/diploma-angular.jpg";


function Knowledges(){
    const [ openModal, setOpenModal ] = React.useState( false );
    const [ openImage, setOpenImage ] = React.useState( 0 );
    return(
        <section id="knowledges">
            <Title title="Cursos Realizados:"/>
            <div className="image__container">
                <CardCourse 
                    image={ HTML_CSS }
                    openModal={ openModal } 
                    setOpenModal={setOpenModal} 
                    openImage={ openImage }
                    setOpenImage={ setOpenImage }
                    controlerModal={ 1 }
                />
                <CardCourse 
                    image={ GIT }
                    openModal={ openModal } 
                    setOpenModal={setOpenModal} 
                    openImage={ openImage }
                    setOpenImage={ setOpenImage }
                    controlerModal={ 2 }
                />
                <CardCourse 
                    image={ FRONT }
                    openModal={ openModal } 
                    setOpenModal={setOpenModal} 
                    openImage={ openImage }
                    setOpenImage={ setOpenImage }
                    controlerModal={ 3 }
                />
                <CardCourse 
                    image={ JAVAPRACT }
                    openModal={ openModal } 
                    setOpenModal={setOpenModal} 
                    openImage={ openImage }
                    setOpenImage={ setOpenImage }
                    controlerModal={ 4 }
                />
                <CardCourse 
                    image={ BD } 
                    openModal={ openModal } 
                    setOpenModal={ setOpenModal } 
                    openImage={ openImage }
                    setOpenImage={ setOpenImage }
                    controlerModal={ 5 }
                />
                <CardCourse
                    image={ ASINC }
                    openModal={ openModal } 
                    setOpenModal={setOpenModal} 
                    openImage={ openImage }
                    setOpenImage={ setOpenImage }
                    controlerModal={ 6 }
                />
                <CardCourse 
                    image={ V8 }
                    openModal={ openModal } 
                    setOpenModal={setOpenModal} 
                    openImage={ openImage }
                    setOpenImage={ setOpenImage }
                    controlerModal={ 7 }
                />
                <CardCourse
                    image={ ES6 }
                    openModal={ openModal } 
                    setOpenModal={setOpenModal} 
                    openImage={ openImage }
                    setOpenImage={ setOpenImage }
                    controlerModal={ 8 }
                />
                <CardCourse
                    image={ NPM }
                    openModal={ openModal } 
                    setOpenModal={setOpenModal} 
                    openImage={ openImage }
                    setOpenImage={ setOpenImage }
                    controlerModal={ 9 }
                />
                <CardCourse
                    image={ SCOPE }
                    openModal={ openModal } 
                    setOpenModal={setOpenModal} 
                    openImage={ openImage }
                    setOpenImage={ setOpenImage }
                    controlerModal={ 10 }
                />
                <CardCourse
                    image={ DOM }
                    openModal={ openModal } 
                    setOpenModal={setOpenModal} 
                    openImage={ openImage }
                    setOpenImage={ setOpenImage }
                    controlerModal={ 11 }
                />
                <CardCourse 
                    image={ FRAME }
                    openModal={ openModal } 
                    setOpenModal={setOpenModal} 
                    openImage={ openImage }
                    setOpenImage={ setOpenImage }
                    controlerModal={ 12 }
                />
                <CardCourse
                    image={ REACTINTRO }
                    openModal={ openModal } 
                    setOpenModal={setOpenModal} 
                    openImage={ openImage }
                    setOpenImage={ setOpenImage }
                    controlerModal={ 13 }
                />
                <CardCourse 
                    image={ REACTPATR }
                    openModal={ openModal } 
                    setOpenModal={setOpenModal} 
                    openImage={ openImage }
                    setOpenImage={ setOpenImage }
                    controlerModal={ 14 }
                />
                <CardCourse
                    image={ OOP }
                    openModal={ openModal } 
                    setOpenModal={setOpenModal} 
                    openImage={ openImage }
                    setOpenImage={ setOpenImage }
                    controlerModal={ 15 }
                />
                <CardCourse 
                    image={ REACTPROF }
                    openModal={ openModal } 
                    setOpenModal={setOpenModal} 
                    openImage={ openImage }
                    setOpenImage={ setOpenImage }
                    controlerModal={ 16 }
                />
                <CardCourse 
                    image={ TYPESCRIPT }
                    openModal={ openModal } 
                    setOpenModal={setOpenModal} 
                    openImage={ openImage }
                    setOpenImage={ setOpenImage }
                    controlerModal={ 17 }
                />
                <CardCourse 
                    image={ ANGULAR }
                    openModal={ openModal } 
                    setOpenModal={setOpenModal} 
                    openImage={ openImage }
                    setOpenImage={ setOpenImage }
                    controlerModal={ 18 }
                />
            </div>
        </section>
    );
}

export {Knowledges};