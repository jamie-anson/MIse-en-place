# Context Card for /Users/Jammie/Code/MIse-en-place/ai-prd-generator/src/webview/handlers/handleGenerateCCS.ts

This document provides a high-level overview of the code structure, including key functions and classes, to help developers quickly understand the module's purpose and public API.

## Functions

### `handleGenerateCCS`

**Summary:** The function `handleGenerateCCS` asynchronously processes a message to generate a contact card schema within a VSCode extension's webview context, returning a URI pointing to the generated schema or undefined if unsuccessful.

**Signature:** `async function handleGenerateCCS(message: any, context: vscode.ExtensionContext, webview: vscode.Webview): Promise<vscode.Uri | undefined>`

**Dependencies:**

- `analyzeCodebase`
- `generateCCSAnalysis`

---

### `analyzeCodebase`

**Summary:** The function `analyzeCodebase` analyzes the codebase located at the given workspace URI, providing insights and structural information in the form of a `CodebaseAnalysis` object.

**Signature:** `async function analyzeCodebase(workspaceUri: vscode.Uri): Promise<CodebaseAnalysis>`

**Dependencies:**

- `scanDirectory`
- `checkFileExists`
- `checkTestFiles`
- `checkTypeDefinitions`
- `checkDocumentation`

---

### `scanDirectory`

**Summary:** The `scanDirectory` function recursively scans a directory at the specified URI, performing a codebase analysis at varying depths to gather insights about the contact page's code structure within a Visual Studio Code environment.

**Signature:** `async function scanDirectory(dirUri: vscode.Uri, analysis: CodebaseAnalysis, depth: number): Promise<void>`

**Dependencies:**

- `shouldSkipFile`
- `isCodeFile`
- `countLines`
- `readFileContent`

---

### `generateCCSAnalysis`

**Summary:** The `generateCCSAnalysis` function asynchronously generates a Codebase Contextual Summary (CCS) by utilizing the OpenAiService to analyze a given CodebaseAnalysis object.

**Signature:** `async function generateCCSAnalysis(openAiService: OpenAiService, analysis: CodebaseAnalysis): Promise<string>`

---

### `shouldSkipFile`

**Summary:** The `shouldSkipFile` function determines whether a given file should be ignored during the processing of the "Contact Page" module, based on its filename.

**Signature:** `function shouldSkipFile(name: string): boolean`

---

### `isCodeFile`

**Summary:** The function `isCodeFile(ext: string): boolean` determines if a given file extension corresponds to a source code file compatible with the development environment, thereby aiding in file type validation within the "Contact Page" feature's functionality.

**Signature:** `function isCodeFile(ext: string): boolean`

---

### `countLines`

**Summary:** The function `countLines` asynchronously computes and returns the total number of lines in a file specified by the given Visual Studio Code file URI.

**Signature:** `async function countLines(fileUri: vscode.Uri): Promise<number>`

---

### `readFileContent`

**Summary:** The function `readFileContent` asynchronously reads the contents of a specified file up to a given character limit, supporting the "Contact Page" feature by potentially handling or processing contact form data stored within the development environment.

**Signature:** `async function readFileContent(fileUri: vscode.Uri, maxChars: number): Promise<string>`

---

### `checkFileExists`

**Summary:** The `checkFileExists` function asynchronously checks if any of the specified filenames exist within a given workspace directory in a Visual Studio Code environment, complementing the file management aspects of the contact page feature.

**Signature:** `async function checkFileExists(workspaceUri: vscode.Uri, filenames: string[]): Promise<boolean>`

---

### `checkTestFiles`

**Summary:** The function `checkTestFiles` asynchronously checks the specified workspace URI for the presence of test files, returning a boolean indicating whether such files exist.

**Signature:** `async function checkTestFiles(workspaceUri: vscode.Uri): Promise<boolean>`

---

### `checkTypeDefinitions`

**Summary:** The function `checkTypeDefinitions` asynchronously checks whether type definitions are present for a given workspace URI within a Visual Studio Code extension context, returning a boolean result.

**Signature:** `async function checkTypeDefinitions(workspaceUri: vscode.Uri): Promise<boolean>`

---

### `checkDocumentation`

**Summary:** The `checkDocumentation` function asynchronously verifies the presence of comprehensive documentation within a specified Visual Studio Code workspace, ensuring that all necessary context and operational details are documented for the "Contact Page" feature.

**Signature:** `async function checkDocumentation(workspaceUri: vscode.Uri): Promise<boolean>`

---
