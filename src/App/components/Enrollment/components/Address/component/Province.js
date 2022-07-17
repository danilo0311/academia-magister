import React from "react";

class Province extends React.Component {

    render() {

        return (

            <div className="standard-flex-wrapper">

                <section id="province-component-wrapper" className="address-components">

                    <label className="standard-label">Provincia</label>
                    <input id="student-province" className="standard-input standard-input-small-size" placeholder="Ej:Madrid"></input>
                    <label id="warn-empty-student-province" className="standard-label-warn-empty-field">* Indica tu provincia</label>

                </section>

            </div>

        );

    }

    getProvince = () => {

        return getStudentProvince();

    }

}

function warnEmptyField(status) {

    const warningMessage = document.getElementById('warn-empty-student-province');

    status == true ? warningMessage.style.display = 'initial' : warningMessage.style.display = 'none';

}

function checkEmptyField() {

    let status = true;
    const province = document.getElementById('student-province').value;

    if (province !== '') {

        status = false;

    }

    warnEmptyField(status);

    return status;

}

function getStudentProvince() {

    let province = 'default';

    if (!checkEmptyField()) {

        province = document.getElementById('student-province').value;

    }

    return province;

}

export default Province;