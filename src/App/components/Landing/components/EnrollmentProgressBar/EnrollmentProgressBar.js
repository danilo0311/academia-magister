import React from "react";
import Address from "./components/Address.js";
import PaymentMethod from "./components/PaymentMethod.js";
import Pricing from "./components/Pricing.js";
import Schedule from "./components/Schedule.js";

import Specialization from "./components/Specialization.js";
import StudentProfile from "./components/StudentProfile.js";

class EnrollmentProgressBar extends React.Component {

    render() {

        return (

            <div id="enrollment-progress-container">

                <section id="enrollment-progress">

                    <Specialization></Specialization>
                    <Schedule></Schedule>
                    <Pricing></Pricing>
                    <StudentProfile></StudentProfile>
                    <Address></Address>
                    <PaymentMethod></PaymentMethod>

                </section>

                <section id="enrollment-visuals"></section>

            </div>

        );

    }

    setVisible = () => {

        handleComponentVisibility('initial');

    }

    setDefault = () => {

        handleComponentVisibility('none');

    }

}

function handleComponentVisibility(display) {

    const enrollmentProcessTemplate = document.getElementById('enrollment-progress-container');
    enrollmentProcessTemplate.style.opacity = '100%';

    setTimeout(() => {
        enrollmentProcessTemplate.style.display = display;
    }, 100);


}

export default EnrollmentProgressBar;