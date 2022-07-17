import EnrollmentProgressBar from "../../../../Landing/components/EnrollmentProgressBar/EnrollmentProgressBar";
import StudentAddress from "./StudentAddress";
import Location from "./Location";
import Province from "./Province";
import PostalCode from "./PostalCode";
import Consentment from "./Consentment";

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

function checkEmptyFields(){

    const studentAddress =  new StudentAddress();
    const location = new Location();
    const province = new Province();
    const postalCode = new PostalCode();
    const consentments = new Consentment();

    console.log(studentAddress.getAddress());
    console.log(location.getLocation());
    console.log(province.getProvince());
    console.log(postalCode.getPostalCode());
    console.log(consentments.getConsentments());

}

function markAsCompleted() {

    checkEmptyFields();
    const enrollmentProgressBar = new EnrollmentProgressBar();

    const paymentMethodContainer = document.getElementById('payment-method-container');
    const addressContainer = document.getElementById('address-container');

    addressContainer.style.display = 'none';
    paymentMethodContainer.style.display = 'initial';

    
    enrollmentProgressBar.hintHandler('hide', 'address');
    enrollmentProgressBar.hintHandler('show', 'payment-method');

}

function goBack() {

    const enrollmentProgressBar = new EnrollmentProgressBar();

    const studentProfileContainer = document.getElementById('student-profile-container');
    const addressContainer = document.getElementById('address-container');

    addressContainer.style.display = 'none';
    studentProfileContainer.style.display = 'initial';

    enrollmentProgressBar.hintHandler('hide', 'address');
    enrollmentProgressBar.hintHandler('show', 'student-profile');

}

export default NextStepButton;