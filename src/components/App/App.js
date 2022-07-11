import React from "react";
import './css/app.css';
import logo from './css/images/logo.png';

class App extends React.Component {

    render() {
        return (
            <div id="app" >

                <section id="logo-section">
                    <img id="logo" src={logo}></img>
                    <section id="title-wrapper">
                        <h1 id="title">Magister</h1>
                    </section>
                </section>

                <section id="article-container">
                    <article id="article-title">¡Comencemos con tu matrícula!</article>
                    <div id="article">
                        Para comenzar a especializarte,
                        vamos a realizar unas preguntas para darte el mejor servicio
                    </div>
                </section>

                <section id="buttons-container">
                    <button id="button-start" className="standard-buttons">Comenzar</button>
                    <button id="go-back-button" className="standard-buttons">Volver atrás</button>
                </section>

            </div>
        );
    }

}

export default App;