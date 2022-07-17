import React from "react";
import ComponentName from "./component/ComponentName";
import Comunity from "./component/Comunity";
import Consentment from "./component/Consentment";
import Location from "./component/Location";
import NextStepButton from "./component/NextStepButton";
import PostalCode from "./component/PostalCode";
import Province from "./component/Province";
import StudentAddress from "./component/StudentAddress";

import './css/address.css';

class Address extends React.Component {

    render() {

        return (

            <div id="address-container" className="enrollment-step">

                <ComponentName></ComponentName>

                <div id="student-profile-components-container">

                    <Comunity></Comunity>
                    <StudentAddress></StudentAddress>

                    <div id="student-address-inline-wrapper" className="standard-flex-wrapper">

                        <Location></Location>
                        <Province></Province>
                        <PostalCode></PostalCode>

                    </div>

                    <Consentment></Consentment>
                    <NextStepButton></NextStepButton>

                </div>

            </div>

        );

    }

}

export default Address;