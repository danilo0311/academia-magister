import React from "react";
import Requests from "../../../Requests.js";

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

function createFields() {

    const request = new Requests();

    request.getFields((fields)=>{

        for (let index = 0; index < fields.length; index++) {

            const option = document.createElement('option');
            const selectField = document.getElementById('select-field');
    
            option.setAttribute('value', fields[index].rama);
            option.setAttribute('className', 'default-options');
    
            option.textContent = fields[index].rama;
    
            selectField.append(option);
    
        }

    });
    
}

function createProvinces(){

    const request = new Requests();

    request.getProvinces((provinces)=>{

        for (let index = 0; index < provinces.length; index++) {

            const province = document.createElement('option');
            const selectProvince = document.getElementById('select-province');
    
            province.setAttribute('value', provinces[index].provincia);
            province.setAttribute('className', 'default-options');
    
            province.textContent = provinces[index].provincia;
    
            selectProvince.append(province);
    
        }

    });

}

function checkEmptyField(checkDefault) {

    const warningMessage = document.getElementById('warn-empty-field');

    checkDefault == 'default'
        ? warningMessage.style.display = "initial"
        : warningMessage.style.display = "none";

}

function getSelectedField() {

    let field = document.getElementById('select-field').value;

    checkEmptyField(field);
    return field;

}

createFields();
createProvinces();

export default Fields;