import React from "react";
import Requests from "../../../Requests.js";

class Rates extends React.Component {

    render() {

        return (

            <div className="standard-flex-wrapper">

                <section id="rate-container">

                    <label className="standard-label">Tarifas</label>
                    <label className="user-hint">(Selecciona una opción)</label>
                    <select id="select-rate" className="custom-select-input"></select>

                </section>

            </div>

        );

    }

}

function createRates() {

    const request = new Requests();

    const selectRate = document.getElementById('select-rate');

    request.getPrices((prices) => {

        for (let index = 0; index < prices.length; index++) {

            const option = document.createElement('option');

            option.setAttribute('value', prices[index].tarifa);
            option.textContent = prices[index].tarifa;

            selectRate.append(option);
        }

    });

}

setTimeout(() => {

    createRates();

}, 200);

export default Rates;