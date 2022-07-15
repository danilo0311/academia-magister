import Enrollment from '../../Enrollment/Enrollment.js';
import Landing from '../../Landing/Landing.js';
import React from "react";

let hamburguerDefaultState = true;
const hamburguerElement = document.getElementsByClassName('hamburguer-button-lines');

class HamburguerButton extends React.Component {

    render() {

        return (
            <button id="hamburguer-button" onClick={hamburguerHandler}>
                <div className="hamburguer-button-lines"></div>
                <div className="hamburguer-button-lines"></div>
                <div className="hamburguer-button-lines"></div>
            </button>
        );

    }

    startEnrollmentProcess = () => {

        hamburguerHandler();

    }

}

function fold() {

    const landing = new Landing();
    const enrollment = new Enrollment();

    setColor("rgb(255, 255, 255)");

    enrollment.hideComponent();
    landing.setLandingBackToDefault();

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

    const landing = new Landing();
    const enrollment = new Enrollment();

    setColor("rgb(0, 0, 0)");

    enrollment.showComponent();
    landing.setEnrollmentProcess();

    hamburguerElement[0].style.transition = "0.44s";
    hamburguerElement[0].style.transform = "rotate(-50deg)";

    hamburguerElement[1].style.display = "none";
    hamburguerElement[1].style.opacity = "0%";

    hamburguerElement[2].style.transform = "rotate(50deg)";
    hamburguerElement[2].style.marginTop = "-3%";

    hamburguerDefaultState = false;

}

function setColor(rgb) {

    for (let index = 0; index < hamburguerElement.length; index++) {

        hamburguerElement[index].style.backgroundColor = rgb;

    }

}

function hamburguerHandler() {

    hamburguerDefaultState === true ? unfold() : fold();

}

export default HamburguerButton;