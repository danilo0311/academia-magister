import React from "react";
import ComponentName from "./components/ComponentName";
import NextStepButton from "./components/NextStepButton";

import './css/student-profile.css';

class StudentProfile extends React.Component {

    render() {

        return (

            <div id="student-profile-container" className="enrollment-step">

                <ComponentName></ComponentName>

                <div id="student-profile-components-container">

                    <NextStepButton></NextStepButton>
                    
                </div>

            </div>

        );

    }

}

export default StudentProfile;