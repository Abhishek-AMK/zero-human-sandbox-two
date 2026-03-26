const fs = require('fs');
const path = require('path');
const assert = require('assert');

const html = fs.readFileSync(path.join(__dirname, 'button.html'), 'utf8');

assert.ok(/<button[^>]*class="button"[^>]*type="button"[^>]*>Get Started<\/button>/.test(html), 'semantic button should exist');
assert.ok(/\.button\s*\{[\s\S]*background:\s*linear-gradient\(/.test(html), 'button should have gradient styling');
assert.ok(/\.button:hover\s*\{[\s\S]*transform:/.test(html), 'hover state should define transform');
assert.ok(/\.button:active\s*\{[\s\S]*transform:/.test(html), 'active state should define transform');
assert.ok(/\.button:focus-visible\s*\{[\s\S]*box-shadow:/.test(html), 'focus-visible state should exist');
assert.ok(/background:[\s\S]*linear-gradient\(135deg, var\(--bg-start\), var\(--bg-end\)\)/.test(html), 'page should support dark-mode background');

console.log('Button component tests passed');
