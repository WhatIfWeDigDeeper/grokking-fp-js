import tail from 'lodash/fp/tail';
import isEmpty from 'lodash/fp/isEmpty';
import drop from 'lodash/fp/drop';
import curry from 'lodash/fp/curry';
import compose from 'lodash/fp/compose';
import join from 'lodash/fp/join';

const dropSlice = (num, ary) => (
  (isEmpty(ary))
    ? ary
    : ary.slice(num)
);


const dropRecursive = (num, ary) => (
  (isEmpty(ary) || num <= 0)
    ? ary
    : dropRecursive(num - 1, tail(ary))
);

const aryToString = join('');

describe('dropRecursive custom', () => {

  it('should drop with slice', () => {
    const dropSlice3 = curry(dropSlice)(3);
    const lastName = compose(
      aryToString,
      dropSlice3
    );
    expect(lastName('A. Church'))
      .toEqual('Church');
  });

  it('should dropRecursive 3', () => {
    const dropRecursive3 = curry(dropRecursive)(3);
    const lastName = compose(
      aryToString,
      dropRecursive3
    );
    expect(lastName('A. Church'))
      .toEqual('Church');
  });

});

describe('lodash', () => {
  describe('drop - already curried', () => {
    it('should drop first 3 characters', () => {
      const lastName = compose(
        aryToString,
        drop(3)
      );
      expect(lastName('A. Church'))
        .toEqual('Church');
    });
  })
});