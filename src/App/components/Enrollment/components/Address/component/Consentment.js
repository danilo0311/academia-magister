import React from "react";

class Consentment extends React.Component {

    render() {

        return (

            <div id="consentment-wrapper" className="standard-flex-wrapper">

                <section id="consentment-component" className="address-components">

                    <div className="consentment-checkbox-wrapper">

                        <input id="legal-information-checkbox" className="consentment-checkboxs" type="checkbox" value="default"></input>
                        <p id="legal-information-title" className="consentment-title">Acepto la </p>
                        <label id="warn-empty-legal-information" className="standard-label-warn-empty-field">* Debes aceptar la información legal</label>

                    </div>

                    <div className="consentment-checkbox-wrapper">

                        <input id="data-protection-checkbox" className="consentment-checkboxs" type="checkbox" value="default"></input>
                        <p id="data-protection-title" className="consentment-title">Acepto la </p>
                        <label id="warn-empty-data-protection" className="standard-label-warn-empty-field">* Debes aceptar la protección de datos</label>

                    </div>

                </section>

            </div>

        );

    }

    getConsentments = ()  =>{

        return getStudentConsentments();

    }
}

function warnEmptyField(legal, data) {

    const legalInformation = document.getElementById('warn-empty-legal-information');
    const dataProtection = document.getElementById('warn-empty-data-protection');

    legal == true ? legalInformation.style.display = 'initial' : legalInformation.style.display = 'none';
    data == true ? dataProtection.style.display = 'initial' : dataProtection.style.display = 'none';

}

function checkEmptyFields() {

    let status = true;
    let legalInformationStatus = true;
    let dataProtectionStatus = true;

    const legalInformation = document.getElementById('legal-information-checkbox');
    const dataProtection = document.getElementById('data-protection-checkbox');

    if (legalInformation.checked && dataProtection.checked) {

        legalInformationStatus = false;
        dataProtectionStatus = false;

        status = false;

    }

    warnEmptyField(legalInformationStatus, dataProtectionStatus);

    return status;

}

function getStudentConsentments() {

    let consentments = 'default';

    if (!checkEmptyFields()) {

        consentments = 'agreed';

    }

    return consentments;

}


export default Consentment;