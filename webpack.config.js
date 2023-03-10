const path = require('path')

module.exports = {
  //SELEÇÃO DO ARQUIVO DE ENTRADA, O PRINCIPAL
    entry: {
      index: './dist/src/scripts/index.js'
    },
  //IMPORTANTE PARA NÃO HAVER A MENSAGEM REPETITIVA
    mode: 'development',
    output: {
  //ESTE SERVE PARA ESCOLHER A PASTA AONDE O NOVO ARQUIVO FICARÁ SALVO
      path: path.resolve(__dirname, 'dist'),
  
  //E ESTE PARA ESCOLHER O NOME DO ARQUIVO AONDE SERÁ FEITA A COMPACTAÇÃO
      filename: '[name].min.js'
    },
    module: {
  //O ITEM ABAIXO É UM ARRAY QUE CONTEM OS LOADERS
      rules: [{
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [
                  ['@babel/preset-env', { targets: "defaults" }]
                ]
              }
            }
          }
      ]
    },
}