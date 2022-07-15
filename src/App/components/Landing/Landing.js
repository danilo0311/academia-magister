import React from "react";
import './css/landing.css';
import Logo from './components/Logo/Logo.js'
import BodyContent from "./components/BodyContent/BodyContent.js";
import ButtonsContainer from "./components/buttonsContainer/ButtonsContainer.js";
import EnrollmentProgressBar from "./components/EnrollmentProgressBar/EnrollmentProgressBar.js";

const enrollment = new EnrollmentProgressBar();

class Landing extends React.Component {

    render() {

        return (

            <div id="landing-container">

                <Logo></Logo>
                <BodyContent></BodyContent>
                <ButtonsContainer></ButtonsContainer>
                <EnrollmentProgressBar></EnrollmentProgressBar>

            </div>

        );

    }

    setEnrollmentProcess = () => {

        setAppWidth('30%');
        enrollment.setVisible();
        setLandingComponentsVisibility('none');

    }

    setLandingBackToDefault = () => {

        setAppWidth('100%');
        enrollment.setDefault();

        setTimeout(() => {

            setLandingComponentsVisibility('flex');

        }, 200);

    }

}

function setAppWidth(width) {

    const appContainer = document.getElementById('app');
    appContainer.style.width = width;

}

function setLandingComponentsVisibility(display) {

    const landingSections = document.getElementsByClassName('landing-component');

    for (let index = 0; index < landingSections.length; index++) {

        landingSections[index].style.display = display;

    }

}

export default Landing;