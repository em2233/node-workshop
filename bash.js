const pwd = require("./pwd");
const ls = require("./ls");
const cat = require("./cat");

//Output a prompt
process.stdout.write("prompt > ");

process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();
  const cmdArray = cmd.split(" ");

  if (cmd === "pwd") {
    pwd();
  } else if (cmd === "ls") {
    ls();
  } else if (cmdArray[0] === "cat") {
    for (let i = 1; i < cmdArray.length; i++) {
      cat(cmdArray[i]);
    }
  }

  // else if (cmd.substring(0, 3) === "cat") {
  //   cat(cmd.substring(4, cmd.length));
  else {
    process.stdout.write("You typed: " + cmd);
    process.stdout.write("\nprompt > ");
  }
});
