import React from "react";

class DNI extends React.Component {

    render() {

        return (

            <div className="standard-flex-wrapper student-profile-components-wrapper">

                <section id="student-dni-wrapper" className="student-components">

                    <label className="standard-label">DNI - NIE</label>
                    <input id="student-dni" className="standard-input standard-input-small-size" placeholder="Ej:Y56748659P"></input>
                    <label id="warn-empty-student-dni" className="standard-label-warn-empty-field">* Indica tu DNI/NIE</label>

                </section>

            </div>

        );

    }

    getDNI = () => {

        return getStudentDNI();

    }

}

function warnEmptyField(status) {

    const warningMessage = document.getElementById('warn-empty-student-dni');

    status == true ? warningMessage.style.display = 'initial' : warningMessage.style.display = 'none';

}

function checkEmptyField() {

    let status = true;
    const studentDNI = document.getElementById('student-dni');

    if (studentDNI.value !== '') {

        status = false;
    }

    warnEmptyField(status);

    return status;

}

function getStudentDNI() {

    let dni = 'default';

    if (!checkEmptyField()) {

        dni = document.getElementById('student-dni').value;

    }

    return dni;

}

export default DNI;