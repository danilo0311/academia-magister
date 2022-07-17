import React from "react";

class StudentCategory extends React.Component {

    render() {

        return (

            <section className="standard-flex-wrapper">

                <div id="specialization-select-option" className="select-container">

                    <label className="standard-label">¿Has sido alumn@ de Magister?</label>
                    <li id="terms">Consulta condiciones →</li>

                    <input id="student-category" type="text"></input>

                    <div id="student-category-container">
                        <button id="new-student" value='default' className="standard-button" onClick={selectStudentCategory}>No</button>
                        <button id="former-student" value='default' className="standard-button" onClick={selectStudentCategory}>Sí</button>
                        <button id="recent-student" value='default' className="standard-button" onClick={selectStudentCategory}>Sí, después de 2017</button>
                    </div>

                    <label id="warn-empty-category" className="standard-label-warn-empty-field">* Selecciona una opción</label>

                </div>

            </section>

        );

    }

    getCategory = () => {

        return getSelectedCategory();

    }

}

function localVariables(callback) {

    const newStudent = document.getElementById('new-student');
    const formerStudent = document.getElementById('former-student');
    const recentStudent = document.getElementById('recent-student');

    const localVariables = {

        newStudent: newStudent,
        formerStudent: formerStudent,
        recentStudent: recentStudent

    }

    callback(localVariables);

}

function setVisualHintToSelectedCategory(category) {

    localVariables((get) => {

        const categories = [get.newStudent, get.formerStudent, get.recentStudent];

        category.style.backgroundColor = "rgba(151, 167, 191, 0.57)";

        for (let index = 0; index < categories.length; index++) {

            if (categories[index].value !== category.value) {

                categories[index].style.backgroundColor = '';
                categories[index].value = 'default';

            }

            if (category.value == 'default') {

                categories[index].style.backgroundColor = '';

            }

        }

    });

}

function selectStudentCategory(event) {

    const category = event.target;
    const studentCategory = document.getElementById('student-category');

    category.value = category.value == 'default' ? category.textContent : 'default';
    setVisualHintToSelectedCategory(category);

    studentCategory.textContent = category.textContent;

}

function checkEmptyField(categories) {

    let emptySelection = true;
    const warningMessage = document.getElementById('warn-empty-category');

    const show = () => warningMessage.style.display = 'initial';
    const hide = () => warningMessage.style.display = 'none';

    categories.forEach(category => {

        if (category !== 'default')
            emptySelection = false;

    });

    emptySelection == true ? show() : hide();

}

function getSelectedCategory() {

    let selectedCategory = 'default';

    localVariables((get) => {

        const categories = [get.newStudent.value, get.formerStudent.value, get.recentStudent.value];

        checkEmptyField(categories);

        for (let index = 0; index < categories.length; index++) {

            if (categories[index] !== 'default') {

                selectedCategory = categories[index];

            }

        }

        return selectedCategory;

    });

    return selectedCategory;

}

export default StudentCategory;