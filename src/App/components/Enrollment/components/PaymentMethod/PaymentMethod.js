import React from "react";

import ComponentName from "./components/ComponentName";
import NextStepButton from "./components/NextStepButton";

import './css/payment-method.css';

class PaymentMethod extends React.Component {

    render() {

        return (

            <div id="payment-method-container" className="enrollment-step">

                <ComponentName></ComponentName>

                <div id="payment-method-components-container">

                    <NextStepButton></NextStepButton>
                    
                </div>

            </div>

        );

    }

}

export default PaymentMethod;