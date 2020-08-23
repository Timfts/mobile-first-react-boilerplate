const { exec } = require("child_process");
const boilerplateConfig = require("../boilerplate.config");

function previewDistTask() {
  const port = `--port ${boilerplateConfig.previewServerPort || 8080}`;
  exec(`http-server ${port} dist -o -g`, (err, stdout, stderr) => {
    if (err) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  });
}

module.exports = previewDistTask;
