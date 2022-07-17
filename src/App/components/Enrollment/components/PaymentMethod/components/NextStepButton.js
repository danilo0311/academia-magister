import EnrollmentProgressBar from "../../../../Landing/components/EnrollmentProgressBar/EnrollmentProgressBar";

function NextStepButton() {

    return (

        <section className="standard-flex-wrapper standard-absolute-wrapper">

            <div className="standard-flex-colum-wrapper">
                <button id="payment-method-next-button" className="next-button" onClick={markAsCompleted}>Enviar</button>
                <button className="standard-buttons go-back-button" onClick={goBack}>Volver atrás</button>
            </div>

        </section>

    );

}


function markAsCompleted() {

    const paymentMethodContainer = document.getElementById('payment-method-container');


}

function goBack() {

    const enrollmentProgressBar = new EnrollmentProgressBar();

    const paymentMethodContainer = document.getElementById('payment-method-container');
    const addressContainer = document.getElementById('address-container');

    paymentMethodContainer.style.display = 'none';
    addressContainer.style.display = 'initial';

    enrollmentProgressBar.hintHandler('hide', 'payment-method');
    enrollmentProgressBar.hintHandler('show', 'address');

}

export default NextStepButton;