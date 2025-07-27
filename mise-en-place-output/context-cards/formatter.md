# Context Card for /Users/Jammie/Code/MIse-en-place/ai-prd-generator/src/context-card-generator/formatter.ts

This document provides a high-level overview of the code structure, including key functions and classes, to help developers quickly understand the module's purpose and public API.

## Classes

### `class MarkdownFormatter`

**Summary:** The `MarkdownFormatter` class is likely responsible for converting or structuring content related to the pizza place's website features into markdown format, facilitating consistent documentation and communication between developers and stakeholders.

**Signature:** `class MarkdownFormatter { ... }`

**Methods:**

- **`format`**
  - **Summary:** The `format` method converts the analysis results of a contact form submission into a user-readable string, referencing the specific source file where the form data originated.
  - **Signature:** `public format(result: AnalysisResult, sourceFilePath: string): string`

- **`formatClass`**
  - **Summary:** The `formatClass` method processes a `ClassInfo` object to generate and return a formatted string array, likely used for standardizing and organizing class information for display or storage within the contact or submission-related features of the "Contact Page" module.
  - **Signature:** `private formatClass(classInfo: ClassInfo): string[] { ... }`

- **`formatFunction`**
  - **Summary:** The `formatFunction` method processes information encapsulated in a `FunctionInfo` object and returns a formatted string array suitable for integrating function details into the "Contact Page" feature's communication or storage components.
  - **Signature:** `private formatFunction(funcInfo: FunctionInfo): string[]`

- **`formatMethod`**
  - **Summary:** The `formatMethod` method processes a `FunctionInfo` object to produce a formatted string array, which aids in managing and displaying contact form submission logic within the "Contact Page" module.
  - **Signature:** `private formatMethod(methodInfo: FunctionInfo): string[]`

---
