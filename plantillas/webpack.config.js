const HtmlWebpackPlugin = require("html-webpack-plugin");
const ZipPlugin = require("zip-webpack-plugin");
const path = require("path");
const crypto = require('crypto');

const ruleBabel = {
  test: /\.js/,
  loader: "babel-loader",
  options: {
    presets: [["@babel/preset-env"]],
  },
};

const ruleCSS = {
  test: /\.css/,
  use: ["style-loader", "css-loader"],
};

const ruleJson = {
  test: /\.json$/,
  type: "javascript/auto",

  use: {
    loader: "json-loader",
  },
};

const ruleJpg = {
  test: /\.jpg/,
  type: "asset/resource",
};

const rulePng = {
  test: /\.png/,
  type: "asset/inline",
};

module.exports = {
  mode: "production",
  entry: "./plantillas/dnd-imagen-area/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.[contenthash].js",
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./public/index.html" }),
    new ZipPlugin({
      path: path.resolve(__dirname, "zips"),
      filename: `${crypto.randomBytes(20).toString('hex')}.zip`,
      extension: "zip",
    }),
  ],
  module: {
    rules: [ruleBabel, ruleCSS, ruleJson, ruleJpg, rulePng],
  },
  devServer: {
    port: 5500,
  },
};
