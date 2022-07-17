function NextStepButton() {

    return (

        <section className="standard-flex-wrapper standard-absolute-wrapper">

            <button id="address-next-button" className="next-button" onClick={markAsCompleted}>Siguiente</button>

        </section>

    );

}


function markAsCompleted() {

    const paymentMethodContainer = document.getElementById('payment-method-container');
    const addressContainer = document.getElementById('address-container');

    addressContainer.style.display = 'none';
    paymentMethodContainer.style.display = 'initial';


}

export default NextStepButton;