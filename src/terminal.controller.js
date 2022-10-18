import readline from "readline";

export default class TerminalController {
  constructor() {}

  question(msg = "") {
    const terminal = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }
}
