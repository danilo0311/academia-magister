import React from 'react';
import './css/header.css';
import HamburguerButton from './hamburguer-button/hamburguer-button.js';

class Header extends React.Component {

    render() {
        return (
            <header id="app-header">
                <HamburguerButton></HamburguerButton>
            </header>
        );

    };

}

export default Header;