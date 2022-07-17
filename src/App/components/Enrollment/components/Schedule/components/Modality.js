import React from "react";
import Requests from "../../../Requests.js";

class Modality extends React.Component {

    render() {

        return (

            <div className="standard-flex-wrapper">

                <div id="modality-container" className="schedule-wrapper">

                    <label className="standard-label">Modalidad</label>
                    <label className="user-hint">(Selecciona una opción)</label>
                    <input id="selected-modality" className="hidden-element" type="text"></input>
                    <section id="modalities-wrapper" className="modality-option-container"></section>
                    <label id="warn-empty-modality" className="standard-label-warn-empty-field">* Debes seleccionar una modalidad</label>

                </div>

            </div>

        );

    }

    getModality = () => {

        return checkEmptyFields();

    }

}

function createModality() {

    const request = new Requests();

    const modalityOptionContainer = document.getElementById('modalities-wrapper');

    request.getModalities((modalities) => {

        for (let index = 0; index < modalities.length; index++) {

            const modality = document.createElement('button');

            modality.setAttribute('class', 'standard-button modality-buttons');
            modality.setAttribute('value', 'default');

            modality.textContent = modalities[index].modalidad;
            modality.addEventListener('click', (event) => { selectModality(event) });

            modalityOptionContainer.append(modality);

        }

    });

}

setTimeout(() => {

    createModality();

}, 200);

function setVisualHintToSelectedModality(selectedModality) {

    const modality = document.getElementsByClassName('modality-buttons');

    for (let index = 0; index < modality.length; index++) {

        if (modality[index].textContent !== selectedModality) {

            modality[index].setAttribute('value', 'default');
            modality[index].style.backgroundColor = '';

        }

    }

}

function selectModality(event) {

    let modality = event.target;
    const selectedModality = document.getElementById('selected-modality');

    modality.value = 'selected'
    modality.style.backgroundColor = 'rgba(151, 167, 191, 0.57)';
    selectedModality.textContent = modality.textContent;

    setVisualHintToSelectedModality(selectedModality.textContent);
    checkEmptyFields();

}

function checkEmptyFields() {

    const selectedModality = document.getElementById('selected-modality');

    if (selectedModality.textContent !== '') {

        return selectedModality.textContent;

    }

    return 'default';

}

export default Modality;