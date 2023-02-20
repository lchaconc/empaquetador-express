const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const ruleBabel = {
  test: /\.js/,
  loader: "babel-loader",
  options: {
    presets: [
      [       
        "@babel/preset-env",
      ],
    ],
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

module.exports =  {
    mode: "production",
    entry: "./dnd-imagen-area/main.js",
    output: {
      path: path.resolve(__dirname, "dist" ),
      filename:  'bundle.[contenthash].js'      
    },
    plugins: [new HtmlWebpackPlugin({ template: "./dnd-imagen-area/index.html" })],
    module: {
      rules: [ruleBabel, ruleCSS, ruleJson, ruleJpg, rulePng],
    },
    devServer: {
      port: 5500,
    },
  
};
