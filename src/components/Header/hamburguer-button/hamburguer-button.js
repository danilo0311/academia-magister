function HamburguerButton() {

    return (
        <button id="hamburguer-button" onClick={fold}>
            <div className="hamburguer-button-lines"></div>
            <div className="hamburguer-button-lines"></div>
            <div className="hamburguer-button-lines"></div>
        </button>
    );


}

function fold() {

    console.log('hello world');

}

export default HamburguerButton;