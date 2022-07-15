import React from "react";
import ComponentName from "./components/ComponentName/ComponentName.js";

import Fields from "./components/Fields/Fields.js";
import Materials from "./components/Materials/Materials.js";
import NextStepButton from "./components/NextStepButton/NextStepButton.js";
import Provinces from "./components/Provinces/Provinces.js";
import StudentCategory from "./components/StudentCategory/StudentCategory.js";
import './css/specialization.css';

class Specialization extends React.Component {

    render() {

        return (

            <div id="specialization-container" className="enrollment-step">

                <ComponentName></ComponentName>

                <div id="specialization-component-inputs">

                    <section className="specialization-wrapper">
                        
                        <Fields></Fields>
                        <Provinces></Provinces>

                    </section>

                    <StudentCategory></StudentCategory>
                    <Materials></Materials>
                    <NextStepButton></NextStepButton>

                </div>

            </div>

        );

    }

}

export default Specialization;