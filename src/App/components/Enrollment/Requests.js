class Requests {

    getFields = (callBack) => {

        get('http://localhost:3001/ramas', (fields) => callBack(fields));

    }

    getProvinces = (callBack) => {

        get('http://localhost:3001/provincias', (provinces) => callBack(provinces));

    }
    
    getModalities = (callBack) => {

        get('http://localhost:3001/modalidades', (modalities) => callBack(modalities));

    }

    getSchedules = (callBack) => {

        get('http://localhost:3001/horarios', (schedules) => callBack(schedules));

    }

    getPrices = (callBack) => {

        get('http://localhost:3001/tarifas', (prices) => callBack(prices));

    }

    getCommunities = (callBack) => {

        get('http://localhost:3001/comunidades', (communities) => callBack(communities));

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