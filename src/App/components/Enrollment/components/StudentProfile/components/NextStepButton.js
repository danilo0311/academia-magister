import EnrollmentProgressBar from "../../../../Landing/components/EnrollmentProgressBar/EnrollmentProgressBar";

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

    const enrollmentProgressBar = new EnrollmentProgressBar();

    const studentProfileContainer = document.getElementById('student-profile-container');
    const addressContainer = document.getElementById('address-container');

    studentProfileContainer.style.display = 'none';
    addressContainer.style.display = 'initial';

    enrollmentProgressBar.hintHandler('hide', 'student-profile');
    enrollmentProgressBar.hintHandler('show', 'address');


}

function goBack() {

    const enrollmentProgressBar = new EnrollmentProgressBar();

    const studentProfileContainer = document.getElementById('student-profile-container');
    const pricingContainer = document.getElementById('pricing-container');

    studentProfileContainer.style.display = 'none';
    pricingContainer.style.display = 'initial';

    enrollmentProgressBar.hintHandler('hide', 'student-profile');
    enrollmentProgressBar.hintHandler('show', 'pricing');

}

export default NextStepButton;