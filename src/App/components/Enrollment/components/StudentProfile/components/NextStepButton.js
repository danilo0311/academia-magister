function NextStepButton() {

    return (

        <section className="standard-flex-wrapper standard-absolute-wrapper">

            <div className="standard-flex-colum-wrapper">

                <button id="student-profile-next-button" className="next-button" onClick={markAsCompleted}>Siguiente</button>
                <button className="standard-buttons go-back-button" onClick={goBack}>Volver atrás</button>

            </div>

        </section>

    );

}


function markAsCompleted() {

    const studentProfileContainer = document.getElementById('student-profile-container');
    const addressContainer = document.getElementById('address-container');

    studentProfileContainer.style.display = 'none';
    addressContainer.style.display = 'initial';


}

function goBack() {

    const studentProfileContainer = document.getElementById('student-profile-container');
    const pricingContainer = document.getElementById('pricing-container');

    studentProfileContainer.style.display = 'none';
    pricingContainer.style.display = 'initial';

}

export default NextStepButton;