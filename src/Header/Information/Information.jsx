import React from "react";
import { Contact } from './Contact';
import ME from '../../assets/me.png';

function Information( { setStateActive } ){
    return(
        <div className="container">
            <div className="item-1">
                <h3>Mi nombre es:</h3>
            </div>
            <div className="item-2">
                <h1>Marcelo Colmánasdfasdf</h1>
            </div>
            <div className="item-3">
                <h2>Frontend Developer</h2>
            </div>
            <div className="item-4">
                <Contact setStateActive={ setStateActive }/>
            </div>
            <div className="item-5">
                <img src={ME} alt="Frontend Developer" className="me" />
            </div>
        </div>
    );
}

export { Information };