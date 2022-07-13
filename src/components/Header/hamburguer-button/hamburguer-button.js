let hamburguerDefaultState = true;
const hamburguerElement = document.getElementsByClassName('hamburguer-button-lines');

function HamburguerButton() {

    return (
        <button id="hamburguer-button" onClick={hamburguerhandler}>
            <div className="hamburguer-button-lines"></div>
            <div className="hamburguer-button-lines"></div>
            <div className="hamburguer-button-lines"></div>
        </button>
    );

}

function fold() {

    hamburguerElement[0].style.transition = "0.22s";
    hamburguerElement[0].style.transform = "rotate(0deg)";

    hamburguerElement[2].style.transform = "rotate(0deg)";
    hamburguerElement[2].style.marginTop = "15%";

    setTimeout(() => {
        
        hamburguerElement[1].style.display = "initial";
        hamburguerElement[1].style.opacity = "100%";

    }, 100);

    hamburguerDefaultState = true;

}

function unfold() {

    hamburguerElement[0].style.transition = "0.44s";
    hamburguerElement[0].style.transform = "rotate(-50deg)";

    hamburguerElement[1].style.display = "none";
    hamburguerElement[1].style.opacity = "0%";

    hamburguerElement[2].style.transform = "rotate(50deg)";
    hamburguerElement[2].style.marginTop = "-3%";

    hamburguerDefaultState = false;

}

function hamburguerhandler() {

    hamburguerDefaultState === true ? unfold() : fold();

}

export default HamburguerButton;