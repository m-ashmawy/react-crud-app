# Simple CRUD App with React and JSON Server

This is a simple CRUD (Create, Read, Update, Delete) application built using React, React CSS Modules, and React Icons for the frontend and JSON Server as a mock server for the backend. The application provides a simple and intuitive interface for managing your daily tasks. With CRUD (Create, Read, Update, Delete) operations, you can easily add, view, update, and remove tasks as needed.

## Features

- **Task Management**: Create tasks, update task descriptions, mark tasks as completed, and delete tasks.
- **Dynamic Interface**: The application dynamically updates the task list.
- **Responsive Design**: The user interface is designed to be responsive, ensuring a seamless experience across different devices and screen sizes.
- **Data Persistence**: The application stores task data on db.json file using JSON Server, ensuring that your tasks are saved even if you close or refresh the page.
- **Intuitive Icons**: React Icons library is used to provide a visually appealing and meaningful representation of different task actions.

## Prerequisites

Before you get started, ensure you have the following installed:

- Node.js: [Download and Install Node.js](https://nodejs.org/)

## Getting Started

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/m-ashmawy/react-crud-app
   ```

2. Navigate to the project directory:

   ```bash
   cd react-crud-app
   ```

3. Install project dependencies:

   ```bash
   npm install
   ```

4. Start the React app:

   ```bash
   npm start
   ```

5. Start the JSON Server:

   ```bash
   npm run server
   ```

The React app will be available at `http://localhost:8080`, and the JSON Server will run at `http://localhost:3001`.

## Usage

1. Open your web browser and go to `http://localhost:8080`.
2. You can view the list of tasks, add new tasks, update existing tasks, delete tasks, and mark tasks as completed using the provided interface.

## API Endpoints

- Tasks API: `http://localhost:3001/todos`

The JSON Server provides a simple RESTful API for tasks. You can use standard HTTP methods (GET, POST, PUT, DELETE) to interact with it.

## Technologies Used

- React: A popular JavaScript library for building user interfaces.
- React CSS Modules: A CSS module system for React that allows local scoping of CSS class names.
- React Icons: A library that provides a collection of customizable icons for React applications.

## Project Structure

- `src/` - Contains the React components and application logic.
- `db.json` - Mock database file for JSON Server.
- `package.json` - Project dependencies and scripts.
- `README.md` - Project documentation (you are here).

## Contributing

Feel free to contribute to this project by submitting issues or pull requests. Your contributions are greatly appreciated!

---

**Author:** Mohamed Elashmawy
