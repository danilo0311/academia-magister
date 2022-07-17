function NextStepButton() {

    return (

        <section className="standard-flex-wrapper standard-absolute-wrapper">

            <button id="pricing-next-button" className="next-button" onClick={markAsCompleted}>Siguiente</button>

        </section>

    );

}

function markAsCompleted() {

    const studentProfileContainer = document.getElementById('student-profile-container');
    const pricingContainer = document.getElementById('pricing-container');

    pricingContainer.style.display = 'none';
    studentProfileContainer.style.display = 'initial';

}

export default NextStepButton;