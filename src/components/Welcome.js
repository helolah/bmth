import React from 'react';

//estilos
import "../styles/Welcome.css";

//imgs
import Logo from '../images/mantra_logo_white.png';
import Scroll from '../images/scroll_down_icon.png';

export default class List extends React.Component {
    render() {
        return (
            <div className="Welcome">
                <h1 className="Title">BRING ME THE HORIZON</h1>
                <img src={ Logo } alt="Logo Mantra" className="Logo_Mantra"></img>
                <br></br>
                <img src={ Scroll } alt="Scroll Down Icon" className="Scroll_Down_Icon"></img>
            </div>
        );
    }
}