function NextStepButton() {

    return (

        <section className="standard-flex-wrapper standard-absolute-wrapper">

            <div className="standard-flex-colum-wrapper">

                <button id="schedule-next-button" className="next-button" onClick={markAsCompleted}>Siguiente</button>
                <button id="schedule-go-back-button" className="standard-buttons go-back-button" onClick={goBack}>Volver atrás</button>

            </div>

        </section>

    );

}

function markAsCompleted() {

    const pricingtContainer = document.getElementById('pricing-container');
    const scheduleContainer = document.getElementById('schedule-container');

    scheduleContainer.style.display = 'none';
    pricingtContainer.style.display = 'initial';


}

function goBack() {

    const scheduleContainer = document.getElementById('schedule-container');
    const specializationContainer = document.getElementById('specialization-container');

    scheduleContainer.style.display = 'none';
    specializationContainer.style.display = 'initial';

}

export default NextStepButton;