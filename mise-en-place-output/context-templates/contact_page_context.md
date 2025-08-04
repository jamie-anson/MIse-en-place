
# Context for "Contact Page" Feature

## Purpose
The "Contact Page" module is designed to provide a simple interface for customers to get in touch with the pizza place's owner. Customers can fill out a contact form with fields for a subject, phone number, and message, which are stored in an in-memory SQLite database during the runtime of the server. This module serves as a crucial communication bridge between customers and the pizza place.

## Key Files
- **contact.html**: Contains the HTML structure for the contact page, including the form with the required input fields (`subject`, `phone`, `message`).
- **contact.css**: Provides minimal styling for the contact page to ensure a user-friendly layout.
- **contactController.js**: Manages the form submission logic. Handles request validation and interacts with the SQLite database to store submissions.
- **database.js**: Configures and initializes the in-memory SQLite database, used to temporarily hold form submissions.

## Backend
- **Express.js**: Utilized as the server framework to serve the static page and process form submissions.
- **SQLite**: Employed as an in-memory database to store form data during the server's runtime. Data does not persist upon restart.

## Related Features
- **Homepage**: Direct link from the homepage to the contact page, allowing users to navigate and access the contact form after viewing general information about the pizza place.

## Design Constraints
- **Form Field IDs**: Must use specific identifiers (`subject`, `phone`, `message`) for input fields to ensure consistency in the codebase.
- **In-Memory Database**: Data is not persistent beyond the current session, highlighting a limitation in storage capabilities for contact submissions.
- **Technology Stack**: The site is built with static HTML and minimal CSS, with Express.js handling the backend. Future enhancements may require a more robust stack.

## Open Questions
- **Data Persistence**: Should we implement a mechanism to migrate data to a persistent storage solution for form submissions in the next iteration?
- **Submission Notifications**: Is there a need to notify the owner immediately upon new form submissions through integration with email or messaging services?
- **Security Enhancements**: Besides basic input validation, are there additional security measures required to protect against malicious input?

## Owner
- **Alice Johnson**: Responsible for the development and maintenance of the contact page feature. Reach out to Alice for any questions or issues related to this module.

