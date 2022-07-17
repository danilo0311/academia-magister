import React from "react";
import ComponentName from "./components/ComponentName.js";

import Fields from "./components/Fields.js";
import Materials from "./components/Materials.js";
import NextStepButton from "./components/NextStepButton.js";
import Provinces from "./components/Provinces.js";
import StudentCategory from "./components/StudentCategory.js";
import './css/specialization.css';

class Specialization extends React.Component {

    render() {

        return (

            <div id="specialization-container" className="enrollment-step">

                <ComponentName></ComponentName>

                <div id="specialization-component-inputs">

                    <section className="standard-flex-wrapper">
                        
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