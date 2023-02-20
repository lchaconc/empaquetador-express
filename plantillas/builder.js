const webpack = require('webpack');
const config = require('./webpack.config.js');

function build() {
  return new Promise((resolve, reject) => {
    webpack(config, (err, stats) => {
      if (err || stats.hasErrors()) {
        reject(err || new Error(stats.compilation.errors.join('\n')));
      } else {
        resolve(stats);
      }
    });
  });
}


build()
  .then(stats => {
    console.log(stats.toString({
      colors: true
    }));
  })
  .catch(err => {
    console.error('********Error al construir la aplicación: >>>>', err);
  });

