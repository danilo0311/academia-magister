import React from "react";
import ComponentName from "./component/ComponentName";
import Community from "./component/Community";
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

                    <Community></Community>
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

    getAddress = () =>{

        return getAddress();
        
    }

}

function getAddress() {

    const community = new Community();
    const studentAddress = new StudentAddress();
    const location = new Location();
    const province = new Province();
    const postalCode = new PostalCode();
    const consentment = new Consentment();

    const address = {

        'comunidad_de_examen': community.getCommunity(),
        'direccion': studentAddress.getAddress(),
        'localidad': location.getLocation(),
        'provincia': province.getProvince(),
        'codigo_postal': postalCode.getPostalCode(),
        'informacion_legal': consentment.getConsentments(),
        'proteccion_de_datos': consentment.getConsentments()

    }

    return address;

}

export default Address;