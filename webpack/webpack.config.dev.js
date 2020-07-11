const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  target: "web",
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: "/node_modules/",
      },
    ],
  },
  output: {
    filename: "[name].js",
    chunkFilename: 'bundle.[name].js',
    path: path.resolve(__dirname, "../dist"),
  },
};
