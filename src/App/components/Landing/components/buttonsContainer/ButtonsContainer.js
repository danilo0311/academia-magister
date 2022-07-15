import React from "react";
import Header from "../../../Header/Header";

class ButtonsContainer extends React.Component {

    render() {
        return (

            <section id="buttons-container" className="landing-component">
                <button id="button-start" className="standard-buttons" onClick={startEnrollmentProcess}>Comenzar</button>
                <button id="go-back-button" className="standard-buttons">Volver atrás</button>
            </section>

        );
    }

}

function startEnrollmentProcess() {

    const header = new Header();
    header.startEnrollmentProcess();

}

export default ButtonsContainer;