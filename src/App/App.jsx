import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { Header } from '../Header/Header';
import { About } from '../About/About';
import { Knowledges } from '../Knowledges/Knowledges';
import { Contact } from '../Contact/Contact';
import { Navbar } from '../Navbar/Navbar';
import { Footer } from '../Footer/Footer';

function App(){
    const [ stateActive, setStateActive ] = React.useState('#main');
    const element1 = useRef();
    const element2 = useRef();
    const element3 = useRef();
    const element4 = useRef();
    useEffect( ()=>{
        const observer = new window.IntersectionObserver( ( entries )=>{
            const { target } = entries[0];
            const { isIntersecting } = entries[0];
            if( isIntersecting ){
                setStateActive( `#${target.className}` );
            }
        }, { threshold : 0.3, rootMargin : '40% 0% 0% -40%' });
        
        observer.observe( element1.current );
        observer.observe( element2.current );
        observer.observe( element3.current );
        observer.observe( element4.current );
    }, [element1, element2, element3, element4] );

    return(
        <React.Fragment>
            <div className="main" ref={element1}>
                <Header setStateActive={ setStateActive }/>
            </div>
            <div className="about" ref={element2}>
                <About/>
            </div>
            <div className="knowledges" ref={element3}>
                <Knowledges/>
            </div>
            <div className="contact" ref={element4}>
                <Contact/>
            </div>
            <Footer/>
            <Navbar stateActive={ stateActive }/>
        </React.Fragment>
    )
}

export { App };