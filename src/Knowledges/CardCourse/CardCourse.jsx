import React from "react";
import './cardCourse.css';
import { Modal } from '../../Modal/Modal';
import { AiFillCloseCircle } from 'react-icons/ai';
import { BsArrowLeftCircleFill } from 'react-icons/bs';
import { BsArrowRightCircleFill } from 'react-icons/bs';

function CardCourse( 
    { 
        image,
        openModal,
        setOpenModal,
        openImage,
        setOpenImage,
        controlerModal,
    } ){

    const onClickModal = ()=>{
        setOpenModal( true );
        setOpenImage( controlerModal );
    }

    const closeModal = ()=>{
        setOpenModal( false );
        setOpenImage( 0 );
    }

    const previoustCard = ()=>{
        setOpenImage( --controlerModal );
    }

    const nextCard = ()=>{
        setOpenImage( ++controlerModal );
    }

    return(
        <div className="card">
            <img 
                src={image} alt="Prueba" 
                className="image" 
                onClick={ onClickModal }
            />
            { ( !!openModal && (openImage === controlerModal) ) && (
                <Modal>
                    <div className="modal__background">
                        { 
                            (controlerModal > 1) 
                            ? 
                                (
                                    <BsArrowLeftCircleFill 
                                        size="3rem" 
                                        onClick={ previoustCard } 
                                        className="change__image"
                                    />
                                ) 
                            : <div className="withOutButton"></div>
                        }
                        <div className="modal__container">
                            <img src={ image } alt="imageModal" className="image__modal"/>
                            <AiFillCloseCircle className="icon" size="3rem" onClick={ closeModal }/>
                        </div>
                        { 
                            (controlerModal < 16) //agregar un numero mayor cuando se agrega una card nueva
                            ? 
                                (
                                    <BsArrowRightCircleFill 
                                        size="3rem" 
                                        onClick={ nextCard }
                                        className="change__image"
                                    />
                                ) 
                            : <div className="withOutButton"></div> 
                        }
                    </div>
                </Modal>
            ) }
        </div>
    );
}

export {CardCourse};