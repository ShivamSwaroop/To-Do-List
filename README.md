To-Do List Application
This is a dynamic and interactive To-Do List application built using React functional components. It allows users to manage their daily tasks efficiently, covering all essential CRUD (Create, Read, Update, Delete) operations.

Features
The application provides the following core functionalities:

Add Task: Users can input a new task and add it to the list.

Read/View Tasks: All to-do items are dynamically rendered from the application state.

Mark Complete: Tasks can be toggled as completed or incomplete.

Delete Task: Any item can be permanently removed from the list.

Components
The application architecture is structured around four main components, utilizing state and props for data flow:

App: The main container component, responsible for managing the central list of to-do items in its state.

Header: Displays the application title and any necessary introductory information.

ToDoList: Receives the list of to-do items as props and is responsible for rendering the collection of ToDoItem components using the map function.

ToDoItem: Displays an individual task, handles the logic for marking a task as completed, editing its content, and deleting itself from the list.

Technology Stack
Core Library: React (using functional components and Hooks like useState).

Project Setup: Vite.

Styling: Custom CSS for a user-friendly and appealing interface.

Getting Started
Follow these steps to clone the repository and run the application locally.

Prerequisites

You must have Node.js and npm (Node Package Manager) installed on your machine.

Installation

Clone the Repository:

git clone [https://github.com/ShivamSwaroop/To-Do-List.git] cd [ToDoList_vite]

Install Dependencies: Since the project was initialized with Vite, you only need to run the install command.

npm install

Running the Application

Start the local development server:

npm run dev

The application will typically be available in your browser at http://localhost:5173/.

Author
Shivam Swaroop Dubey
