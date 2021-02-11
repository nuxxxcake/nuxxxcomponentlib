const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/components/index.js',
  output: {
    path: path.resolve('dist/'),
    filename: 'index.js',
    library: 'nuxxxcomponentlib',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      { 
        test: /\.(js|jsx)$/i,
        exclude: '/node_modules/',
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: { name: '[contenthash].[ext]' }
      }
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'src/styles', to: 'styles' },
        { from: 'src/icons', to: 'icons' },
      ],
    }),
  ],
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.es6']
  },
  externals: { react: 'react' }
};