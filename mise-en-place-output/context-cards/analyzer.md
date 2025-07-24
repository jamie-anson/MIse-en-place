# Context Card for /Users/Jammie/Code/MIse-en-place/ai-prd-generator/src/context-card-generator/analyzer.ts

This document provides a high-level overview of the code structure, including key functions and classes, to help developers quickly understand the module's purpose and public API.

## Classes

### `class CodeAnalyzer`

**Summary:** This class likely analyzes and processes code in some way.

**Signature:** `class CodeAnalyzer { ... }`

**Methods:**

- **`constructor`**
  - **Summary:** The constructor method is used to initialize an object when it is created.
  - **Signature:** `constructor()`

- **`analyze`**
  - **Summary:** This method takes a string of source code as input and returns an AnalysisResult object containing the results of analyzing the code.
  - **Signature:** `public analyze(sourceCode: string): AnalysisResult`

- **`findFunctions`**
  - **Summary:** This method searches for functions within a syntax node and returns an array of function information paired with the corresponding syntax node.
  - **Signature:** `private findFunctions(node: Parser.SyntaxNode): [FunctionInfo, Parser.SyntaxNode][]`

- **`findClasses`**
  - **Summary:** This method searches for classes within a syntax node and returns an array of class information and corresponding syntax nodes.
  - **Signature:** `private findClasses(node: Parser.SyntaxNode): [ClassInfo, Parser.SyntaxNode][]`

- **`findMethodsInClass`**
  - **Summary:** This method finds methods in a given class node and returns an array of function information and syntax nodes.
  - **Signature:** `private findMethodsInClass(classNode: Parser.SyntaxNode): [FunctionInfo, Parser.SyntaxNode][] { ... }`

- **`analyzeDependencies`**
  - **Summary:** This method analyzes dependencies between functions and classes based on their syntax nodes.
  - **Signature:** `private analyzeDependencies(
    functionsWithNodes: [FunctionInfo, Parser.SyntaxNode][],
    classesWithNodes: [ClassInfo, Parser.SyntaxNode][]
  ): void { ... }`

- **`getSignature`**
  - **Summary:** This method retrieves the signature of a syntax node using a specified body field name.
  - **Signature:** `private getSignature(node: Parser.SyntaxNode, bodyFieldName: string): string`

---

## Functions

### `runTest`

**Summary:** This function runs a test asynchronously.

**Signature:** `async function runTest()`

---
