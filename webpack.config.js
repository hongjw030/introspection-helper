// webpack.config.js

const path = require('path');

module.exports = {
  entry: './scripts/popup.js',  // 프로그램의 진입점 파일을 지정합니다.
  output: {
    filename: 'bundle.js',   // 번들링된 파일의 이름을 지정합니다.
    path: path.resolve(__dirname, 'dist')  // 번들링된 파일의 저장 위치를 지정합니다.
  }
};
