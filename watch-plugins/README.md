# Watch Plugins

The Jest watch plugin system provides a way to hook into specific parts of Jest and to define watch mode menu prompts that execute code on key press. Combined, these features allow you to develop interactive experiences custom for your workflow.

Please see [the docs](https://jestjs.io/docs/en/watch-plugins) on the topic.

## The exercise

The objective of this exercise is to create a watch plugin for running Jest with [`--changedSince`](https://jestjs.io/docs/en/cli#changedsince) flag. It's a nice option that lets you run the code related to the changes since the provided branch. The Jest config is already set up to include the plugin, you can find it in [JestWatchChangedBranchPlugin.js](./JestWatchChangedBranchPlugin.js) file, which we'd like you to work with.

Features to implement:

1. Accept configuration object of this shape: `{branch: string}`.
1. If no configuration is passed, use `master` branch as the default.
1. The text given by the plugin in the "Watch Usage" section when running `jest --watch` should be: "Press b to test changes since {branch}".
1. Prints "Ran all tests since {branch} branch." after test run triggered by "b" key is completed.
