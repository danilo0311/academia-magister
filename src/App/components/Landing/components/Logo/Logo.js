import React from "react";
import logo from './css/images/logo.png';

class Logo extends React.Component {

    render() {

        return (

            <section id="logo-section">
                <img id="logo" src={logo} alt='not found'></img>
                <section id="title-wrapper">
                    <h1 id="title">Magister</h1>
                </section>
            </section>

        );

    }

}

export default Logo;