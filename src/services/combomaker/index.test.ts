
import { ComboMaker } from '.';
import { Combination } from '../../domain/combination';

test('it returns an instruction set ', () => {
 var result = new ComboMaker().start(3,4);

  expect(result).toBeDefined();
});

test('should return an even number', () => {
 var result: number = new ComboMaker().randomEven();
  expect((result % 2 == 0) ).toEqual(true);
});

test('should return an odd number', () => {
 var result: number = new ComboMaker().randomOdd();

  expect((result % 2 == 0) ).toEqual(false);
});

test('should create a cadence delta', () => {
 var result: number = new ComboMaker().randomCadence();
  expect(result).toBeDefined();
});

test('should create a combination', () => {
 var combinations:  Array<Combination> = new ComboMaker().createCombination(4);
  expect(combinations.length).toEqual(4);
});
