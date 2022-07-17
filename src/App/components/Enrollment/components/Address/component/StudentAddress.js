import React from "react";

class StudentAddress extends React.Component {

    render() {

        return (

            <div className="standard-flex-wrapper">

                <section id="address-component" className="address-components">

                    <label className="standard-label">Dirección</label>
                    <input id="student-address-input" className="standard-input" placeholder="Ej: Calle Ramiro de Maxtu, 10, 4D"></input>
                    <label id="warn-empty-student-address" className="standard-label-warn-empty-field">* Indica tu dirección</label>

                </section>

            </div>

        );

    }

    getAddress = () => {

        return getStudentAddres();

    }

}

function warnEmptyField(status) {

    const warningMessage = document.getElementById('warn-empty-student-address');

    status == true ? warningMessage.style.display = 'initial' : warningMessage.style.display = 'none';

}

function checkEmptyField() {

    let status = true;
    const address = document.getElementById('student-address-input').value;

    if (address !== '') {

        status = false;

    }

    warnEmptyField(status);

    return status;

}

function getStudentAddres() {

    let address = 'default';

    if (!checkEmptyField()) {

        address = document.getElementById('student-address-input').value;

    }

    return address;

}

export default StudentAddress;