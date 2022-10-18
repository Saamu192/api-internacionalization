import DraftLog from "draftlog";
import chalk from "chalk";
import chalkTable from "chalk-table";
import readline from "readline";
import database from "./../database.json" assert { type: "json" };
import Person from "./persons.js";

DraftLog(console).addLineListener(process.stdin);

const table = chalkTable(
  options,
  database.map((element) => new Person(element).formatted())
);
const print = console.draft(table);
