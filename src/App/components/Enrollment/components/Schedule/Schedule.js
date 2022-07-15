import React from "react";
import ComponentName from "./components/ComponentName";
import Modality from "./components/Modality";
import './schedule.css';

class Schedule extends React.Component {

    render() {

        return (

            <div id="schedule-container" className="enrollment-step">

                <ComponentName></ComponentName>

                <div id="schedule-components-container">
                    <Modality></Modality>
                    
                </div>

            </div>

        );

    }

}

export default Schedule;