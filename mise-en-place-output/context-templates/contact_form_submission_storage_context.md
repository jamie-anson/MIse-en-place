```markdown
# Context Documentation for "Contact Form Submission Storage"

## Purpose
The "Contact Form Submission Storage" module is designed to facilitate storing submissions from the contact form available on the pizza place website. This feature enables users to submit inquiries to the restaurant owner, whose data is then temporarily stored in memory using SQLite during the server's runtime. The primary objective is to provide an easy mechanism for receiving and managing customer feedback.

## Key Files
- **server.js**: The main server file that sets up the Express.js application and handles routing for both the homepage and contact page.
- **contactFormHandler.js**: Handles the logic for processing contact form submissions, including validation and storage in SQLite.
- **database.js**: Configures the SQLite (in-memory) database setup and provides utility functions for interacting with the stored form submissions.

## Backend
- **Database**: This module uses SQLite in-memory database for storing form submissions. The data will persist only during the server’s runtime and will be lost upon restart.
- **Express.js**: The server framework used for handling both the frontend and backend processes, particularly for routing requests and processing form submissions.

## Related Features
- **Homepage**: While the homepage does not directly interact with the contact form, both features are served by the same Express.js backend setup.
- **Form Validation**: Exists as part of the contact form feature to ensure that only valid data is processed and stored.

## Design Constraints
- **Storage Limitation**: As the database is in-memory, data persistence is not guaranteed beyond server runtime and will reset on restart.
- **Input Validation**: Basic validation is required on form fields (`subject`, `phone`, `message`) to prevent incorrect or malicious data from being stored.
- **Minimal Backend Dependencies**: The system must remain lightweight, focusing on delivering essential functionality with minimal dependencies and server impact.

## Open Questions
- How should we handle submissions if the server is restarted frequently or unexpectedly?
- What specific input validation rules should be applied to the phone number?
- Are there any specific accessibility requirements we need to address in form design or handling?

## Owner
- **Primary Developer**: John Doe (Software Engineer) who is responsible for maintaining the contact form submission functionality, including updates and bug fixes.
```
