function NextStepButton() {

    return (

        <section className="standard-flex-wrapper standard-absolute-wrapper">

            <div className="standard-flex-colum-wrapper">

                <button id="address-next-button" className="next-button" onClick={markAsCompleted}>Siguiente</button>
                <button className="standard-buttons go-back-button" onClick={goBack}>Volver atrás</button>

            </div>

        </section>

    );

}


function markAsCompleted() {

    const paymentMethodContainer = document.getElementById('payment-method-container');
    const addressContainer = document.getElementById('address-container');

    addressContainer.style.display = 'none';
    paymentMethodContainer.style.display = 'initial';

}

function goBack() {

    const studentProfileContainer = document.getElementById('student-profile-container');
    const addressContainer = document.getElementById('address-container');

    addressContainer.style.display = 'none';
    studentProfileContainer.style.display = 'initial';

}

export default NextStepButton;