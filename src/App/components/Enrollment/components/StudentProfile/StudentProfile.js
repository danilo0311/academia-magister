import React from "react";
import ComponentName from "./components/ComponentName";
import DNI from "./components/DNI";
import Email from "./components/Email";
import FullName from "./components/FullName";
import Mobile from "./components/Mobile";
import NextStepButton from "./components/NextStepButton";

import './css/student-profile.css';

class StudentProfile extends React.Component {

    render() {

        return (

            <div id="student-profile-container" className="enrollment-step">

                <ComponentName></ComponentName>

                <div id="student-profile-components-container">

                    <FullName></FullName>

                    <section id="student-profile-components-wrapper" className="standard-flex-wrapper">

                        <DNI></DNI>
                        <Mobile></Mobile>
                        <Email></Email>

                    </section>

                    <NextStepButton></NextStepButton>

                </div>

            </div>

        );

    }

    getProfile = () =>{

        return getStudentProfile();

    }

}

function getStudentProfile() {

    const fullName = new FullName();
    const dni = new DNI();
    const mobile = new Mobile();
    const email = new Email();

    const studentProfile = {

        'nombre_completo': fullName.getFullName(),
        'dni': dni.getDNI(),
        'movil': mobile.getMobile(),
        'email': email.getEmail()

    }

    return studentProfile;

}

export default StudentProfile;