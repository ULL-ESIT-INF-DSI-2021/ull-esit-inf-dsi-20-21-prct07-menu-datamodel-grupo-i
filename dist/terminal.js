"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer = require('inquirer');
const alimento_1 = require("../src/alimento");
const Tomate = new alimento_1.Food('Tomate', 'España', [22, 1, 3.5, 0.11], 1.75, 'Grupo2');
inquirer.prompt({
    type: 'list',
    name: 'color',
    message: 'cucu',
    choices: [Tomate, Tomate],
})
    .then((answers) => {
    console.log('respuesta', answers);
});
//# sourceMappingURL=terminal.js.map