import React from "react";

class Rates extends React.Component {

    render() {

        return (

            <div className="standard-flex-wrapper">

                <section id="rate-container">

                    <label className="standard-label">Tarifas</label>
                    <label className="user-hint">(Selecciona una opción)</label>

                    <select id="select-rate" className="custom-select-input">
                        <option>Inicio febrero 2023. Nuevo alumno SEMIPRESENCIAL - MATERIAL MES A MES -matricula 101.00 Euros</option>
                    </select>

                </section>

            </div>

        );

    }


}

export default Rates;