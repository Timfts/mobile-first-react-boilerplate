const { series } = require("gulp");

// tasks
const cleanDist = require("./tasks/clean-dist"),
  dev = require("./tasks/dev"),
  analyzeChunks = require("./tasks/analyze-chunks"),
  buildTask = require("./tasks/build");

const analyzeChunksTask = series(cleanDist, analyzeChunks);

exports.cleanDist = cleanDist;
exports.dev = dev;
exports.build = buildTask;
exports.analyzeChunks = analyzeChunksTask;
