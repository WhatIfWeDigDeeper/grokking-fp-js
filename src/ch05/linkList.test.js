import isEmpty from 'lodash/fp/isEmpty';
import head from 'lodash/fp/head';
import tail from 'lodash/fp/tail';

const reverse = (xs, acc=[]) => (
  isEmpty(xs)
    ? acc
    : reverse(tail(xs), [head(xs)].concat(acc))
);

describe('Reverse linked list', () => {
  it('should reverse array', () => {
    expect(reverse([1, 2, 3, 4, 5]))
      .toEqual([5, 4, 3, 2, 1]);
  });
});