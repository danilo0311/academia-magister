import React from "react";

import './css/enrollment.css';

import Specialization from "./components/Specialization/Specialization";
import Schedule from "./components/Schedule/Schedule";
import Pricing from "./components/Pricing/Pricing";
import StudentProfile from "./components/StudentProfile/StudentProfile";
import Address from "./components/Address/Address";
import PaymentMethod from "./components/PaymentMethod/PaymentMethod";

class Enrollment extends React.Component {

    render() {
        return (

            <div id="enrollment-container">

                <Specialization></Specialization>
                <Schedule></Schedule>
                <Pricing></Pricing>
                <StudentProfile></StudentProfile>
                <Address></Address>
                <PaymentMethod></PaymentMethod>
                
            </div>

        );
    }

    showComponent = () => {

        setVisibility('70%');

    }

    hideComponent = () => {

        setVisibility('0%');

    }

}

function setVisibility(width) {

    const enrollmentContainer = document.getElementById('enrollment-container');

    enrollmentContainer.style.width = width;

}


export default Enrollment;