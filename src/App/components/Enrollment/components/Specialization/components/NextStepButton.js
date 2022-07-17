import Fields from "./Fields";
import Provinces from "./Provinces";
import StudentCategory from "./StudentCategory";

function NextStepButton() {

    return (

        <section className="standard-flex-wrapper standard-absolute-wrapper">

            <button id="specialization-next-button" className="next-button" onClick={markAsCompleted}>Siguiente</button>

        </section>

    );

}

function checkEmptyFields() {

    let status = false;

    const field = new Fields();
    const province = new Provinces();
    const studentCategory = new StudentCategory();

    const requiredFields = [field.getField(), province.getProvince(), studentCategory.getCategory()];

    if (!requiredFields.includes('default')) {

        console.log(requiredFields);
        status = false;

    }

    return status;

}

function markAsCompleted() {

    const specializationContainer = document.getElementById('specialization-container');
    const scheduleContainer = document.getElementById('schedule-container');

    if (!checkEmptyFields()) {

        specializationContainer.style.display = 'none';
        scheduleContainer.style.display = 'flex';

    }

}

export default NextStepButton;