const inquirer = require('inquirer');
import {Food} from "../src/alimento";

const Tomate: Food = new Food('Tomate',
    'España', [22, 1, 3.5, 0.11], 1.75, 'Grupo2');

inquirer.prompt({
  type: 'list',
  name: 'color',
  message: 'cucu',
  choices: [Tomate, Tomate],
})
    .then((answers: any) => {
      console.log('respuesta', answers);
    });
