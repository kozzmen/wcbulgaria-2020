const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const perfectionist = require('perfectionist');

module.exports = {
  mode: 'production',
  entry: path.join(__dirname, 'js', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(css|scss|sass)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                perfectionist(),
              ],
            },
          },
          'sass-loader',
        ],
      }
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '../style.css',
    }),
  ],
};
