const HtmlPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './',
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlPlugin(),
  ],
}
