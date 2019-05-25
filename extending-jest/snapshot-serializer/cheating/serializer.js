expect.addSnapshotSerializer({
  test: val => val.title && val.emoji,
  serialize: val => `${val.emoji} ${val.title}`
});
