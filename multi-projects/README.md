# Multiple projects

Jest lets you use multiple configuration files, which is especially handy for running different types of files using a single Jest instance. In fact, as we've seen in the `runners` exercise, Jest is able to run any kind of code, not only tests. Now imagine you can combine different test runs under a single command. That's what [`projects`](https://jestjs.io/docs/en/configuration#projects-array-string-projectconfig) config option allows us to do.

Feel free to explore how you can run different tests and checks using Jest as a single point of entry. In the [`package.json`](./package.json) file you'll find a configuration that allows us running:

1. Regular tests
1. TypeScript checks
1. ESLint

## The exercise

Please play with the code, try to break stuff and see how Jest reacts to the changes. Then, we'd like you to implement following features:

1. Integrate the runner and the watch plugin we just built as separate projects
1. Add a pre-commit hook to run all your tests using a single Jest command for the files changed in this commit
