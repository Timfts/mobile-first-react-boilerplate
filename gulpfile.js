const { series } = require("gulp");

// Export and compose tasks
const cleanDistTask = require("./tasks/clean-dist"),
  devTask = require("./tasks/dev"),
  analyzeChunksTask = require("./tasks/analyze-chunks"),
  buildTask = require("./tasks/build");

exports.dev = devTask;
exports.build = buildTask;
exports.analyzeChunks = series(cleanDistTask, analyzeChunksTask);
