# Runners

In Jest realm a "runner" is a function, that passed a list of tests to run, is able to perform actions on that list, e.g. passing these files through other programs. There's technically nothing preventing us from using Jest as a runtime for linters, or even different programming languages.

Please see [the docs](https://jestjs.io/docs/en/configuration#runner-string) on the topic.

Since "runner" is a pretty raw (but powerful) API, one of the best way to utilize it is through [create-jest-runner](https://github.com/jest-community/create-jest-runner) community package. It takes care of handling the appropriate parallelization and creating a worker farm for your runner using the `jest-worker` package similar to Jest itself.

With `create-jest-runner` in place, to make your own runner you need to create 2 files:

- Entry file: Used by Jest as an entrypoint to your runner.
- Worker file: Runs once per test file, and it encapsulates the logic of your runner

## The exercise

The objective of this exercise is to create a custom runner Jest that valides files JS files for the presence of the copyright header. The Jest config is already set up to include the runner, you can find it in [runner.js](./runner.js) and [worker.js](./worker.js) file, which we'd like you to work with.

Features to implement:

1. Validation for the presence of `/** Copyright Header */` string.
1. Prints "Company policies require `/** Copyright Header */` present in every file." when the test fails.
1. Skips the file when `// disable-copyright-header` text is present.
