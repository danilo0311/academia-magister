import React from "react";
import './css/app.css';
import Landing from "./components/Landing/Landing";
import Header from "./components/Header/Header";
import Enrollment from "./components/Enrollment/Enrollment";

class App extends React.Component {

    render() {

        return (

            <div id="app" >
                <Enrollment></Enrollment>
                <Header></Header>
                <Landing></Landing>
            </div>

        );

    }

}

export default App;