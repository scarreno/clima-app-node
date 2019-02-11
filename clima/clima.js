const axios = require('axios');

const getClima = async(lat, lng) => {
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=e7e59bd38136ac7b3ad0c628f128d5fb`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}