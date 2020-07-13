const path = require('path');
const { resolve } = require('path');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/app.js'
  },
  output: {
    path: resolve('./dist'),
    filename:'[name]'.js
  }
}