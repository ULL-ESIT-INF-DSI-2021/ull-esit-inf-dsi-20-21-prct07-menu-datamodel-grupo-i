"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const carta_1 = require("./database/carta");
const inquirer_1 = __importDefault(require("inquirer"));
//import {Carta} from "./carta";
//const collection: Carta = new JsonTaskCollection("Fazt", platos);
/* function displayTaskList(): void {
  console.log(
    `${collection.userName}'s Tasks ` +
      `(${collection.getTaskCounts().inselect} tasks to do)`
  );
  collection.getTaskItems(showselectd).forEach(task => task.printDetails());
}*/
// Opciones que tendra el usuario
var Commands;
(function (Commands) {
    Commands["Add"] = "Add New menu";
    Commands["Select"] = "Select menu";
})(Commands || (Commands = {}));
/* async function promptAdd(): Promise<void> {
  console.clear();
  const answers = await inquirer.prompt({
    type: "input",
    name: "add",
    message: "Enter task:"
  });
  if (answers["add"] !== "") {
    collection.addTask(answers["add"]);
  }
  promptUser();
}*/
async function promptSelect() {
    console.clear();
    const answers = await inquirer_1.default.prompt({
        type: "list",
        name: "select",
        message: "seleccione menu",
        choices: Object.values(carta_1.carta.getMenus())
    });
    //let selectdTasks = answers["select"] as number[];
}
//FUNCION PRINCIPAL
async function promptUser() {
    console.clear();
    // displayTaskList();
    carta_1.carta.getInfo();
    const answers = await inquirer_1.default.prompt({
        type: "list",
        name: "command",
        message: "Choose option",
        choices: Object.values(Commands)
    });
    switch (answers["command"]) {
        case Commands.Add:
            //promptAdd();
            console.log("en progreso");
            break;
        case Commands.Select:
            promptSelect();
            promptUser();
            break;
    }
}
promptUser();
//# sourceMappingURL=index.js.map