import React from "react";

class Schedules extends React.Component {

    render() {

        return (

            <div className="standard-flex-wrapper">

                <div id="schedules-container" className="schedule-wrapper">

                    <label className="standard-label">Horario</label>
                    <label className="user-hint">(Selecciona una opción)</label>

                    <select id="select-schedule" className="custom-select-input">
                        <option>1 Clase al mes prácticas y programación sábados por la mañana. Grupo 1 de 10 a 14 horas</option>
                    </select>

                </div>

            </div>

        );

    }

}

export default Schedules;