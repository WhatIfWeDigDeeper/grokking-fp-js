import head from 'lodash/fp/head';
import tail from 'lodash/fp/tail';
import compose from 'lodash/fp/compose';

const splitBySpace = (val) => val.split(' ');

const firstInitial = (name) => (
  compose(head, head, splitBySpace)(name)
);

const lastName = (name) => (
  compose(tail, splitBySpace)(name)
);

const abbrevName = (name) => (
  `${firstInitial(name)}.${lastName(name)}`
);

// non-functional style
const abbreviateName = (name) => {
  const names = name.split(' ');
  const initial = names[0].charAt(0);
  return `${initial}.${names[1]}`;
};

describe('Abbreviation', () => {
  it('should get first letter', () => {
    expect(abbreviateName('Alonzo Church'))
      .toBe('A.Church');
  });
});

describe('Functional Style Abbreviation', () => {
  it('should get first letter', () => {
    expect(abbrevName('Alonzo Church'))
      .toBe('A.Church');
  });
});
