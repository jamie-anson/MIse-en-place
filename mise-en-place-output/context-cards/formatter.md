# Context Card for /Users/Jammie/Code/MIse-en-place/ai-prd-generator/src/context-card-generator/formatter.ts

This document provides a high-level overview of the code structure, including key functions and classes, to help developers quickly understand the module's purpose and public API.

## Classes

### `class MarkdownFormatter`

**Summary:** This class is likely used to format text in Markdown syntax.

**Signature:** `class MarkdownFormatter { ... }`

**Methods:**

- **`format`**
  - **Summary:** This method formats an analysis result and returns it as a string, using the source file path as a parameter.
  - **Signature:** `public format(result: AnalysisResult, sourceFilePath: string): string`

- **`formatClass`**
  - **Summary:** This method formats a given class information object and returns an array of strings.
  - **Signature:** `private formatClass(classInfo: ClassInfo): string[] { ... }`

- **`formatFunction`**
  - **Summary:** This method takes a FunctionInfo object as input and returns an array of strings.
  - **Signature:** `private formatFunction(funcInfo: FunctionInfo): string[]`

- **`formatMethod`**
  - **Summary:** This method takes a FunctionInfo object and returns an array of strings representing the formatted information.
  - **Signature:** `private formatMethod(methodInfo: FunctionInfo): string[]`

---
