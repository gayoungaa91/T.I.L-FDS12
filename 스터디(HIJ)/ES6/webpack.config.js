// node환경뿐 아니라 브라우저에서도 볼수 있도록 설정
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
}