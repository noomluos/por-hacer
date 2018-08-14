const fs = require("fs");


let listadoPorhacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorhacer);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw err;
        console.log('Se ha guardado la información correctamente!');
    });
}

const cargarDB = () => {
    try {
        listadoPorhacer = require("../db/data.json");
    } catch (error) {
        listadoPorhacer = [];
    }
}

const crear = (descripcion) => {

    cargarDB();

    let porhacer = {
        descripcion,
        completado: false
    }

    listadoPorhacer.push(porhacer);
    guardarDB();

    return porhacer;
}


const getListado = () => {
    cargarDB();
    //for (let i = 1; i <= listadoPorhacer.length; i++) {
    //console.log(listadoPorhacer.descripcion);
    //}
    return listadoPorhacer;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoPorhacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoPorhacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {
    cargarDB();
    let porhacer = {
        descripcion
    }
    listadoPorhacer.pop(porhacer);
    guardarDB();
    return porhacer;
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}