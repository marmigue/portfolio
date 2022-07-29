import React from "react";
import ME from '../assets/me.png';

function Image(){
    return(
        <div className="me" >
            <img src={ ME } alt=""/>
        </div>
    );
}

export { Image };