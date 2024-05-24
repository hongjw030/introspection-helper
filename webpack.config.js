// webpack.config.js

const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  mode:"production",
  entry: './scripts/popup.js',  // 프로그램의 진입점 파일을 지정합니다.
  output: {
    filename: 'bundle.js',   // 번들링된 파일의 이름을 지정합니다.
    path: path.resolve(__dirname, 'dist')  // 번들링된 파일의 저장 위치를 지정합니다.
  },
  module:{
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ]
  },
  resolve: {
    extensions: ['.js'], // 여기서 확장자 설정
  },
  plugins: [
    new BundleAnalyzerPlugin(),
    new MiniCssExtractPlugin(),
    new webpack.IgnorePlugin({
      resourceRegExp: /^\.\/locale$/,
      contextRegExp: /moment$/,
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin({
      terserOptions: {
        compress: {
          drop_console: true, // 콘솔 로그를 제거
        },
        format: {
          comments: false, // 주석을 제거
        },
      },
      extractComments: false, // 별도의 주석 파일을 만들지 않음
    })],
  },
};
