const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const WebpackBar = require("webpackbar");
module.exports = {
  entry: {
    index: path.resolve(__dirname, "../src/index.tsx"),
  },
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].bundle.js",
  },
  resolve: {
    extensions: [
      ".tsx",
      ".ts",
      ".jsx",
      ".js",
      ".scss",
      ".less",
      ".css",
      ".json",
    ],
    alias: {
      "@": path.resolve(__dirname, "../src"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js|ts|tsx)$/,
        exclude: [/node_modules/],
        include: [path.resolve(__dirname, "../src")],
        use: ["eslint-loader"],
        enforce: "pre",
      },
      {
        test: /\.(js|jsx|ts|tsx)/,
        exclude: /(node_modules)/,
        include: [path.resolve(__dirname, "../src")],
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
      // url-loader 是基于 file-loader 封装的，可以把小文件转换为 base64 格式的 URL，从而减少网络请求次数
      /*      {
        test: /\.(png|jpg|jpeg|gif|bmp|svg|webp|ico)$/,
        loader: "url-loader",
        exclude: /node_modules/,
        options: {
          limit: 8192,
          name: "static/media/[name].[hash:8].[ext]",
          esModule: false,
        },
      },
      {
        loader: "file-loader",
        exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
        options: {
          name: "static/media/[name].[hash:8].[ext]",
          esModule: false,
        },
      },*/
    ],
  },

  // babel-preset-es2015
  optimization: {
    // 将每个js文件打包形成一个单独的js文件，而非一个整体文件
    splitChunks: {
      // minSize: 2000, // 3kb   表示在压缩前的最小模块大小,默认值是30kb
      chunks: "all", // 同时分割同步和异步代码,推荐。
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "public/index.html",
      filename: "index.html",
      hash: true, // 在打包的资源插入html会加上hash
      //  html 文件进行压缩
      minify: {
        removeComments: true, //去注释
        collapseWhitespace: true, //压缩空格
        removeAttributeQuotes: true, //去除属性引用
      },
      inject: true, // true：默认值，script标签位于html文件的 body 底部
    }),
    new miniCssExtractPlugin({
      filename: "focus.index.[contenthash:8].css",
    }),
    new WebpackBar(),
  ],
};
