# Product Requirements Document: Simple Pizza Place Website

## Purpose

The purpose of this document is to outline the requirements for a simple website for a pizza place, using Express.js and SQLite (in-memory). The site will feature a homepage and a contact page.

## Goals and Objectives

- Provide a simple and intuitive web presence for the pizza place.
- Allow customers to view information about the pizza place and contact the owner through a simple form.
- Keep the initial deployment lightweight and easy to maintain.

## Features and Requirements

### User Roles

- **Owner**: Manages website content and receives contacts via a form.
- **Customer**: Views the homepage and uses the contact form.

### Core Features

1. **Homepage**
   - Displays general information about the pizza place.
2. **Contact Page**
   - Contact form with fields: subject, phone number, and message.
   - Form fields must have the following IDs: `subject`, `phone`, `message`.
   - Submissions are stored using in-memory SQLite during server runtime.

## Technical Requirements

### Frontend

- **Stack**: HTML, CSS
- **Notes**: Simple, static HTML pages with minimal styling.

### Backend

- **Stack**: Express.js
- **Notes**: Use Express to serve static pages and handle form submissions.

### Database

- **Stack**: SQLite (in-memory)
- **Notes**: Store form submissions in-memory; data does not persist on restart.

## Non-Functional Requirements

- **Security**: Basic input validation for the contact form.
- **Scalability**: Designed for low traffic and easy scaling with static site hosting and minimal backend.
- **Performance**: Quick load times with minimal dependencies.

## User Journey Summary

### Owner

- Updates website content and checks form submissions stored during the current server session.

### Customer

1. Visits the homepage to get pizza place information.
2. Navigates to the contact page.
3. Fills in the form fields (subject, phone, message) and submits the form.

## Success Metrics

- Website loads successfully in major browsers.
- Contact form submissions are received and stored in memory.
- Users can navigate between homepage and contact page without issues.

## Future Enhancements

- Persist form data in a permanent database.
- Add more pages such as a menu or about page.
- Enhance styling with a CSS framework or design overhaul.
