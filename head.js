const fs = require("fs");

/* only returns first 5 lines since there are not that many lines */
module.exports = (done, cmd) => {
  fs.readFile(cmd, { encoding: "utf8" }, (err, file) => {
    if (err) {
      done("Something went wrong!");
    } else {
      var dataArr = file.toString().split("\n");
      done(dataArr.slice(0, 5).join("\n"));
    }
  });
};
