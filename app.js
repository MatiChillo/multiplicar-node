const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

// Esto es porque en el argv esta { _: [ 'crear' ]
// y quiero ingresar a esa posición.
let comando = argv._[0];

switch (comando){
  case 'listar':
  listarTabla(argv.base, argv.limite);
  break;

  case 'crear':
  crearArchivo(argv.base, argv.limite)
  .then(archivo => console.log(`Archivo creado: ${ archivo.green }`))
  .catch(error => console.log(error));
  break;

  default:
  console.log('Comando no reconocido');
}

// let argv2 = process.argv;
//
// console.log(argv.limite);
// let parametro = argv[2];
// let base = parametro.split('=')[1];
