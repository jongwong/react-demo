const baseConfig = require("./webpack.config.base");
const { merge } = require("webpack-merge");
const path = require("path");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
module.exports = merge(baseConfig, {
  mode: "development",
  devServer: {
    compress: true,
    port: 8080,
    hot: true,
    progress: true,
    watchContentBase: true,
    publicPath: "/",
    historyApiFallback: true,
    inline: true,
    clientLogLevel: "silent",
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)/,
        exclude: /(node_modules)/,
        include: [path.resolve(__dirname, "../src")],
        use: [
          {
            loader: "babel-loader",
            options: {
              plugins: [require.resolve("react-refresh/babel")],
            },
          },
        ],
      },
    ],
  },
  plugins: [new ReactRefreshWebpackPlugin()],
});
