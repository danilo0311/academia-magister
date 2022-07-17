import React from "react";

class FullName extends React.Component {

    render() {

        return (

            <div className="standard-flex-wrapper">

                <section id="student-full-name-wrapper">

                    <label className="standard-label">Nombre completo</label>
                    <input id="student-full-name" className="standard-input" placeholder="Ej: Camila Perez Sánchez"></input>
                    <label id="warn-empty-student-name" className="standard-label-warn-empty-field">* ¡Tu nombre no puede estar vacio!</label>

                </section>

            </div>

        );

    }

    getFullName = () => {

        return getFullName();

    }

}

function warnEmptyField(status) {

    const warningMessage = document.getElementById('warn-empty-student-name');

    status == true ? warningMessage.style.display = 'initial' : warningMessage.style.display = 'none';

}

function checkEmptyField() {

    let status = true;
    const fullName = document.getElementById('student-full-name');

    if (fullName.value !== '') {

        status = false;
    }

    warnEmptyField(status);

    return status;

}

function getFullName() {

    let fullName = 'default';

    if (!checkEmptyField()) {

        fullName = document.getElementById('student-full-name').value;

    }

    return fullName;

}

export default FullName;