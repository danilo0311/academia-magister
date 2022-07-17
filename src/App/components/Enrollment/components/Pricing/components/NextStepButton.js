function NextStepButton() {

    return (

        <section className="standard-flex-wrapper standard-absolute-wrapper">

            <div className="standard-flex-colum-wrapper">

                <button id="pricing-next-button" className="next-button" onClick={markAsCompleted}>Siguiente</button>
                <button id="pricing-go-back-button" className="standard-buttons go-back-button" onClick={goBack}>Volver atrás</button>

            </div>

        </section>

    );

}

function markAsCompleted() {

    const studentProfileContainer = document.getElementById('student-profile-container');
    const pricingContainer = document.getElementById('pricing-container');

    pricingContainer.style.display = 'none';
    studentProfileContainer.style.display = 'initial';

}

function goBack() {

    const pricingContainer = document.getElementById('pricing-container');
    const scheduleContainer = document.getElementById('schedule-container');

    pricingContainer.style.display = 'none';
    scheduleContainer.style.display = 'initial';

}

export default NextStepButton;