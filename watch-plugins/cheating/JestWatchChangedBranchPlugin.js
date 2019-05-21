class JestWatchChangedBranchPlugin {
  constructor({ config } = {}) {
    this.branch = 'master';
    if (config && config.branch) {
      this.branch = config.branch;
    }
  }

  apply(jestHooks) {
    jestHooks.onTestRunComplete((results, x) => {
      if (this.plugginWasTriggered) {
        console.log(`Ran all tests since ${this.branch} branch.`);
      }
      this.plugginWasTriggered = false;
    });
  }

  getUsageInfo() {
    return {
      key: 'b',
      prompt: `test changes since ${this.branch}`,
    };
  }

  run(globalConfig, updateConfigAndRun) {
    this.plugginWasTriggered = true;
    updateConfigAndRun({ mode: 'watch', changedSince: this.branch });
    return Promise.resolve();
  }
}

module.exports = JestWatchChangedBranchPlugin;
