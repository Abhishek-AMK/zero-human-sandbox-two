# Architecture Plan — PAP-26 BMI Calculator

## Goal
Create a polished, user-friendly BMI calculator UI as a standalone front-end artifact with simple interactive logic and clear result feedback.

## System / Module Design and Boundaries

### 1. Presentation Layer
Responsible for layout, typography, spacing, color, visual hierarchy, button styling, and responsive behavior.

**Boundary:**
- Handles only rendering and user-facing visuals.
- Must not contain BMI calculation rules beyond UI state display concerns.

### 2. Input Layer
Responsible for capturing user input for:
- height
- weight
- optional unit assumptions if added later

**Boundary:**
- Reads and validates raw form values.
- Passes normalized numeric values into calculation logic.

### 3. Calculation Layer
Responsible for BMI formula computation:
- BMI = weightKg / (heightM * heightM)

**Boundary:**
- Pure logic only.
- Should not directly manipulate DOM except through result-rendering integration.

### 4. Result / Feedback Layer
Responsible for:
- displaying calculated BMI
- displaying category label
- displaying validation or error messages

**Boundary:**
- Renders output based on already-computed values.
- Does not own formula logic.

## File-Level Implementation Map

### Option A: Single-file implementation (recommended for simplicity)
- `bmi-calculator.html`
  - semantic HTML structure
  - embedded CSS for responsive card-based UI
  - embedded JS for validation, BMI calculation, reset behavior, and result rendering

### Internal sections inside the file
- **HTML section**
  - container/card wrapper
  - title + helper text
  - height input
  - weight input
  - calculate button
  - reset button
  - result panel
- **CSS section**
  - page background
  - card glassmorphism styling
  - input states
  - button states
  - result panel styling
  - mobile responsiveness
- **JavaScript section**
  - DOM references
  - input parsing
  - validation helper
  - BMI calculator helper
  - category helper
  - event listeners

## Interface / API Contracts

### DOM Contract
Expected IDs / elements:
- `#height` → numeric input in centimeters
- `#weight` → numeric input in kilograms
- `#calculate` → primary action button
- `#reset` → secondary action button
- `#result` → result container

### JS Helper Contracts

#### `parsePositiveNumber(value: string): number | null`
- Input: raw input string
- Output: positive numeric value, or `null` if invalid

#### `calculateBMI(heightCm: number, weightKg: number): number`
- Input: validated height in cm and weight in kg
- Output: numeric BMI value

#### `getBMICategory(bmi: number): string`
- Returns one of:
  - `Underweight`
  - `Normal weight`
  - `Overweight`
  - `Obesity`

#### `renderResult(bmi: number, category: string): void`
- Updates result panel with formatted BMI and category

#### `renderError(message: string): void`
- Displays validation feedback in result panel

#### `resetForm(): void`
- Clears inputs and restores default result state

## Risks and Edge Cases

### Validation Risks
- empty height field
- empty weight field
- zero values
- negative values
- non-numeric characters
- extremely large values producing unrealistic BMI

### UX Edge Cases
- user presses calculate repeatedly
- user clears only one input then recalculates
- decimal inputs should still work
- result panel should remain readable on small screens

### Accessibility Risks
- insufficient color contrast
- missing labels
- unclear error messaging
- keyboard focus visibility

### Layout Risks
- overflow on narrow mobile widths
- oversized text causing wrapping issues
- button stack readability on small screens

## Recommended Implementation Notes
- Keep the calculator self-contained in one file.
- Prefer semantic labels and accessible input structure.
- Use simple, deterministic BMI categories.
- Ensure reset always returns UI to a clean default state.
