const axios = require('axios');




const getLugarLatLon = async(direccion) => {
    let encodedURL = encodeURI(direccion);
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedURL}&key=AIzaSyDk_RvfSKAQT36RLsPMw0gbj_YJrXgFnss`)

    if (resp.data.status == 'ZERO_RESULTS') {
        throw new Error(`NO hay resultados para la ciudad ${direccion}`);
    }

    var result = resp.data.results[0];
    var location = result.geometry;

    return {
        direccion: result.formatted_address,
        lat: location.location.lat,
        lon: location.location.lng
    }
}

module.exports = {
    getLugarLatLon
}