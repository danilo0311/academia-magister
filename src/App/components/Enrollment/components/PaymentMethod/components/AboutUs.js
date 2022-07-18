import React from "react";

class AboutUs extends React.Component {

    render() {

        return (

            <div className="standard-flex-wrapper">

                <section id="select-payment-method-container" className="payment-method-components">

                    <label className="standard-label">¿Vienes recomendado por alguien?</label>

                    <input id="about-us" className="hidden-element" type="text"></input>

                    <div className="standard-flex-wrapper payment-method-button-wrapper">

                        <button id="recommended-student-button" className="standard-button about-us" onClick={selectOption}>No</button>
                        <button id="not-recommended-student-button" className="standard-button about-us" onClick={selectOption}>Sí</button>

                    </div>

                    <label id="warn-empty-about-us" className="standard-label-warn-empty-field">* Por favor indicanos cómo escuchaste acerca de nosotros</label>
                    <li className="payment-method-information-link">Ver información legal →</li>

                </section>

            </div>

        );

    }

    getAboutUs = () => {

        return getSelectedOption();

    }

}

function warnEmptyField(status) {

    const warningMessage = document.getElementById('warn-empty-about-us');

    status == true
        ? warningMessage.style.display = 'initial'
        : warningMessage.style.display = 'none';

}

function checkEmptyField() {

    let status = true;
    const howYouHeardAboutUs = document.getElementById('about-us');

    if (howYouHeardAboutUs.textContent !== '') {

        status = false;

    }

    warnEmptyField(status);

    return status;

}

function setVisualHintToSelectedModality(selectedOption) {

    const optionsAvailable = document.getElementsByClassName('about-us');

    for (let index = 0; index < optionsAvailable.length; index++) {

        if (optionsAvailable[index].textContent !== selectedOption) {

            optionsAvailable[index].style.backgroundColor = '';

        }

    }

}

function selectOption(event) {

    let method = event.target;
    const selectedMethod = document.getElementById('about-us');

    method.style.backgroundColor = 'rgba(151, 167, 191, 0.57)';
    selectedMethod.textContent = method.textContent;

    setVisualHintToSelectedModality(selectedMethod.textContent);

}

function getSelectedOption() {

    let status = 'default';
    const selectedOption = document.getElementById('about-us');

    if (!checkEmptyField()) {

        status = selectedOption.textContent;

    }

    return status;

}

export default AboutUs;