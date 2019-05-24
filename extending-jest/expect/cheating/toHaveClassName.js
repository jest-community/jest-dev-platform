expect.extend({
  toHaveClassName(actual, expected) {
    if (actual === null || actual === undefined || actual.className === undefined) {
      throw new Error(
        this.utils.matcherErrorMessage(
          this.utils.matcherHint('.toHaveClassName', 'received', 'expected', { isNot: this.isNot }),
          `${this.utils.printReceived('received')} value must have ${this.utils.printExpected('.classList')} property`,
          this.utils.printWithType(this.utils.printReceived('received'), actual, this.utils.stringify)
        )
      );
    }
    const passMessage = () =>
      this.utils.matcherHint('.not.toHaveClassName') +
      '\n\n' +
      'Expected element to not have className: ' +
      `${this.utils.printExpected(expected)}\n` +
      'Found classNames: ' +
      `${this.utils.printReceived(Object.values(actual.classList))}\n`;

    const failMessage = () =>
      this.utils.matcherHint('.toHaveClassName') +
      '\n\n' +
      'Expected element to have className: ' +
      `${this.utils.printExpected(expected)}\n` +
      'Found classNames: ' +
      `${this.utils.printReceived(Object.values(actual.classList))}\n`;

    const pass = actual.classList.contains(expected);

    if (pass) {
      return { pass: true, message: passMessage };
    }

    return { pass: false, message: failMessage };
  }
});
