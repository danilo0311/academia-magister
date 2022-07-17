import Fields from "./Fields.js";
import Provinces from "./Provinces";
import StudentCategory from "./StudentCategory";
import EnrollmentProgressBar from "../../../../Landing/components/EnrollmentProgressBar/EnrollmentProgressBar";

function NextStepButton() {

    return (

        <section className="standard-flex-wrapper standard-absolute-wrapper">

            <button id="specialization-next-button" className="next-button" onClick={markAsCompleted}>Siguiente</button>

        </section>

    );

}

function checkEmptyFields() {

    let status = true;

    const field = new Fields();
    const province = new Provinces();
    const studentCategory = new StudentCategory();

    const requiredFields = [field.getField(), province.getProvince(), studentCategory.getCategory()];

    if (!requiredFields.includes('default')) {

        status = false;

    }

    return status;

}

function markAsCompleted() {

    const enrollmentProgressBar = new EnrollmentProgressBar();

    const specializationContainer = document.getElementById('specialization-container');
    const scheduleContainer = document.getElementById('schedule-container');


    if (!checkEmptyFields()) {

        enrollmentProgressBar.hintHandler('hide', 'specialization');
        enrollmentProgressBar.hintHandler('show', 'schedule');
        specializationContainer.style.display = 'none';
        scheduleContainer.style.display = 'flex';

    }

}

export default NextStepButton;