import React from "react";
import './title.css';

function Title({ title }){
    return(
        <h2 className="title">{ title }</h2>
    );
}

export { Title };