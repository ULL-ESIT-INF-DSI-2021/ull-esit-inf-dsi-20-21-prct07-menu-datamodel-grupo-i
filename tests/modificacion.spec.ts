/* eslint-disable max-len */
import 'mocha';
import {expect} from 'chai';

import {OperacionReduce, AddReduce, SubReduce, ProdReduce, DivReduce} from "../src/modificacion";

describe('OperacionReduce test', () => {
  const array:number[]= [1, 2, 3, 4];

  it('Prueba de la clase AddReduce  ', () => {
    const add:AddReduce= new AddReduce(array);
    expect(add).instanceOf(AddReduce);
  });
  it('Prueba de la clase SubReduce ', () => {
    expect(new SubReduce(array)).instanceOf(SubReduce);
  });
  it('Prueba de la clase ProdReduce ', () => {
    expect(new ProdReduce(array)).instanceOf(ProdReduce);
  });
  it('Prueba de la clase DivReduce ', () => {
    expect(new DivReduce(array)).instanceOf(DivReduce);
  });
});
