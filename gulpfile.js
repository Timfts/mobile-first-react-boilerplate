const cleanDist = require("./tasks/clean-dist");
const bundle = require("./tasks/bundle");
const { series } = require("gulp");

exports.cleanDist = cleanDist;
exports.build = series(cleanDist, bundle);
