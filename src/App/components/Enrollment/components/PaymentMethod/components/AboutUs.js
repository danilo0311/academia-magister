function AboutUs() {

    return (

        <div className="standard-flex-wrapper">

            <section id="select-payment-method-container" className="payment-method-components">

                <label className="standard-label">¿Vienes recomendado por alguien?</label>

                <div className="standard-flex-wrapper payment-method-button-wrapper">

                    <button id="recommended-student-button" className="standard-button payment-method-button">No</button>
                    <button id="not-recommended-student-button" className="standard-button payment-method-button">Sí</button>

                </div>

                <li className="payment-method-information-link">Ver información legal →</li>

            </section>

        </div>

    );

}

export default AboutUs;