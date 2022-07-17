import React from "react";

class Location extends React.Component {

    render() {

        return (

            <div id="location-wrapper" className="standard-flex-wrapper">

                <section id="location-component" className="address-components">

                    <label className="standard-label">Localidad</label>
                    <input id="student-location" className="standard-input standard-input-small-size" placeholder="Ej:Madrid"></input>
                    <label id="warn-empty-student-location" className="standard-label-warn-empty-field">* Indica tu localidad</label>

                </section>

            </div>

        );

    }

    getLocation = () => {

        return getStudentLocation();

    }

}

function warnEmptyField(status) {

    const warningMessage = document.getElementById('warn-empty-student-location');

    status == true ? warningMessage.style.display = 'initial' : warningMessage.style.display = 'none';

}

function checkEmptyField() {

    let status = true;
    const location = document.getElementById('student-location').value;

    if (location !== '') {

        status = false;

    }

    warnEmptyField(status);

    return status;

}

function getStudentLocation() {

    let location = 'default';

    if (!checkEmptyField()) {

        location = document.getElementById('student-location').value;

    }

    return location;

}

export default Location;