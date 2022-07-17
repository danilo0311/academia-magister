import EnrollmentProgressBar from "../../../../Landing/components/EnrollmentProgressBar/EnrollmentProgressBar";
import DNI from "./DNI";
import Email from "./Email";
import FullName from "./FullName";
import Mobile from "./Mobile";

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

function checkEmptyFields() {

    let status = true;

    const dni = new DNI();
    const email = new Email();
    const mobile = new Mobile();
    const fullName = new FullName();

    const fields = [fullName.getFullName(), dni.getDNI(), email.getEmail(), mobile.getMobile()]

    console.log(fields);

    if(!fields.includes('default')){

        status = false;

    }

    return status;

}

function markAsCompleted() {

    if(!checkEmptyFields()){

        const enrollmentProgressBar = new EnrollmentProgressBar();

        const studentProfileContainer = document.getElementById('student-profile-container');
        const addressContainer = document.getElementById('address-container');
    
        studentProfileContainer.style.display = 'none';
        addressContainer.style.display = 'initial';
    
        enrollmentProgressBar.hintHandler('hide', 'student-profile');
        enrollmentProgressBar.hintHandler('show', 'address');

    }

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