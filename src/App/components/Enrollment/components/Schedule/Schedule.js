import React from "react";

import './css/schedule.css';

import ComponentName from "./components/ComponentName";
import Modality from "./components/Modality";
import Schedules from "./components/Schedules";
import NextStepButton from "./components/NextStepButtons";

class Schedule extends React.Component {

    render() {

        return (

            <div id="schedule-container" className="enrollment-step">

                <ComponentName></ComponentName>

                <div id="schedule-components-container">

                    <Modality></Modality>
                    <Schedules></Schedules>
                    <NextStepButton></NextStepButton>
                    
                </div>

            </div>

        );

    }

}

export default Schedule;