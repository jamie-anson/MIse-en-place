# Context Card for /Users/Jammie/Code/MIse-en-place/ai-prd-generator/src/utils/webviews/styledViews.ts

This document provides a high-level overview of the code structure, including key functions and classes, to help developers quickly understand the module's purpose and public API.

## Functions

### `getStyledPrdWebviewContent`

**Summary:** The `getStyledPrdWebviewContent` function generates and returns a styled HTML string tailored for presenting a product in a web view, using the provided product data (`prdData`).

**Signature:** `function getStyledPrdWebviewContent(prdData: PrdJson): string`

---

### `getStyledMdViewerWebviewContent`

**Summary:** The function `getStyledMdViewerWebviewContent` generates a fully-styled HTML content string for rendering markdown content within a webview context, ensuring a consistent visual presentation of the markdown data.

**Signature:** `function getStyledMdViewerWebviewContent(markdownContent: string): string`

---

### `getPrdMarkdownViewContent`

**Summary:** The `getPrdMarkdownViewContent` function is designed to process and extract relevant content from a provided markdown string, which is used to dynamically render sections of the contact page feature documentation within the pizza place's website interface.

**Signature:** `function getPrdMarkdownViewContent(markdown: string)`

**Dependencies:**

- `getStyledMdViewerWebviewContent`

---

### `getPrdJsonViewContent`

**Summary:** The `getPrdJsonViewContent` function retrieves the JSON representation of the contact form submission data for viewing or processing within the "Contact Page" module.

**Signature:** `function getPrdJsonViewContent(json: any)`

**Dependencies:**

- `getStyledPrdWebviewContent`

---

### `getContextCardViewContent`

**Summary:** The `getContextCardViewContent` function retrieves and formats the content of a specific contextual section, identified by a given title, from a larger markdown string.

**Signature:** `function getContextCardViewContent(markdown: string, title: string): string`

**Dependencies:**

- `getStyledMdViewerWebviewContent`

---
