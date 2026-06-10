const { appendFollowers, slugify } = require("./helpers");

describe("Slugify", () => {
  const stringsArray = [
    "  Hello World  ",
    "  Hello WORLD  ",
    " HELLO WORLD",
    "Hello World",
    "Hello_world ",
    "Hello-world",
  ];

  test.each(stringsArray)("%p", (string) => {
    expect(slugify(string)).toBe("hello-world");
  });
});

describe("appendFollowers", () => {
  test("does not call follower methods on author-backed records without an author", async () => {
    const record = {
      dataValues: { author: null },
      author: null,
      get: vi.fn(() => null),
      getAuthor: vi.fn(() => null),
    };

    await expect(appendFollowers(null, record)).resolves.toBeUndefined();

    expect(record.getAuthor).toHaveBeenCalled();
    expect(record.dataValues.author).toBeNull();
  });
});
