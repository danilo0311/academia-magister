import React from "react";

class PostalCode extends React.Component {

    render() {

        return (

            <div className="standard-flex-wrapper">

                <section id="postal-code-component" className="address-components">

                    <label className="standard-label">Codigo postal</label>
                    <input id="student-postal-code" className="standard-input standard-input-small-size" placeholder="Ej:28040"></input>
                    <label id="warn-empty-student-postal-code" className="standard-label-warn-empty-field">* Indica tu código postal</label>

                </section>

            </div>

        );

    }

    getPostalCode = () =>{

        return getStudentPostalCode();

    }

}

function warnEmptyField(status) {

    const warningMessage = document.getElementById('warn-empty-student-postal-code');

    status == true ? warningMessage.style.display = 'initial' : warningMessage.style.display = 'none';

}

function checkEmptyField() {

    let status = true;
    const postalCode = document.getElementById('student-postal-code').value;

    if (postalCode !== '') {

        status = false;

    }

    warnEmptyField(status);

    return status;

}

function getStudentPostalCode() {

    let postalCode = 'default';

    if (!checkEmptyField()) {

        postalCode = document.getElementById('student-postal-code').value;

    }

    return postalCode;

}

export default PostalCode;