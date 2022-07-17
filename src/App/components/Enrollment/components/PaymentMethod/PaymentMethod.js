import React from "react";
import AboutUs from "./components/AboutUs";

import ComponentName from "./components/ComponentName";
import NextStepButton from "./components/NextStepButton";
import PreferedaymentMethod from "./components/PreferedPaymentMethod";

import './css/payment-method.css';

class PaymentMethod extends React.Component {

    render() {

        return (

            <div id="payment-method-container" className="enrollment-step">

                <ComponentName></ComponentName>

                <div id="payment-method-components-container">

                    <PreferedaymentMethod></PreferedaymentMethod>
                    <AboutUs></AboutUs>
                    <NextStepButton></NextStepButton>

                </div>

            </div>

        );

    }

}

export default PaymentMethod;