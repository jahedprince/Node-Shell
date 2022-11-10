const pwd = require("./pwd");
const ls = require("./ls");
const cat = require("./cat");
const echo = require("./echo");
const date = require("./date");
const head = require("./head");
const tail = require("./tail");

process.stdout.write("prompt > ");

process.stdin.on("data", (data) => {
  let cmd = data.toString().trim();
  cmd = cmd.split(" ");
  if (cmd[0] === "pwd") {
    pwd(done);
  } else if (cmd[0] === "ls") {
    ls(done);
  } else if (cmd[0] === "cat") {
    cat(done, cmd[1]);
  } else if (cmd[0] === "echo") {
    cmd.shift();
    echo(done, cmd.join(" "));
  } else if (cmd[0] === "date") {
    date(done);
  } else if (cmd[0] === "head") {
    head(done, cmd[1]);
  } else if (cmd[0] === "tail") {
    tail(done, cmd[1]);
  } else {
    process.stdout.write("Incorrect command or command does not exist yet!");
    process.stdout.write("\nprompt > ");
  }
});

function done(output) {
  process.stdout.write(output);
  process.stdout.write("\nprompt > ");
}
