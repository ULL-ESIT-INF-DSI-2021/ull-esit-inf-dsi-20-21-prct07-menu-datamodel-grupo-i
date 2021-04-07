import 'mocha';
import {expect} from 'chai';

import {Menu, menu} from "../src/menu";
import {Plate} from "../src/plato";
import {Food} from "../src/alimento";

const Tomate: Food = new Food('Tomate',
    'España', [22, 1, 3.5, 0.11], 1.75, 'Grupo2');
const Lechuga: Food = new Food('Lechuga',
    'España', [14, 1.34, 1.4, 0.2], 2.39, 'Grupo2');
const Cebolla: Food = new Food('Cebolla',
    'España', [33, 1.4, 7, 0], 1.19, 'Grupo2');
const Plato1 = new Plate('Primer plato',
    [Tomate, Lechuga, Cebolla], [200, 120, 100]);
const menusesss:menu=[Plato1, Plato1, Plato1];
const menues= new Menu(menusesss);
describe('Menu function test', () => {
  menues.write();
  // it('Creación de objeto plate ', () => {
  //   expect().not.to.be.equal(null);
  // });
});

