const fs = require('fs');
const { pass, fail, skip } = require('create-jest-runner');

module.exports = ({ testPath }) => {
  const start = Date.now();
  const contents = fs.readFileSync(testPath, 'utf8');
  const end = Date.now();
  const title = 'Check for copyright header';

  if (contents.includes('// disable-copyright-header')) {
    return skip({ start, end, test: { path: testPath, title } });
  }
  if (contents.includes('/** Copyright Header */')) {
    return pass({ start, end, test: { path: testPath, title } });
  }
  const errorMessage =
    'Company policies require "/** Copyright Header */" present in every file.';
  return fail({
    start,
    end,
    test: {
      path: testPath,
      errorMessage,
      title,
    },
  });
};
