const fs = require('fs');
const path = require('path');
const vm = require('vm');
const assert = require('assert');

const html = fs.readFileSync(path.join(__dirname, 'weather-widget.html'), 'utf8');
const scriptMatch = html.match(/<script>([\s\S]*)<\/script>/);

if (!scriptMatch) {
  throw new Error('No inline script found in weather-widget.html');
}

function createElement() {
  return {
    textContent: '',
  };
}

const elements = {
  location: createElement(),
  temperature: createElement(),
  condition: createElement(),
  humidity: createElement(),
  wind: createElement(),
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

assert.ok(context.WeatherWidget, 'WeatherWidget API should be exposed');
assert.strictEqual(context.WeatherWidget.weatherData.location, 'San Francisco');
assert.strictEqual(context.WeatherWidget.weatherData.temperature, 68);
assert.ok(context.WeatherWidget.weatherData.condition.includes('Partly cloudy'));
assert.strictEqual(elements.location.textContent, 'San Francisco');
assert.strictEqual(elements.temperature.textContent, '68°F');
assert.ok(elements.condition.textContent.includes('Partly cloudy'));
assert.strictEqual(elements.humidity.textContent, '56%');
assert.strictEqual(elements.wind.textContent, '8 mph');
assert.ok(/class="widget"/.test(html), 'widget container should exist');
assert.ok(/backdrop-filter:\s*blur\(/.test(html), 'glassmorphism blur should exist');
assert.ok(/linear-gradient\(135deg, var\(--bg-start\), var\(--bg-end\)\)/.test(html), 'dark background gradient should exist');

console.log('Weather widget tests passed');
