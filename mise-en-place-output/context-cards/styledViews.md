# Context Card for /Users/Jammie/Code/MIse-en-place/ai-prd-generator/src/utils/webviews/styledViews.ts

This document provides a high-level overview of the code structure, including key functions and classes, to help developers quickly understand the module's purpose and public API.

## Functions

### `getStyledPrdWebviewContent`

**Summary:** The `getStyledPrdWebviewContent` function generates and returns an HTML string formatted with styling for displaying product information on a web view, utilizing the provided `PrdJson` product data.

**Signature:** `function getStyledPrdWebviewContent(prdData: PrdJson): string`

---

### `getStyledMdViewerWebviewContent`

**Summary:** The `getStyledMdViewerWebviewContent` function generates a string of HTML content styled for a web viewer, converting and displaying inputted markdown content as part of the user interface in a review and rating system context.

**Signature:** `function getStyledMdViewerWebviewContent(markdownContent: string): string`

---

### `getPrdMarkdownViewContent`

**Summary:** The `getPrdMarkdownViewContent` function processes a given markdown string to generate and return the content formatted for viewing within the Product Requirements Document (PRD) Review and Rating System context, ensuring the relevance and readability of the information presented.

**Signature:** `function getPrdMarkdownViewContent(markdown: string)`

**Dependencies:**

- `getStyledMdViewerWebviewContent`

---

### `getPrdJsonViewContent`

**Summary:** The `getPrdJsonViewContent` function is likely responsible for generating or formatting JSON content related to product reviews or ratings, which would be displayed within the "Review and Rating System" of the Local Home Cooking platform.

**Signature:** `function getPrdJsonViewContent(json: any)`

**Dependencies:**

- `getStyledPrdWebviewContent`

---

### `getContextCardViewContent`

**Summary:** The `getContextCardViewContent` function extracts and returns the relevant content associated with a specified title from a given markdown string, likely facilitating dynamic display of specific context sections within the "Review and Rating System" documentation.

**Signature:** `function getContextCardViewContent(markdown: string, title: string): string`

**Dependencies:**

- `getStyledMdViewerWebviewContent`

---
