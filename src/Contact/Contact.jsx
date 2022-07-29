import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import './contact.css';
import { Title } from '../Knowledges/Title/Title';

function Contact(){
    
    const [ valueName, setValueName ] = React.useState( '' );
    const [ valueEmail, setValueEmail ] = React.useState( '' );
    const [ valueText, setValueText ] = React.useState( '' );
    const [ sended, setSended ] = React.useState( false );

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        setSended( true );
        emailjs.sendForm('service_zyonljy', 'template_8pmf8fm', form.current, 'AmkaBd89GXMFg0Wtt')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    const resetValue = ()=>{
        setSended( false );
        setValueName( '' );
        setValueEmail( '' );
        setValueText( '' );
    }

    const onWriteName = ( value )=>{
        setValueName( value );
    }

    const onWriteEmail = ( value )=>{
        setValueEmail( value );
    }

    const onWriteText = ( value )=>{
        setValueText( value );
    }

    if( sended === false ){
        return(
            <section id="contact">
                <Title title="Completa el formulario para contactarme"/>
                <div className="container__contact">
                    <form ref={form} onSubmit={ sendEmail } className="form__container">
                        <label htmlFor="text">Ingrese su nombre</label>
                        <input 
                            type="text" 
                            value={valueName} onChange={ (event) => { onWriteName( event.target.value ) } } 
                            name="name" className="input" 
                            required
                        />
                        <label htmlFor="email">Ingrese su email</label>
                        <input 
                            type="email" 
                            value={valueEmail} 
                            onChange={ (event) => { onWriteEmail( event.target.value ) } }
                            name="user__email" className="input" 
                            required
                        />
                        <label>Escriba el Mensaje</label>
                        <textarea 
                            name="message" 
                            value={valueText}
                            onChange={ (event)=>{ onWriteText( event.target.value ) } }
                            colums="20" rows="4" 
                            className="input" required>
                        </textarea>
                        <input className="btn btn-secundary" type="submit" value="Enviar" />
                    </form>
                </div>
            </section>
        );
    }else{
        return(
            <section>
                <Title title="Gracias por completar el Formulario"/>
                <div className="container__sended">
                    <h2>Su mensaje fue enviado y será respondido en la brevedad</h2>
                    <button className="btn btn-secundary" onClick={ resetValue }>Nuevo mensaje</button>
                </div>
            </section>
        )
    }
}

export { Contact };