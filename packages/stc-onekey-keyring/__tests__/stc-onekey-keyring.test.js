'use strict';

const stcOnekeyKeyring = require('..');
const assert = require('assert').strict;

assert.strictEqual(stcOnekeyKeyring(), 'Hello from stcOnekeyKeyring');
console.info('stcOnekeyKeyring tests passed');
