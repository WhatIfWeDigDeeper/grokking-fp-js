// import * as fp from 'lodash/fp';

const abbreviateName = (name) => {
  const names = name.split(' ');
  const initial = names[0].charAt(0);
  return `${initial}.${names[1]}`;
};

describe('Abreviation', () => {
  it('should get first letter', () => {
    expect(abbreviateName('Alonzo Church'))
      .toBe('A.Church');
  });
});
