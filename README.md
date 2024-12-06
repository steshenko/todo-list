# Todo App

This is a task management application that allows users to add, edit, delete tasks, and filter them by various parameters. It also supports pagination and stores data in `localStorage`.

## Requirements

- [Node.js](https://nodejs.org/) version 14 or higher
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) for managing dependencies

## Installation

1. Clone the repository to your local machine:

    ```bash
    git clone 
    ```

2. Navigate to the project directory:

    ```bash
    cd todo-app
    ```

3. Install the dependencies:

   If you're using npm:

    ```bash
    npm install
    ```

   Or if you're using yarn:

    ```bash
    yarn install
    ```

## Running the Project

To run the project in development mode, use one of the following commands:

- Using npm:

    ```bash
    npm start
    ```

- Or using yarn:

    ```bash
    yarn start
    ```

After that, the project will be available at `http://localhost:8080` in your browser.

## Project Structure

- `src/`: The main folder containing the source code of the project.
    - `components/`: UI components like task lists, forms, and filters.
    - `store/`: Redux store with logic for managing tasks, filters, and pagination.
    - `App.js`: The main component of the application.
    - `index.js`: The entry point for rendering the app.
- `public/`: Public files like `index.html` and favicon.
- `package.json`: Project configuration and dependencies.

## Dependencies

The project uses the following dependencies:

- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Material-UI](https://mui.com/)
- [Redux Toolkit](https://redux-toolkit.js.org/)