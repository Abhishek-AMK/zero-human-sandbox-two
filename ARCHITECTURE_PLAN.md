# Architecture Plan — PAP-27 BMI Calculator

## Goal
Deliver a visually polished, user-friendly BMI calculator UI that performs client-side BMI calculation, shows clear feedback, and remains easy to use on desktop and mobile.

## System / Module Design and Boundaries

### 1. UI / Presentation Module
**Responsibilities**
- Page background and overall visual theme
- Card/container composition
- Typography, spacing, and visual hierarchy
- Responsive layout behavior
- Styling for inputs, buttons, and result area

**Boundaries**
- Must not own BMI formula logic
- May reflect state visually, but should not compute business rules

### 2. Input + Validation Module
**Responsibilities**
- Read raw height and weight values from the UI
- Convert raw string input into usable numeric values
- Reject empty, zero, negative, or invalid values
- Route valid data into calculation logic

**Boundaries**
- Should normalize input only
- Should not render final UI copy directly beyond invoking result/error helpers

### 3. Calculation Module
**Responsibilities**
- Convert centimeters to meters
- Calculate BMI using the standard formula
- Return numeric BMI result for rendering

**Boundaries**
- Pure logic only
- No DOM manipulation in formula helper

### 4. Classification Module
**Responsibilities**
- Map BMI values into standard categories:
  - Underweight
  - Normal weight
  - Overweight
  - Obesity

**Boundaries**
- Deterministic category mapping only
- No visual rendering responsibilities

### 5. Result Rendering Module
**Responsibilities**
- Show formatted BMI result
- Show category output
- Show validation/error state
- Restore default empty-state messaging on reset

**Boundaries**
- Consumes processed data from validation/calculation helpers
- Does not own formula or parsing logic

## File-Level Implementation Map

### Recommended implementation structure
**Single-file delivery preferred for simplicity:**
- `bmi-calculator.html`
  - semantic HTML structure
  - embedded CSS for layout and visual design
  - embedded JS for validation, calculation, category mapping, and rendering

### File section map

#### HTML Section
- main wrapper/card
- heading and helper description
- height input field
- weight input field
- calculate button
- reset button
- result panel with default state

#### CSS Section
- full-page centered layout
- glassmorphism or premium card styling
- input styling and focus states
- button styling and hover states
- result panel styling
- mobile responsive behavior

#### JavaScript Section
- DOM references
- parse helper
- BMI calculation helper
- category helper
- render success helper
- render error helper
- reset helper
- event listeners

## Interface / API Contracts

### DOM Contract
Expected elements and IDs:
- `#height` → numeric height input in centimeters
- `#weight` → numeric weight input in kilograms
- `#calculate` → primary CTA button
- `#reset` → reset button
- `#result` → result panel container

### JavaScript Helper Contracts

#### `parsePositiveNumber(value: string): number | null`
- Input: raw input string
- Output: positive numeric value or `null` if invalid

#### `calculateBMI(heightCm: number, weightKg: number): number`
- Input: validated height in centimeters and weight in kilograms
- Output: numeric BMI value

#### `getBMICategory(bmi: number): string`
- Output values:
  - `Underweight`
  - `Normal weight`
  - `Overweight`
  - `Obesity`

#### `renderResult(bmi: number, category: string): void`
- Displays formatted BMI and corresponding category

#### `renderError(message: string): void`
- Displays user-readable validation feedback

#### `resetForm(): void`
- Clears inputs and restores the default result prompt

## Risks and Edge Cases

### Validation Risks
- empty height input
- empty weight input
- zero values
- negative values
- non-numeric values
- decimal handling inconsistencies

### UX Risks
- result state unclear after invalid submission
- reset not fully restoring default UI state
- keyboard-only users lacking smooth interaction
- mobile layout crowding or overflow

### Rendering Risks
- low contrast text against dark backgrounds
- result panel too small for longer feedback
- buttons wrapping awkwardly on narrow screens

### Logic Risks
- incorrect cm-to-meter conversion
- wrong category thresholds at boundary values
- rounding inconsistency in displayed BMI

## Recommended Notes for Implementation
- Keep logic simple and deterministic.
- Prefer semantic labels and accessible structure.
- Ensure the empty state is informative before first calculation.
- Keep the result copy concise and friendly.
- Preserve clean separation between parsing, formula logic, category mapping, and rendering.
