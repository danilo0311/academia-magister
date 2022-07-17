import React from "react";
import ComponentName from "./components/ComponentName";
import NextStepButton from "./components/NextStepButton";
import Rates from "./components/Rates";

import './css/pricing.css';

class Pricing extends React.Component {

    render() {

        return (

            <div id="pricing-container" className="enrollment-step">

                <ComponentName></ComponentName>

                <div id="pricing-components-container">

                    <Rates></Rates>
                    <NextStepButton></NextStepButton>

                </div>

            </div>

        );

    }

}

export default Pricing;