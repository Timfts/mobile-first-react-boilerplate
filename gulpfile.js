const cleanDist = require("./tasks/clean-dist");
const bundle = require("./tasks/bundle");
const dev = require("./tasks/dev");
const analyzeChunks = require("./tasks/analyze-chunks");
const { series } = require("gulp");

exports.cleanDist = cleanDist;
exports.dev = dev;
exports.build = series(cleanDist, bundle);
exports.analyzeChunks = series(cleanDist, analyzeChunks);
