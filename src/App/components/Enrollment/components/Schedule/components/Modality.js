import React from "react";

class Modality extends React.Component {

    render() {

        return (

            <div className="standard-flex-wrapper">

                <div id="modality-container" className="schedule-wrapper">

                    <label className="standard-label">Modalidad</label>
                    <label className="user-hint">(Selecciona una opción)</label>

                    <section className="modality-option-container">

                        <button id="on-site-button" value="default" className="standard-button modality-buttons">Presencial 2021/2022</button>
                        <button id="blended-learning-button" value="default" className="standard-button modality-buttons">Semipresencial 2021/2022</button>
                        <button id="videoconference-button" value="default" className="standard-button modality-buttons">Videoconferencia en directo 2021/2022</button>
                        <button id="lomloe-adaptation-button" value="default" className="standard-button modality-buttons">Adaptación a la Lomloe 2021/2022</button>

                    </section>

                </div>

            </div>

        );

    }

}

export default Modality;