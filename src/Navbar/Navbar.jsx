import React from "react";
import './navbar.css';
import { AiOutlineHome } from 'react-icons/ai';
import { BiUser } from 'react-icons/bi';
import { GiDiploma } from 'react-icons/gi';
import { MdOutlineContactMail } from 'react-icons/md';

function Navbar( { stateActive } ){
    return(
        <nav className="navbar">
            <a 
                href="#main" 
                className={ stateActive === '#main' ? 'active' : '' }
            ><AiOutlineHome/></a>

            <a 
                href="#about"
                className = { stateActive === '#about' ? 'active' : '' }
            ><BiUser/></a>
            <a 
                href="#knowledges"
                className = { stateActive === '#knowledges' ? 'active' : '' }
            ><GiDiploma/></a>
            <a 
                href="#contact"
                className = { stateActive === '#contact' ? 'active' : '' }
            ><MdOutlineContactMail/></a>
        </nav>
    );
}

export { Navbar };