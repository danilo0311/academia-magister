import React from "react";

import './css/schedule.css';

import ComponentName from "./components/ComponentName";
import Modality from "./components/Modality";
import Schedules from "./components/Schedules";

class Schedule extends React.Component {

    render() {

        return (

            <div id="schedule-container" className="enrollment-step">

                <ComponentName></ComponentName>

                <div id="schedule-components-container">

                    <Modality></Modality>
                    <Schedules></Schedules>

                </div>

            </div>

        );

    }

}

export default Schedule;