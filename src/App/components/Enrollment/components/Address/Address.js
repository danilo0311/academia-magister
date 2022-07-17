import React from "react";
import ComponentName from "./component/ComponentName";
import NextStepButton from "./component/NextStepButton";

import './css/address.css';

class Address extends React.Component {

    render() {

        return (

            <div id="address-container" className="enrollment-step">

                <ComponentName></ComponentName>

                <div id="student-profile-components-container">

                    <NextStepButton></NextStepButton>

                </div>

            </div>

        );

    }

}

export default Address;