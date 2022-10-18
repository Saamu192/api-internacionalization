import database from "./../database.json" assert { type: "json" };
import Person from "./persons.js";
import TerminalController from "./terminal.controller.js";

const DEFAULT_LANG = "pt-BR";
const STOP_TERM = ":q";

const terminalController = new TerminalController();
terminalController.initializeTerminal(database, DEFAULT_LANG);
