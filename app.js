const argv = require("./config/yargs").argv;
const porHacer = require("./por-hacer/por-hacer");

const colors = require("colors");
//const argv = require("yargs").argv;

//console.log(argv);

let comando = argv._[0];

switch (comando) {
    case "crear":
        let tarea = porHacer.crear(argv.descripcion);
        console.log(porHacer);
        break;
    case "listar":
        let listado = porHacer.getListado();
        console.log("==========Por Hacer==========".green);
        for (let tarea of listado) {
            console.log(tarea.descripcion);
            console.log("Estado: ", tarea.completado);
            console.log("-----------------------------".green);
        }
        console.log("=============================".green);
        break;
    case "actualizar":
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log("Se ha actualizado una tarea");
        break;
    case "borrar":
        let borrar = porHacer.borrar(argv.descripcion);
        console.log(borrar);
        break;
    default:
        console.log("Comando no reconocido");
}