import React from "react";

class Provinces extends React.Component {

    render() {

        return (

            <div id="specialization-select-province" className="select-container">

                <label className="standard-label">Provincia</label>
                <label className="user-hint">(Selecciona una opción)</label>

                <select id="select-province" className="custom-select-input">
                    <option value='default' className="default-options">Ej: Madrid</option>
                </select>

                <label id="warn-empty-province" className="standard-label-warn-empty-field">* Selecciona una provincia</label>

            </div>

        );

    }

    getProvince = () => {

        return getSelectedProvince();

    }

}

function checkEmptyField(province) {

    const warningMessage = document.getElementById('warn-empty-province');

    province == 'default'
        ? warningMessage.style.display = 'initial'
        : warningMessage.style.display = 'none';


}

function getSelectedProvince() {

    const province = document.getElementById('select-province').value;

    checkEmptyField(province);
    return province;

}

export default Provinces;