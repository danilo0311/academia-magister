function PreferedaymentMethod() {

    return (

        <div className="standard-flex-wrapper">

            <section id="select-payment-method-container" className="payment-method-components">

                <label className="standard-label">¿Cómo prefieres abonar tu primer pago?</label>

                <div className="standard-flex-wrapper payment-method-button-wrapper">

                    <button className="standard-button payment-method-button">Tarjeta de crédito/débito(recomendado)</button>
                    <button className="standard-button payment-method-button">Transferencia bancaria</button>

                </div>

                <li className="payment-method-information-link">Detalles sobre forma de pago y proceso post pago →</li>

            </section>

        </div>

    );

}

export default PreferedaymentMethod;