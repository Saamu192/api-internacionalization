import chalk from "chalk";
import chalkTable from "chalk-table";
import readline from "readline";
import Person from "./persons.js";

export default class TerminalController {
  constructor() {
    this.print = {};
    this.data = {};
  }

  initializeTable(database, language) {
    const data = database.map((element) =>
      new Person(element).formatted(language)
    );
    const table = chalkTable(this.getTableOptions(), data);
    this.print = console.draft(table);
    this.data = data;
  }

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
