function Consentment() {

    return (

        <div id="consentment-wrapper" className="standard-flex-wrapper">

            <section id="consentment-component" className="address-components">

                <div className="consentment-checkbox-wrapper">

                    <input className="consentment-checkboxs" type="checkbox"></input>
                    <p id="legal-information-title" className="consentment-title">Acepto la </p>

                </div>

                <div className="consentment-checkbox-wrapper">

                    <input className="consentment-checkboxs" type="checkbox"></input>
                    <p id="data-protection-title" className="consentment-title">Acepto la </p>

                </div>

            </section>

        </div>

    );

}

export default Consentment;