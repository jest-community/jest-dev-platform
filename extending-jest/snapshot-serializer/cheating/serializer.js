expect.addSnapshotSerializer({
  test: val => val.title && val.emoji,
  print: val => `${val.emoji} ${val.title}`
});
