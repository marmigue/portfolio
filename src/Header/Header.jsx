import React from "react";
import './header.css';
import {Information} from './Information/Information';
import { SocialIcons } from './SocialIcons/SocialIcons';
import { ScrollDown } from './ScrollDown/ScrollDown';

function Header( { setStateActive } ){
    return(
        <React.Fragment>
            <div id="main" className="header__container">
                <SocialIcons/>
                <Information/>
                <ScrollDown/>
            </div>
        </React.Fragment>
    );
}

export { Header };