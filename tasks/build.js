const bundleTask = require("./bundle");
const cleanDistTask = require("./clean-dist");
const { argv } = require("yargs");
const ReactSnap = require("react-snap");

async function buildTask() {
  const shouldPreRenderDist = !!argv["pre-render"];
  await cleanDistTask();
  await bundleTask();
  console.log("\x1b[32m", "Bundled Typescript", "\x1b[0m");

  if (shouldPreRenderDist) {
    console.log("\x1b[36m", "Started pre-rendering", "\x1b[0m");
    await ReactSnap.run({
      source: "dist",
    });
  }
}

module.exports = buildTask;
