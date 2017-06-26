var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'frontend', 'src', 'app.js'),
  output: {
    path: path.resolve(__dirname, 'frontend', 'dist'),
    filename: 'bundle.js',
    library: '',
    libraryTarget: 'umd'
  }
  /*module: {
    rules: [
      {test: /\.css$/, use: 'css-loader'}
    ]
  }*/
};
