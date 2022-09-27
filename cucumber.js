const editor = [
  '--require ./src/steps/*.ts', // Load step definitions
  '--require-module ts-node/register', // Load TypeScript module
  '--publish-quiet' // Dont show comment 
]

const terminal = [
  'features/*.feature', // Specify our feature files
  '--require ./build/steps/*.js' // Load step definitions
]

module.exports = {
  default: editor.join(' '),
  terminal: terminal.join(' ')
}