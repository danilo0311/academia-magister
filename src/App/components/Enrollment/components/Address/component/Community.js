import React from "react";
import Requests from "../../../Requests.js";

class Community extends React.Component{

    render(){

        return (

            <div className="standard-flex-wrapper">
    
                <section id="address-components-community" className="address-components">
    
                    <label className="standard-label">Comunidad de exámen</label>
                    <select id="select-exam-community" className="custom-select-input" placeholder="Ej:Madrid"></select>
    
                </section>
    
            </div>
    
        );      

    }

    getCommunity = () =>{

        return getCommunity();
        
    }

}

function createComunities() {

    const request = new Requests();

    const selectCommunity = document.getElementById('select-exam-community');

    request.getCommunities((communities) => {

        for (let index = 0; index < communities.length; index++) {

            const option = document.createElement('option');

            option.setAttribute('value', communities[index].comunidad);
            option.textContent = communities[index].comunidad;

            selectCommunity.append(option);

        }

    });


}

setTimeout(() => {

    createComunities();

}, 200);


function getCommunity() {

    const community = document.getElementById('select-exam-community').value;
    return community;

}

export default Community;