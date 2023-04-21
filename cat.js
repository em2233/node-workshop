const fs = require("fs");

module.exports = function cat(filename) {
  fs.readFile(filename, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
    process.stdout.write("\nprompt > ");
  });
};
