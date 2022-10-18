import DraftLog from "draftlog";

import readline from "readline";
import database from "./../database.json" assert { type: "json" };
import Person from "./persons.js";

DraftLog(console).addLineListener(process.stdin);
