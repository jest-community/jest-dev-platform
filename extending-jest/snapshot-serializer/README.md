# Custom matchers

Jest allows you to add customer snapshot serializers with `expect.addSnapshotSerializer`.

We have a list of films that are presented in a UI as `TITLE EMOJI` and we want to write a custom snapshot serializer to store them in the same format as our UI.

Currently by default serializing the movies list with the default snapshot will yeild:

```
exports[`Returns the movies that match the query 1`] = `
Array [
  Object {
    "emoji": "❄️👗",
    "title": "Frozen",
    "year": 2013,
  },
  Object {
    "emoji": "️️️️❄️👗✌️",
    "title": "Frozen 2",
    "year": "TBA",
  },
  Object {
    "emoji": "🔎🐠",
    "title": "Finding Nemo",
    "year": 2003,
  },
  Object {
    "emoji": "👊💥🐼",
    "title": "Kung Fu Panda",
    "year": 2008,
  },
]
`;
```

This isn't the format used in the UI and leaks the internal implementation details of the data structure.

We want it to look like:

```
exports[`Returns the movies that match the query 1`] = `
Array [
  ❄️👗 Frozen,
  ️️️️❄️👗✌️ Frozen 2,
  🔎🐠 Finding Nemo,
  👊💥🐼 Kung Fu Panda,
]
`;
```

## Exercise

Write a custom snapshot serializer to store the movies in the above format without leaking the implementation.

Currently there is one test with the correct snapshot saved, you need to build a serializer that will keep the test passing.

## Links

- [docs](https://jestjs.io/docs/en/expect#expectaddsnapshotserializerserializer)
