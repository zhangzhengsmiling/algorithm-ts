const path = require('path');

const config = {
  mode: 'development',
  entry: '*.ts',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: '[name].js'
  },
  module: {
    rules: [
      { test: /.ts$/, loader: 'ts-loader' }
    ]
  }
}

module.exports = config;

