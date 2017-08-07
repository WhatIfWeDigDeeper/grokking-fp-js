class Book {
  constructor(title, price) {
    this.title = title;
    this.price = price;
    Object.freeze(this);
  }
}

const sum = (a, b) => a + b;

const total = (books) => (
  books.map(x => x.price).reduce(sum)
);

describe('Immutable', () => {
  it('should be immutable', () => {
    const book = new Book('1984', 11.99);
    // will throw if try to change title or price.
    expect(book.title).toEqual('1984');
  });

  it('should total books correctly', () => {
    const books = [
      new Book('1984', 10.99),
      new Book('2001', 9.01)
    ];
    expect(total(books)).toEqual(20.0);
  })
});