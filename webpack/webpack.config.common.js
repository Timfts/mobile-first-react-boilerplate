const { resolve, join } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// src directory of the application
const srcDir = resolve(__dirname, "../src")


module.exports = {
  context: srcDir, // set src as context for  webpack configurations
  target: "web",
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"], // no necessity to write this extensions on every import
    // allow absolute imports on files
     alias: {
      "@components": join(srcDir, 'components/'),
      "@functions": join(srcDir, 'functions/'),
      "@hooks": join(srcDir, 'hooks/'),
      "@theme": join(srcDir, 'theme/'),
      "@assets": join(srcDir, 'assets/'),
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader', 'source-map-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.tsx?$/,
        use: 'babel-loader',
        exclude: "/node_modules/",
      },
    ],
  },
  output: {
    filename: "[name].js",
    chunkFilename: "bundle.[name].js",
    path: resolve(__dirname, "../dist"),
    publicPath: "/",
  },
  plugins: [new HtmlWebpackPlugin({ template: "index.ejs" })],
};
