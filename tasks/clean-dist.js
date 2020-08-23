const rimraf = require("rimraf");

/** Clear the dist folder */
function cleanDistTask() {
  return new Promise((resolve) => {
    rimraf("./dist/*", () => {
      resolve();
    });
  });
}

module.exports = cleanDistTask;
