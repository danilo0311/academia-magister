import EnrollmentProgressBar from "../../../../Landing/components/EnrollmentProgressBar/EnrollmentProgressBar";
import Modality from "./Modality";

function NextStepButton() {

    return (

        <section className="standard-flex-wrapper standard-absolute-wrapper">

            <div className="standard-flex-colum-wrapper">

                <button id="schedule-next-button" className="next-button" onClick={markAsCompleted}>Siguiente</button>
                <button id="schedule-go-back-button" className="standard-buttons go-back-button" onClick={goBack}>Volver atrás</button>

            </div>

        </section>

    );

}

function checkEmptyField() {

    let status = true;

    const modality = new Modality();

    if (modality.getModality() !== 'default') {

        status = false;

    }
    
    warnEmptyField(status);

    return status;

}

function warnEmptyField(status) {

    const warningMessage = document.getElementById('warn-empty-modality');

    status == true
        ? warningMessage.style.display = 'initial'
        : warningMessage.style.display = 'none';

}

function markAsCompleted() {

    if (!checkEmptyField()) {

        const enrollmentProgressBar = new EnrollmentProgressBar();

        const pricingtContainer = document.getElementById('pricing-container');
        const scheduleContainer = document.getElementById('schedule-container');

        scheduleContainer.style.display = 'none';
        pricingtContainer.style.display = 'initial';

        enrollmentProgressBar.hintHandler('hide', 'schedule');
        enrollmentProgressBar.hintHandler('show', 'pricing');

    }

}

function goBack() {

    const enrollmentProgressBar = new EnrollmentProgressBar();

    const scheduleContainer = document.getElementById('schedule-container');
    const specializationContainer = document.getElementById('specialization-container');

    scheduleContainer.style.display = 'none';
    specializationContainer.style.display = 'initial';

    enrollmentProgressBar.hintHandler('hide', 'schedule');
    enrollmentProgressBar.hintHandler('show', 'specialization');

}

export default NextStepButton;