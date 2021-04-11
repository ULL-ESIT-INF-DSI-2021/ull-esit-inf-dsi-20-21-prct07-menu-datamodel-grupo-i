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
const menu1:menu=[Plato1, Plato1, Plato1];
const menu11= new Menu(menu1);

describe('Menu function test', () => {
  menu11.write();
  it('Creación de objeto plate ', () => {
    expect(new Menu(menu1)).not.to.be.equal(null);
  });
  it('Comprobación de método precioTotal ', () => {
    expect(menu11.precioTotal()).to.be.equal(15.99);
  });
  it('Comprobación de método comprobarMenu', () => {
    expect(menu11.comprobarMenu()).to.be.equal(false);
  });
  it('Comprobación de método composicionNutricionalMenu', () => {
    expect(menu11.composicionNutricionalMenu()).eql([279, 15, 45, 0]);
  });
  it('Comprobación de método listadoGruposAlimentos', () => {
    expect(menu11.listadoGruposAlimentos()).eql(["Grupo2", "Grupo2", "Grupo2"]);
  });
});

