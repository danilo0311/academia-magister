import React from "react";

class PreferedaymentMethod extends React.Component {

    render() {

        return (

            <div className="standard-flex-wrapper">

                <section id="select-payment-method-container" className="payment-method-components">

                    <label className="standard-label">¿Cómo prefieres abonar tu primer pago?</label>

                    <input id="student-payment-method" className="hidden-element" type="text"></input>

                    <div className="standard-flex-wrapper payment-method-button-wrapper">

                        <button className="standard-button payment-method-button" onClick={selectPaymentMethod}>Tarjeta de crédito o débito(recomendado)</button>
                        <button className="standard-button payment-method-button" onClick={selectPaymentMethod}>Transferencia bancaria</button>

                    </div>

                    <label id="warn-empty-payment-method" className="standard-label-warn-empty-field">* Debes seleccionar un método de pago</label>
                    <li className="payment-method-information-link">Detalles sobre forma de pago y proceso post pago →</li>

                </section>

            </div>

        );

    }

    getPaymentMethod = () => {

        return getSelectedPaymentMethod();

    }

}

function warnEmptyField(status) {

    const warningMessage = document.getElementById('warn-empty-payment-method');

    status == true
        ? warningMessage.style.display = 'initial'
        : warningMessage.style.display = 'none';

}

function checkEmptyField() {

    let status = true;
    const selectedPaymentMethod = document.getElementById('student-payment-method');

    if (selectedPaymentMethod.textContent !== '') {

        status = false;

    }

    warnEmptyField(status);

    return status;

}

function setVisualHintToSelectedModality(selectedPaymentMethod) {

    const paymentMethodButtons = document.getElementsByClassName('payment-method-button');

    for (let index = 0; index < paymentMethodButtons.length; index++) {

        if (paymentMethodButtons[index].textContent !== selectedPaymentMethod) {

            paymentMethodButtons[index].style.backgroundColor = '';

        }

    }

}

function selectPaymentMethod(event) {

    let method = event.target;
    const selectedMethod = document.getElementById('student-payment-method');

    method.style.backgroundColor = 'rgba(151, 167, 191, 0.57)';
    selectedMethod.textContent = method.textContent;

    setVisualHintToSelectedModality(selectedMethod.textContent);

}

function getSelectedPaymentMethod() {

    let status = 'default';
    const paymentMethod = document.getElementById('student-payment-method');

    if (!checkEmptyField()) {

        status = paymentMethod.textContent;

    }

    return status;

}

export default PreferedaymentMethod;