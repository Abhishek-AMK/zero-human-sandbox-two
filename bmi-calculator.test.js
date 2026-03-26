const fs = require('fs');
const path = require('path');
const vm = require('vm');
const assert = require('assert');

const htmlPath = path.join(__dirname, 'bmi-calculator.html');
const html = fs.readFileSync(htmlPath, 'utf8');
const scriptMatch = html.match(/<script>([\s\S]*)<\/script>/);

if (!scriptMatch) {
  throw new Error('No inline script found in bmi-calculator.html');
}

function createElement(initial = {}) {
  return {
    value: initial.value || '',
    innerHTML: initial.innerHTML || '',
    listeners: {},
    classList: {
      classes: new Set(),
      add(name) { this.classes.add(name); },
      remove(name) { this.classes.delete(name); },
      contains(name) { return this.classes.has(name); },
    },
    addEventListener(event, handler) {
      this.listeners[event] = handler;
    },
  };
}

const elements = {
  height: createElement(),
  weight: createElement(),
  result: createElement({ innerHTML: '<strong>Your result will appear here</strong>Enter your height and weight, then press calculate.' }),
  calculate: createElement(),
  reset: createElement(),
};

const context = {
  window: {},
  document: {
    getElementById(id) {
      return elements[id];
    },
  },
  console,
};

context.window = context;
vm.createContext(context);
vm.runInContext(scriptMatch[1], context);

const api = context.BMICalculator;
assert.ok(api, 'BMICalculator API should be available');

assert.strictEqual(api.parsePositiveNumber('170'), 170);
assert.strictEqual(api.parsePositiveNumber('65.5'), 65.5);
assert.strictEqual(api.parsePositiveNumber(''), null);
assert.strictEqual(api.parsePositiveNumber('-1'), null);
assert.strictEqual(api.parsePositiveNumber('abc'), null);

assert.strictEqual(Number(api.calculateBMI(170, 65).toFixed(1)), 22.5);
assert.strictEqual(api.getBMICategory(17.4), 'Underweight');
assert.strictEqual(api.getBMICategory(22.5), 'Normal weight');
assert.strictEqual(api.getBMICategory(28.2), 'Overweight');
assert.strictEqual(api.getBMICategory(33.8), 'Obesity');

elements.height.value = '170';
elements.weight.value = '65';
elements.calculate.listeners.click();
assert.ok(elements.result.innerHTML.includes('BMI: 22.5'));
assert.ok(elements.result.innerHTML.includes('Normal weight'));
assert.ok(!elements.result.classList.contains('error'));

elements.height.value = '0';
elements.weight.value = '65';
elements.calculate.listeners.click();
assert.ok(elements.result.innerHTML.includes('Invalid input'));
assert.ok(elements.result.classList.contains('error'));

elements.height.value = '160';
elements.weight.value = '50';
elements.height.listeners.keydown({ key: 'Enter' });
assert.ok(elements.result.innerHTML.includes('BMI: 19.5'));
assert.ok(elements.result.innerHTML.includes('Normal weight'));

elements.height.value = '180';
elements.weight.value = '80';
elements.reset.listeners.click();
assert.strictEqual(elements.height.value, '');
assert.strictEqual(elements.weight.value, '');
assert.ok(elements.result.innerHTML.includes('Your result will appear here'));
assert.ok(!elements.result.classList.contains('error'));

console.log('BMI calculator tests passed');
