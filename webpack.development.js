const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'js', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: 'https://localhost:8080/',
  },
  module: {
    rules: [
      {
        test: /\.s(a|c)ss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      }
    ],
  },
  devServer: {
    hot: true,
    public: 'localhost:8080',
    /*host: 'localhost',*/
    https: true,
    disableHostCheck: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    overlay: true,
  },
};
