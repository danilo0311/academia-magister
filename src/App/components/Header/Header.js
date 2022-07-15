import React from 'react';
import './css/header.css';
import HamburguerButton from './components/HamburguerButton.js';

class Header extends React.Component {

    render() {
        return (
            <header id="header">
                <HamburguerButton></HamburguerButton>
            </header>
        );

    };

    startEnrollmentProcess = () => {

        const hamburguerButton = new HamburguerButton();
        hamburguerButton.startEnrollmentProcess();

    }

}

export default Header;