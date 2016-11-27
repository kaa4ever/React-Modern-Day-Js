var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  debug: true,
  entry: {
    Todo1: [
      'react-hot-loader/patch',
      'webpack-hot-middleware/client',
      './src/todo1'
    ],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].min.js',
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel?presets[]=es2015,presets[]=stage-0,presets[]=react',
        include: path.join(__dirname, 'src')
      }
    ]
  }
};