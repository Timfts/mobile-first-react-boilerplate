const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const webpackDevConfig = require("../webpack/webpack.config.dev");
const boilerplateConfig = require("../boilerplate.config");

function devTask() {
  const port = boilerplateConfig.devServerPort || 8081;
  const devServerConfig = {
    hot: true, // enable HMR on the server
    open: true,
    historyApiFallback: true,
  };

  const compiler = webpack(webpackDevConfig);

  const server = new WebpackDevServer(compiler, devServerConfig);

  server.listen(port, "localhost", () => {
    console.log(`Starting server on http://localhost:${port}`);
  });
}

module.exports = devTask;
