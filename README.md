# Assignment-1
User Management Web Application:

This is a simple web application that allows users to view, add, edit, and delete user details by interacting with a mock backend API (JSONPlaceholder). The application is built using HTML, CSS, and JavaScript and provides a responsive user interface for easy management of user data.

Features:
-> View Users: Display a list of users fetched from the mock API.

-> Add User: Add a new user via a form, with input fields for First Name, Last Name, Email, and Department.

-> Edit User: Edit details of an existing user via a pre-filled form.

-> Delete User: Delete a user by interacting with the mock API.

-> Error Handling: Handles API request failures and displays appropriate error messages.

-> Responsive Design: Ensures usability across various screen sizes.

Technologies Used:
-> HTML: For structure and layout.
-> CSS: For styling and responsive design.
-> JavaScript: For functionality and API interaction.
-> JSONPlaceholder API: Mock backend for testing REST API operations.

Setup Instructions:
Prerequisites
A modern web browser (e.g., Chrome, Firefox, Edge).
A text editor (e.g., VS Code, Sublime Text) for modifications, if needed.

Steps to Run:
Clone or download this repository.
Open the index.html file in your browser to run the application.

Usage:
1. Viewing Users:
The app fetches and displays a list of users from the JSONPlaceholder API on load.

2. Adding a User:
Click the "Add User" button to open the user form.
Fill in the details and click "Submit" to add a new user.
Note: The JSONPlaceholder API simulates a successful response but does not persist data.

3. Editing a User:
Click the "Edit" button next to a user in the table.
Modify the user details in the pre-filled form and click "Submit".

4. Deleting a User:
Click the "Delete" button next to a user in the table.
The user will be removed from the display after a successful API call.

File Structure:
├── index.html        # Main HTML file
├── style.css         # CSS for styling
├── script.js         # JavaScript for functionality
API Reference
This application uses JSONPlaceholder for mock API interactions:

GET /users: Fetch all users.
POST /users: Add a new user (simulated response).
PUT /users/:id: Update an existing user (simulated response).
DELETE /users/:id: Delete a user (simulated response).
