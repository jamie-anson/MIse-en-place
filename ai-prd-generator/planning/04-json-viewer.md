# Phase 4: JSON Output & Basic Viewer

*Vibe: See the structure!*

**Goal:** Open a new webview to display the generated JSON PRD in a readable, collapsible format.

**Steps:**

1.  **Create `getJsonViewerContent` Function:**
    *   This function will take the JSON content as a string and return the full HTML for a new webview.
    *   Include Tailwind CSS for styling.

2.  **Implement Collapsible Tree View:**
    *   Inside the webview's JavaScript, parse the JSON.
    *   Write a simple recursive function to render the JSON with basic syntax highlighting and `▶`/`▼` toggles for collapsing/expanding objects and arrays.

3.  **Open JSON Viewer Panel:**
    *   After saving the files in Phase 3, create a new `WebviewPanel`.
    *   Set its title to "JSON PRD" and open it in `ViewColumn.Two`.
    *   Set its HTML content using `getJsonViewerContent()`.
