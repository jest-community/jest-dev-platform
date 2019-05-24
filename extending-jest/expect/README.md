# Custom assertions

Jest allows you to extend `expect` using `expect.extend` so that you can build bespoke custom matchers that give error messages specific to your requirements.

In this task we have a simple `Counter` component which takes two props: 

```ts
{ 
  count: number,
  onClick: () => void
}
```

When rendering with an even number then the count will be displayed with an `even` className and an `odd` className when the count is odd.

We have three identical test suites, all asserting on the state of the element's className under different conditions. 

### Bad Suite

The first suite shows an example of *bad* assertions, that will result in error messages like:

```
expect(received).toBe(expected) // Object.is equality

Expected: true
Received: false
```

This is bad as it does not help the developer figure out what is wrong as it relies on boolean assertions!

### Slightly Better

The second suite shows an example of *Slightly Better* assertions, that will result in error messages like:

```
expect(received).toContain(expected)

Expected value:  "even"
Received object: {"0": "count", "1": "odd"}
```

This is slightly better as it points out that the value `even` was not in the `DOMTokenList` but it show's the classNames as being an Object which isn't very intuative.

### Good

The final suite shows an example of *Good* assertions, that will result in error messages like:

```
expect(received).toHaveClassName(expected)

Expected element to have className: "even"
Found classNames: ["count", "odd"]
```

This is much better as it explains what has gone wrong, specifically the element does not have the expected className: `even`.

It is also better as it prints the found classNames in a readable format that will help the developer figure out what actually went wrong.

## Exercise

Build a matcher called `.toHaveClassName` which takes an element and checks that it contains the expected className.

Open `src/exercise.test.js` and you will find the Counter component and three above test suites, and an empty implementation of `toHaveClassName` using `expect.extend`.

Try to implement this matcher using the docs below so that it gives a custom message of what went wrong e.g:

### Fails message

```ts
expect(document.getElementById(COUNTER_ID)).toHaveClassName('even');
```

```
expect(received).toHaveClassName(expected)

Expected element to have className: "even"
Found classNames: ["count", "odd"]
```

### Fails with .not message

```ts
expect(document.getElementById(COUNTER_ID)).not.toHaveClassName('even');
```

```
expect(received).not.toHaveClassName(expected)

Expected element to not have className: "even"
Found classNames: ["count", "even"]
```

### Fails when given invalid input

```ts
expect(null).toHaveClassName('even');
```

```
expect(received).toHaveClassName(expected)

Matcher error: "received" value must have ".classList" property

"received" has value: null
```

## Links

 - [`expect` docs](https://jestjs.io/docs/en/expect#expectextendmatchers)
 - [`jest-matcher-utils` source](https://github.com/facebook/jest/blob/master/packages/jest-matcher-utils/src/index.ts)
