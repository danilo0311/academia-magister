function NextStepButton() {

    return (

        <section className="standard-flex-wrapper standard-absolute-wrapper">

            <button id="specialization-next-button" className="next-button" onClick={markAsCompleted}>Siguiente</button>
            <button className="standard-buttons go-back-button">Volver atrás</button>
            
        </section>

    );

}

function markAsCompleted() {

    const pricingtContainer = document.getElementById('pricing-container');
    const scheduleContainer = document.getElementById('schedule-container');

    scheduleContainer.style.display = 'none';
    pricingtContainer.style.display = 'initial';


}

export default NextStepButton;