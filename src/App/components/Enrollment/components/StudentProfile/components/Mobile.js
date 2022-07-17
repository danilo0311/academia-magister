import React from "react";

class Mobile extends React.Component {

    render() {

        return (

            <div className="standard-flex-wrapper student-profile-components-wrapper">

                <section id="student-mobile-wrapper" className="student-components">

                    <label className="standard-label">Móvil</label>
                    <input id="student-mobile" className="standard-input standard-input-small-size" placeholder="Ej: 654789735"></input>
                    <label id="warn-empty-student-mobile" className="standard-label-warn-empty-field">* Indica un número de contacto</label>

                </section>

            </div>

        );

    }

    getMobile = () => {

        return getMobile();

    }

}

function warnEmptyField(status) {

    const warningMessage = document.getElementById('warn-empty-student-mobile');

    status == true ? warningMessage.style.display = 'initial' : warningMessage.style.display = 'none';

}

function checkEmptyField() {

    let status = true;
    const mobile = document.getElementById('student-mobile');

    if (mobile.value !== '') {

        status = false;

    }

    warnEmptyField(status);

    return status;

}

function getMobile() {

    let mobile = 'default';

    if (!checkEmptyField()) {

        mobile = document.getElementById('student-mobile').value;

    }

    return mobile;

}

export default Mobile;