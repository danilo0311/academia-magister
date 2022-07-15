import React from "react";


class Fields extends React.Component {

    render() {

        return (

            <div id="specialization-select-field" className="select-container">

                <label className="standard-label">Rama</label>
                <label className="user-hint">(Selecciona una opción)</label>

                <select id="select-field" className="custom-select-input">
                    <option value='default' className="default-options">Ej: Maestros, Audición y lenguaje</option>
                </select>

                <label id="warn-empty-field" className="standard-label-warn-empty-field">* Debes rellenar este campo</label>

            </div>

        );

    }

    getField = () => {

        return getSelectedField();

    }

}

function checkEmptyField(checkDefault) {

    const warnMessage = document.getElementById('warn-empty-field');

    checkDefault == 'default'
        ? warnMessage.style.display = "initial"
        : warnMessage.style.display = "none";

}

function getSelectedField() {

    let field = document.getElementById('select-field').value;

    checkEmptyField(field);
    return field;

}

export default Fields;