class Requests {

    getFields = (callBack) => {

        get('http://localhost:3001/ramas', (fields) => callBack(fields));

    }

    getProvinces = (callBack) => {

        get('http://localhost:3001/provincias', (provinces) => callBack(provinces));

    }

}

function get(endPoint, callBack) {

    fetch(endPoint)
        .then(response => response.json())
        .then((data) => {

            const parsedData = JSON.parse(data)
            callBack(parsedData);

        });

}

export default Requests;