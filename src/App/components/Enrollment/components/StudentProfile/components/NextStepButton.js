function NextStepButton() {

    return (

        <section className="standard-flex-wrapper standard-absolute-wrapper">

            <button id="student-profile-next-button" className="next-button" onClick={markAsCompleted}>Siguiente</button>

        </section>

    );

}


function markAsCompleted() {

    const studentProfileContainer = document.getElementById('student-profile-container');
    const addressContainer = document.getElementById('address-container');

    studentProfileContainer.style.display = 'none';
    addressContainer.style.display = 'initial';


}

export default NextStepButton;