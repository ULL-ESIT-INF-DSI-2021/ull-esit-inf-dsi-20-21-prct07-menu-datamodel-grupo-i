import 'mocha';
import {expect} from 'chai';

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

describe('Plate function test', () => {
  it('Creación de objeto plate ', () => {
    expect(new Plate('Primer plato',
        [Tomate, Lechuga, Cebolla], [200, 120, 100])).not.to.be.equal(null);
  });
  it('Comprobacion de getComposition', () => {
    expect(Plato1.getComposition()).eql([93, 5, 15, 0]);
  });
  it('Comprobación de addPrice y getPrice', () => {
    expect(Plato1.getPrice()).to.be.equal(5.33);
  });
  it('Comprobación de foodPredominante', () => {
    expect(Plato1.getPredominant()).to.be.equal('Grupo2');
  });
});
