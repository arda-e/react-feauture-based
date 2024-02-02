const webpack = require('webpack')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const dotenv = require('dotenv')
const path = require('path')

dotenv.config({ path: path.resolve(__dirname, '../.env') })

module.exports = {
  mode: 'development',
  devServer: {
    hot: true,
    open: true,
    historyApiFallback: true,
    port: process.env.REACT_APP_PORT || 3000,
    proxy: {
      '/api/v1': {
        target: `http://localhost:${process.env.REACT_APP_PORT || 3000}`,
        router: () => `${process.env.BEND_URL}`,
        changeOrigin: true,
        secure: false,
        pathRewrite: { '^/api/v1': '' },
      },
    },
  },
  devtool: 'cheap-module-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('dev-plugin'),
    }),
    // Hot module replacement plugin
    new ReactRefreshWebpackPlugin(),
  ],
}
