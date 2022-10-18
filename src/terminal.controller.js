import readline from "readline";

export default class TerminalController {
  constructor() {}

  question(msg = "") {
    const terminal = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }

  getTableOptions() {
    return {
      leftPad: 2,
      columns: [
        { field: "id", name: chalk.cyan("ID") },
        { field: "vehicles", name: chalk.magenta("vehicles") },
        { field: "kmTraveled", name: chalk.green("km Traveled") },
        { field: "from", name: chalk.cyan("From") },
        { field: "to", name: chalk.cyan("To") },
      ],
    };
  }
}
