import React from 'react';
import ReactDOM from 'react-dom';

const COUNTER_ID = 'counter-button';

const isEven = n => n % 2 === 0;

const Counter = ({ count: defaultCount }) => {
  const [count, setCount] = React.useState(defaultCount);
  return (
    <button className={`count ${isEven(count) ? 'even' : 'odd'}`} id={COUNTER_ID} onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
};

expect.extend({
  toHaveClassName(actual, expected) {
    // TODO: implement this, see README.md
  }
});

describe('Jest workshop', () => {
  const div = document.createElement('div');

  beforeAll(() => {
    document.body.appendChild(div);
  });

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(div);
  });

  describe('bad', () => {
    test('renders with odd class name when given an initial count which is odd', () => {
      ReactDOM.render(<Counter count={1} />, div);
      expect(document.getElementById(COUNTER_ID).classList.contains('odd')).toBe(true);
      expect(document.getElementById(COUNTER_ID).classList.contains('even')).not.toBe(true);
    });

    test('renders with even class name when given an initial count which is even', () => {
      ReactDOM.render(<Counter count={2} />, div);
      expect(document.getElementById(COUNTER_ID).classList.contains('even')).toBe(true);
      expect(document.getElementById(COUNTER_ID).classList.contains('odd')).not.toBe(true);
    });

    test('renders with odd className when clicked on an even number', () => {
      ReactDOM.render(<Counter count={2} />, div);
      document.getElementById(COUNTER_ID).click();
      expect(document.getElementById(COUNTER_ID).classList.contains('odd')).toBe(true);
      expect(document.getElementById(COUNTER_ID).classList.contains('even')).not.toBe(true);
    });

    test('renders with even className when clicked on an odd number', () => {
      ReactDOM.render(<Counter count={1} />, div);
      document.getElementById(COUNTER_ID).click();
      expect(document.getElementById(COUNTER_ID).classList.contains('even')).toBe(true);
      expect(document.getElementById(COUNTER_ID).classList.contains('odd')).not.toBe(true);
    });
  });

  describe('slightly better', () => {
    test('renders with odd class name when given an initial count which is odd', () => {
      ReactDOM.render(<Counter count={1} />, div);
      expect(document.getElementById(COUNTER_ID).classList).toContain('odd');
      expect(document.getElementById(COUNTER_ID).classList).not.toContain('even');
    });

    test('renders with even class name when given an initial count which is even', () => {
      ReactDOM.render(<Counter count={2} />, div);
      expect(document.getElementById(COUNTER_ID).classList).toContain('even');
      expect(document.getElementById(COUNTER_ID).classList).not.toContain('odd');
    });

    test('renders with odd className when clicked on an even number', () => {
      ReactDOM.render(<Counter count={2} />, div);
      document.getElementById(COUNTER_ID).click();
      expect(document.getElementById(COUNTER_ID).classList).toContain('odd');
      expect(document.getElementById(COUNTER_ID).classList).not.toContain('even');
    });

    test('renders with even className when clicked on an odd number', () => {
      ReactDOM.render(<Counter count={1} />, div);
      document.getElementById(COUNTER_ID).click();
      expect(document.getElementById(COUNTER_ID).classList).toContain('even');
      expect(document.getElementById(COUNTER_ID).classList).not.toContain('odd');
    });
  });

  describe.skip('good', () => {
    test('renders with odd class name when given an initial count which is odd', () => {
      ReactDOM.render(<Counter count={1} />, div);
      expect(null).toHaveClassName('even');
      expect(document.getElementById(COUNTER_ID)).toHaveClassName('even');
      expect(document.getElementById(COUNTER_ID)).not.toHaveClassName('even');
    });

    test('renders with even class name when given an initial count which is even', () => {
      ReactDOM.render(<Counter count={2} />, div);
      expect(document.getElementById(COUNTER_ID)).toHaveClassName('even');
      expect(document.getElementById(COUNTER_ID)).not.toHaveClassName('odd');
    });

    test('renders with odd className when clicked on an even number', () => {
      ReactDOM.render(<Counter count={2} />, div);
      document.getElementById(COUNTER_ID).click();
      expect(document.getElementById(COUNTER_ID)).toHaveClassName('odd');
      expect(document.getElementById(COUNTER_ID)).not.toHaveClassName('even');
    });

    test('renders with even className when clicked on an odd number', () => {
      ReactDOM.render(<Counter count={1} />, div);
      document.getElementById(COUNTER_ID).click();
      expect(document.getElementById(COUNTER_ID)).toHaveClassName('even');
      expect(document.getElementById(COUNTER_ID)).not.toHaveClassName('odd');
    });
  });
});
