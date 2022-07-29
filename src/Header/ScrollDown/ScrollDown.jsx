import React from "react";
import '../header.css';

function ScrollDown(){
    return(
        <div className="scroll__header">
            <div className="scroll__item">
                <h3>
                    <a 
                        href="#contact"
                    ><h4>Scroll Down</h4></a>
                </h3>
            </div>
        </div>
    );
}

export { ScrollDown };