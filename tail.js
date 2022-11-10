const fs = require("fs");

/* only returns last 5 lines since there are not that many lines */
module.exports = (done, cmd) => {
  fs.readFile(cmd, { encoding: "utf8" }, (err, file) => {
    if (err) {
      done("Something went wrong!");
    } else {
      var dataArr = file.toString().split("\n");
      var length = dataArr.length;
      done(dataArr.slice(length - 5).join("\n"));
    }
  });
};
