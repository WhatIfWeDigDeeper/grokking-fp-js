const splitBySpace = (val: string): string[] => val.split(' ');

const firstInitial = (name: string): string => splitBySpace(name)[0].charAt(0);

const lastName = (name: string): string => splitBySpace(name)[1];

const abbrevName = (name: string): string => `${firstInitial(name)}.${lastName(name)}`;

// non-functional style
const abbreviateName = (name: string): string => {
  const names = name.split(' ');
  const initial = names[0].charAt(0);
  return `${initial}.${names[1]}`;
};

describe('Abbreviation', () => {
  it('should get first letter', () => {
    expect(abbreviateName('Alonzo Church')).toBe('A.Church');
  });
});

describe('Functional Style Abbreviation', () => {
  it('should get first letter', () => {
    expect(abbrevName('Alonzo Church')).toBe('A.Church');
  });
});
