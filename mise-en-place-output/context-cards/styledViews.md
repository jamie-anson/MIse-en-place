# Context Card for /Users/Jammie/Code/MIse-en-place/ai-prd-generator/src/utils/webviews/styledViews.ts

This document provides a high-level overview of the code structure, including key functions and classes, to help developers quickly understand the module's purpose and public API.

## Functions

### `getStyledPrdWebviewContent`

**Summary:** This function returns a styled HTML content string based on the product data provided.

**Signature:** `function getStyledPrdWebviewContent(prdData: PrdJson): string`

---

### `getStyledMdViewerWebviewContent`

**Summary:** This function takes a markdown content string and returns a styled HTML content for a webview.

**Signature:** `function getStyledMdViewerWebviewContent(markdownContent: string): string`

---

### `getPrdMarkdownViewContent`

**Summary:** This function retrieves the markdown content for a product view.

**Signature:** `function getPrdMarkdownViewContent(markdown: string)`

**Dependencies:**

- `getStyledMdViewerWebviewContent`

---

### `getPrdJsonViewContent`

**Summary:** This function retrieves the content of a JSON object for viewing.

**Signature:** `function getPrdJsonViewContent(json: any)`

**Dependencies:**

- `getStyledPrdWebviewContent`

---

### `getContextCardViewContent`

**Summary:** This function takes in a markdown string and a title, and returns a string representing the content for a context card view.

**Signature:** `function getContextCardViewContent(markdown: string, title: string): string`

**Dependencies:**

- `getStyledMdViewerWebviewContent`

---
