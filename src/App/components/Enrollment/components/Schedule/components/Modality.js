import React from "react";
import Requests from "../../../Requests.js";

class Modality extends React.Component {

    render() {

        return (

            <div className="standard-flex-wrapper">

                <div id="modality-container" className="schedule-wrapper">

                    <label className="standard-label">Modalidad</label>
                    <label className="user-hint">(Selecciona una opción)</label>
                    <section id="modalities-wrapper" className="modality-option-container"></section>

                </div>

            </div>

        );

    }

}

function createModality() {

    const request = new Requests();

    const modalityOptionContainer = document.getElementById('modalities-wrapper');

    request.getModalities((modalities) => {

        for (let index = 0; index < modalities.length; index++) {

            const modality = document.createElement('button');

            modality.setAttribute('class', 'standard-button modality-buttons');
            modality.textContent = modalities[index].modalidad;
            modalityOptionContainer.append(modality);

        }

    });

}

setTimeout(() => {

    createModality();

}, 200);

export default Modality;