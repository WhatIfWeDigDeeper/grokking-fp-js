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

const positionOf = (xs, x, acc=0) => {
  if (isEmpty(xs)) {
    return -1;
  }
  return (head(xs) === x)
    ? acc
    : positionOf(tail(xs), x, acc + 1);
};

const valueAt = (xs, i, acc=0) => {
  if (isEmpty(xs))
    return null;
  return (i === acc)
    ? head(xs)
    : valueAt(tail(xs), i, acc + 1)
};

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

describe('valueAt', () => {
  it('should return value at position', () =>{
    expect(valueAt(['a','b','c'], 1))
      .toBe('b');
  });
  it('should return null for index outside', () => {
    expect(valueAt(['a','b','c'], 4))
      .toBeNull();
  })
});

describe('positionOf', () => {
  it('should return position of value', () =>{
    expect(positionOf(['a','b','c'], 'b'))
      .toEqual(1);
  });
  it('should return -1 when element not found', () => {
    expect(positionOf(['a','b','c'], 'e'))
      .toEqual(-1);
  })
});
