import React from "react";
import Requests from "../../../Requests.js";

class Schedules extends React.Component {

    render() {

        return (

            <div className="standard-flex-wrapper">

                <div id="schedules-container" className="schedule-wrapper">

                    <label className="standard-label">Horario</label>
                    <label className="user-hint">(Selecciona una opción)</label>
                    <select id="select-schedule" className="custom-select-input"></select>

                </div>

            </div>

        );

    }

}

function createSchedules() {

    const request = new Requests();

    const selectSchedule = document.getElementById('select-schedule');

    request.getSchedules((schedule) => {

        for (let index = 0; index < schedule.length; index++) {

            const option = document.createElement('option');
            option.setAttribute('class', 'schedule-option');
            option.setAttribute('value', schedule[index].horario);

            option.textContent = schedule[index].horario;
            selectSchedule.append(option);

        }

    });


}

setTimeout(() => {

    createSchedules();

}, 200);

export default Schedules;