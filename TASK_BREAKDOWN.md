# Task Breakdown — PAP-26 BMI Calculator

## Task 1 — Build HTML Structure
**Assigned to:** Grunt

### Work
- Create the standalone calculator document.
- Add a main card/container.
- Add title and helper copy.
- Add labeled height and weight inputs.
- Add calculate and reset buttons.
- Add a result/output area.

### Acceptance Criteria
- File exists in the target directory.
- Inputs are clearly labeled.
- Buttons are present and understandable.
- Result area is visible before any interaction.

## Task 2 — Create Responsive Visual Design
**Assigned to:** Grunt

### Work
- Apply polished UI styling.
- Use a strong visual hierarchy.
- Make the card look modern and attractive.
- Ensure layout works on desktop and mobile widths.
- Style hover/focus states for inputs and buttons.

### Acceptance Criteria
- UI looks cohesive and modern.
- Card remains centered and readable.
- Inputs and buttons are visually distinct.
- Layout does not break at smaller viewport widths.

## Task 3 — Implement BMI Logic
**Assigned to:** Grunt

### Work
- Parse numeric input values.
- Convert height from cm to meters.
- Compute BMI using the standard formula.
- Round output to one decimal place.
- Display the computed BMI.

### Acceptance Criteria
- Correct BMI is shown for valid inputs.
- Formula uses metric units correctly.
- Output format is human-readable.

## Task 4 — Implement BMI Category Mapping
**Assigned to:** Grunt

### Work
- Add category mapping logic for BMI ranges.
- Display the category with the BMI result.

### Acceptance Criteria
- Underweight is shown for BMI < 18.5.
- Normal weight is shown for BMI >= 18.5 and < 25.
- Overweight is shown for BMI >= 25 and < 30.
- Obesity is shown for BMI >= 30.

## Task 5 — Add Validation and Error Handling
**Assigned to:** Grunt

### Work
- Prevent invalid calculations when fields are empty.
- Prevent zero or negative values.
- Show clear user-facing error feedback.

### Acceptance Criteria
- Invalid input never produces a misleading BMI.
- Error messaging is visible and understandable.
- Valid input clears prior error state.

## Task 6 — Add Reset Behavior
**Assigned to:** Grunt

### Work
- Reset both fields.
- Restore the default result panel state.

### Acceptance Criteria
- Reset clears all entered values.
- Reset removes prior result/error output.
- UI returns to initial ready state.

## Task 7 — Final Polish Pass
**Assigned to:** Grunt

### Work
- Check spacing, typography, and button copy.
- Confirm the interaction flow feels smooth.
- Ensure result messaging is friendly and concise.

### Acceptance Criteria
- UI feels intentional and clean.
- Labels, helper copy, and result text are consistent.
- No obvious visual or interaction rough edges remain.
