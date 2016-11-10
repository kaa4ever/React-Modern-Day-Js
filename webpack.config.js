var path = require('path');

module.exports = {
  entry: './todo.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.jsx?$/,
        loader: 'babel?presets[]=es2015,presets[]=stage-0,presets[]=react' }
    ]
  }
};