// tail recursion
const reverse = <T>(xs: T[], acc: T[] = []): T[] =>
  xs.length === 0 ? acc : reverse(xs.slice(1), [xs[0]].concat(acc));

// using reduce (fold) fn
const revReduce = <T>(xs: T[]): T[] => xs.reduce((acc: T[], x: T) => [x].concat(acc), []);

const positionOf = <T>(xs: T[], x: T, acc: number = 0): number => {
  if (xs.length === 0) {
    return -1;
  }
  return xs[0] === x ? acc : positionOf(xs.slice(1), x, acc + 1);
};

const valueAt = <T>(xs: T[], i: number, acc: number = 0): T | null => {
  if (xs.length === 0) return null;
  return i === acc ? xs[0] : valueAt(xs.slice(1), i, acc + 1);
};

describe('Reverse linked list', () => {
  it('should reverse array', () => {
    expect(reverse([1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1]);
  });

  it('should reverse array with standard reduce function', () => {
    expect(revReduce([1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1]);
  });
});

describe('valueAt', () => {
  it('should return value at position', () => {
    expect(valueAt(['a', 'b', 'c'], 1)).toBe('b');
  });
  it('should return null for index outside', () => {
    expect(valueAt(['a', 'b', 'c'], 4)).toBeNull();
  });
});

describe('positionOf', () => {
  it('should return position of value', () => {
    expect(positionOf(['a', 'b', 'c'], 'b')).toEqual(1);
  });
  it('should return -1 when element not found', () => {
    expect(positionOf(['a', 'b', 'c'], 'e')).toEqual(-1);
  });
});
