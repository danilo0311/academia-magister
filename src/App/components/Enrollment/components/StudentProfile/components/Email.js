import React from "react";

class Email extends React.Component {

    render() {

        return (

            <div className="standard-flex-wrapper student-profile-components-wrapper">

                <section id="student-email-wrapper" className="student-components">

                    <label className="standard-label">Email</label>
                    <input id="student-email" className="standard-input standard-input-small-size" placeholder="Ej:camila.per.san@gmail.com"></input>
                    <label id="warn-empty-student-email" className="standard-label-warn-empty-field">* Indica un número de contacto</label>

                </section>

            </div>

        );

    }
    
    getEmail = () =>{

        return getStudentEmail();

    }

}

function warnEmptyField(status) {

    const warningMessage = document.getElementById('warn-empty-student-email');

    status == true ? warningMessage.style.display = 'initial' : warningMessage.style.display = 'none';

}

function checkEmptyField() {

    let status = true;
    const email = document.getElementById('student-email').value;

    if (email !== '') {

        status = false;

    }

    warnEmptyField(status);

    return status;

}

function getStudentEmail() {

    let email = 'default';

    if (!checkEmptyField()) {

        email = document.getElementById('student-email').value

    }

    return email;

}

export default Email;