# Task Breakdown — PAP-27 BMI Calculator

## Task 1 — Create the BMI calculator file
**Assigned to:** Grunt

### Work
- Create a standalone BMI calculator HTML file.
- Add semantic page structure and a central card layout.
- Include heading, helper copy, form controls, and result region.

### Acceptance Criteria
- Calculator file exists in the working directory.
- UI contains both inputs, both buttons, and a result panel.
- Structure is readable and logically organized.

## Task 2 — Build the visual design
**Assigned to:** Grunt

### Work
- Apply a polished UI treatment suitable for a modern product surface.
- Use responsive spacing and clear typography.
- Style buttons, inputs, and result state cleanly.

### Acceptance Criteria
- UI looks visually cohesive and intentional.
- Inputs and actions are easy to distinguish.
- Layout remains usable on smaller screens.

## Task 3 — Implement validation helpers
**Assigned to:** Grunt

### Work
- Parse height and weight safely.
- Reject empty, zero, negative, and invalid values.
- Surface clear error feedback.

### Acceptance Criteria
- Invalid values do not produce BMI output.
- Error state is clear and readable.
- Validation behavior is consistent for both fields.

## Task 4 — Implement BMI formula logic
**Assigned to:** Grunt

### Work
- Convert centimeters to meters.
- Calculate BMI using the standard formula.
- Format result to one decimal place for display.

### Acceptance Criteria
- BMI formula is correct.
- Output is stable and human-readable.
- Decimal inputs are handled correctly.

## Task 5 — Implement BMI category mapping
**Assigned to:** Grunt

### Work
- Add category thresholds.
- Display the correct category alongside the BMI result.

### Acceptance Criteria
- Underweight maps to BMI < 18.5.
- Normal weight maps to BMI >= 18.5 and < 25.
- Overweight maps to BMI >= 25 and < 30.
- Obesity maps to BMI >= 30.

## Task 6 — Implement result + reset behaviors
**Assigned to:** Grunt

### Work
- Render result state after valid calculation.
- Render error state after invalid submission.
- Add reset behavior to clear fields and restore default output.

### Acceptance Criteria
- Successful calculation replaces placeholder copy with result content.
- Error state replaces placeholder copy with validation content.
- Reset returns the interface to its initial state.

## Task 7 — Add lightweight test coverage
**Assigned to:** Grunt

### Work
- Add local tests covering parsing, formula logic, category mapping, and basic interaction flow.

### Acceptance Criteria
- Core helper logic is exercised by tests.
- At least one valid interaction path is covered.
- At least one invalid interaction path is covered.
- Reset behavior is covered.
