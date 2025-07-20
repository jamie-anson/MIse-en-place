# Phase 5: Graph Output & Interactive Viewer

*Vibe: See the connections!*

**Goal:** Display the generated graph data using Cytoscape.js.

**Steps:**

1.  **Create `getGraphViewerContent` Function:**
    *   This function will take the graph data object and return the HTML for the webview.
    *   Include the Cytoscape.js CDN in the `<head>`.
    *   Add a `<div id="cy"></div>` for the graph container.

2.  **Initialize Cytoscape:**
    *   In the webview's JavaScript, initialize Cytoscape on the `cy` div.
    *   Pass the `graphData` to the `elements` property.
    *   Define a basic stylesheet to color-code nodes by type (e.g., FEATURE, USER_STORY) and label edges.
    *   Choose a layout algorithm (e.g., `cose`).

3.  **Open Graph Viewer Panel:**
    *   After saving files, create another `WebviewPanel`.
    *   Set its title to "Graph PRD" and open it in `ViewColumn.Three`.
    *   Set its HTML content using `getGraphViewerContent()`.
