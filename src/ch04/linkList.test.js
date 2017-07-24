import isEmpty from 'lodash/fp/isEmpty';
import head from 'lodash/fp/head';
import tail from 'lodash/fp/tail';

// tail recursion
const reverse = (xs, acc=[]) => (
  isEmpty(xs)
    ? acc
    : reverse(tail(xs), [head(xs)].concat(acc))
);

// using reduce (fold) fn
const revReduce = (xs) => (
  xs.reduce((acc, x) => (
    [x].concat(acc)
  ), [])
);

describe('Reverse linked list', () => {
  it('should reverse array', () => {
    expect(reverse([1, 2, 3, 4, 5]))
      .toEqual([5, 4, 3, 2, 1]);
  });

  it('should reverse array with standard reduce function', () => {
    expect(revReduce([1, 2, 3, 4, 5]))
      .toEqual([5, 4, 3, 2, 1]);
  });

});
