function NextStepButton() {

    return (

        <section className="standard-flex-wrapper standard-absolute-wrapper">

            <button id="payment-method-next-button" className="next-button" onClick={markAsCompleted}>Enviar</button>

        </section>

    );

}


function markAsCompleted() {

    const paymentMethodContainer = document.getElementById('payment-method-container');


}

export default NextStepButton;