import EnrollmentProgressBar from "../../../../Landing/components/EnrollmentProgressBar/EnrollmentProgressBar";
import AboutUs from "./AboutUs";
import PreferedaymentMethod from "./PreferedPaymentMethod";
import Specialization from '../../Specialization/Specialization';
import Schedule from "../../Schedule/Schedule";
import Pricing from "../../Pricing/Pricing";
import StudentProfile from "../../StudentProfile/StudentProfile";
import Address from "../../Address/Address";
import Requests from "../../../Requests";

function NextStepButton() {

    return (

        <section className="standard-flex-wrapper standard-absolute-wrapper">

            <div className="standard-flex-colum-wrapper">
                <button id="payment-method-next-button" className="next-button" onClick={markAsCompleted}>Enviar</button>
                <button className="standard-buttons go-back-button" onClick={goBack}>Volver atrás</button>
            </div>

        </section>

    );

}

function checkEmptyFields() {

    let status = true;

    const paymentMethod = new PreferedaymentMethod();
    const aboutUs = new AboutUs();

    const fields = [paymentMethod.getPaymentMethod(), aboutUs.getAboutUs()];

    if (!fields.includes('default')) {

        status = false;

    }

    return status;

}

function markAsCompleted() {

    const specialization = new Specialization();
    const schedule = new Schedule();
    const pricing = new Pricing();
    const student = new StudentProfile();
    const address = new Address();
    const paymentMethod = new PreferedaymentMethod();
    const aboutUs = new AboutUs();

    const request = new Requests();

    let subscription = {

        'especializacion': specialization.getSpecialization(),
        'horario_y_modalidad': schedule.getSchedule(),
        'tarifa': pricing.getRate(),
        'datos_personales': student.getProfile(),
        'direccion': address.getAddress(),
        'forma_de_pago': {
            'metodo_de_pago': paymentMethod.getPaymentMethod(),
            'viene_recomendado': aboutUs.getAboutUs()
        }

    }

    if (!checkEmptyFields()) {

        request.createSubscription(subscription, (result) => {

            console.log(result);

        });

    }

}

function goBack() {

    const enrollmentProgressBar = new EnrollmentProgressBar();

    const paymentMethodContainer = document.getElementById('payment-method-container');
    const addressContainer = document.getElementById('address-container');

    paymentMethodContainer.style.display = 'none';
    addressContainer.style.display = 'initial';

    enrollmentProgressBar.hintHandler('hide', 'payment-method');
    enrollmentProgressBar.hintHandler('show', 'address');

}

export default NextStepButton;