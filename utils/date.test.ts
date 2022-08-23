import { assertEquals } from 'asserts';

import { closestMonth } from './date.ts';

type TestCase<I, E> = {
  input: I;
  expected: E;
};

Deno.test('closestMonth', () => {
  const cases: TestCase<Date, number>[] = [
    { input: new Date('2022-01-02'), expected: 11 },
    { input: new Date('2022-01-20'), expected: 1 },
    { input: new Date('2022-03-04'), expected: 1 },
    { input: new Date('2022-12-30'), expected: 0 },
  ];
  cases.forEach(({ input, expected }) => {
    assertEquals(closestMonth(input), expected);
  });
});
