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

    createSubscription = (subscription, callBack) => {

        post('http://localhost:3001/nueva-matricula/' + JSON.stringify(subscription), (result) => { callBack(result) });

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

function post(endPoint, callBack) {

    const config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        }
    }

    fetch(endPoint, config)
        .then(response => response.json())
        .then((data) => {

            callBack(JSON.parse(data));

        })
        .catch((err) => {

            if (err) throw err;

        });

}

export default Requests;