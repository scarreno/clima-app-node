const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');



let getInfo = async(direccion) => {
    try {
        var location = await lugar.getLugarLatLon(argv.direccion);

        var temp = await clima.getClima(location.lat, location.lon);

        return `La temperatura en ${location.direccion} es de grados ${temp}`;
    } catch (e) {
        return `No se pudo determinar el clima en ${argv.direccion}`;
    }


}


getInfo(argv.direccion).then(resp => console.log(resp)).catch(e => console.log(e));