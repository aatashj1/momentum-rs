const path = require('path');

module.exports = {
  entry: './scripts./index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js',
  },
  module: {
    rules: [{
      test: /\.[tj]s$/,
      use: 'ts-loader',
      exclude: /node_modules/,
    }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
};