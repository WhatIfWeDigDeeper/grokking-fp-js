import head from 'lodash/fp/head';
import tail from 'lodash/fp/tail';
import compose from 'lodash/fp/compose';

const splitBySpace = (val: any): any => val.split(' ');

const firstInitial = (name: any): any => (
  compose(head, head, splitBySpace)(name)
);

const lastName = (name: any): any => (
  compose(tail, splitBySpace)(name)
);

const abbrevName = (name: any): any => (
  `${firstInitial(name)}.${lastName(name)}`
);

// non-functional style
const abbreviateName = (name: any): any => {
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
