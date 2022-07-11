import React from "react";
import './css/landing.css';
import logo from './css/images/logo.png';

class Landing extends React.Component {

    render() {
        return (
            <div id="landing" >
                <section id="landing-logo-section">
                    <img id="landing-logo" src={logo}></img>
                    <section id="landing-title-wrapper">
                        <h1 id="landing-title">Magister</h1>
                    </section>
                </section>
                <section id="landing-article">
                    <legend id="landing-title-article">¡Comencemos con tu matrícula!</legend>
                </section>
            </div>
        );
    }

}

export default Landing;