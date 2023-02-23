const webpack = require('webpack');
const config = require('./webpack.config.js');


 function build () {
  console.log("iniciando el BUILD");
  return new Promise((resolve, reject) => {
    webpack(config, (err, stats) => {
      if (err || stats.hasErrors()) {
        //reject(err || new Error(stats.compilation.errors.join('\n')));
        reject(err || new Error(stats.compilation.errors.join('\n') || 'Error en la construcción'));

      } else {
        resolve(stats);
      }
    });
  });
}

module.exports = {build}

/*

build()
  .then(stats => {
    console.log(stats.toString({
      colors: true
    }));
  })
  .catch(err => {
    console.error('********Error al construir la aplicación: >>>>', err);
  });

*/

