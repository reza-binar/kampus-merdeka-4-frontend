/* Core module */
const os = require("os");
const fs = require("fs");
/* Local module is module that we have trained in advance in topic 3 (export-import), so we don't need to learn it again */
/* Third party module */
const chalk = require("chalk");

function tryModule() {
    const systemInfo = `platform: ${os.platform()}, arch: ${os.arch}`;
    console.log(systemInfo);

    const tryFile = fs.readFileSync("./try.json");
    console.log(tryFile.toString());

    console.log(chalk.blue("Hello world!"));
    console.log(chalk.red("I am red!"));
    console.log(chalk.green("I am green!"));
    console.log(chalk.cyan("I am cyan!"));

    console.log("try prettier");
}
tryModule();
