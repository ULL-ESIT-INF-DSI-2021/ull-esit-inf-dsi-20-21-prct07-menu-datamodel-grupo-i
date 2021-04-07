import 'mocha';
import {expect} from 'chai';

import {Food} from "../src/alimento";

describe('Food function test', () => {
  const Almendra: Food = new Food('Almendra',
      'España', [431, 9, 57, 18.1], 5.05, 'Grupo1');

  it('Creación de objeto Food ', () => {
    expect(new Food('Almendra', 'España',
        [431, 9, 57, 18.1], 5.05, 'Grupo1')).not.to.be.equal(null);
  });
  it('Comprobación de getName()', () => {
    expect(Almendra.getName()).to.be.equal('Almendra');
  });
  it('Comprobación de getGroup()', () => {
    expect(Almendra.getGroup()).to.be.equal('Grupo1');
  });
  it('Comprobación de getLocal()', () => {
    expect(Almendra.getLocal()).to.be.equal('España');
  });
  it('Comprobación de getPrice()', () => {
    expect(Almendra.getPrice()).to.be.equal(5.05);
  });
  it('Comprobación de getNutrients()', () => {
    expect(Almendra.getNutrients()).eql([431, 9, 57, 18.1]);
  });
});
