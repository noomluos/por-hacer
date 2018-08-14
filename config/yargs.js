const descripcion = {
    demand: true,
    alias: "d",
    desc: "Descripcion de la tarea a crear"
}
const completado = {
    alias: "c",
    default: true,
    desc: "Marca como competado o pendiente la tarea"
}

const argv = require("yargs")
    .command("crear", "Crea una tarea por hacer", {
        descripcion
    })
    .command("actualizar", "Actualiza el estado de las tareas", {
        descripcion,
        completado
    })
    .command("borrar", "Borrar una tarea", {
        descripcion,
        completado
    })
    .help()
    .argv;

module.exports = {
    argv
}