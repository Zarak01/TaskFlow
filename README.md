# TaskFlow — Task Management Web App

TaskFlow is a responsive task management application built with **HTML, CSS, and vanilla JavaScript**. It helps users organise tasks, track progress, and keep their task lists available between browser sessions.

## Features

- **Add tasks:** Create tasks by entering a description.
- **Edit tasks:** Update existing task descriptions.
- **Delete tasks:** Remove tasks you no longer need.
- **Mark tasks complete:** Toggle tasks between completed and pending using checkboxes.
- **Task statistics:** See live totals for all, pending, and completed tasks.
- **Persistent storage:** Keep tasks and completion states after refreshing the page using browser `localStorage`.
- **Responsive interface:** Use the application on different screen sizes.

## Technologies Used

| Technology | Purpose |
| --- | --- |
| HTML5 | Page structure |
| CSS3 | Styling and responsive layout |
| JavaScript | DOM manipulation, task management, and event handling |
| Web Storage API | Browser-based persistence with `localStorage` |
| Font Awesome | Interface icons |
| Google Fonts | Typography |

## Getting Started

### Prerequisites

A modern web browser, such as Chrome, Firefox, Safari, or Edge. No package installation is required.

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/Zarak01/TaskFlow.git
   ```

2. Open the project folder.
3. Open `index.html` in your browser.

> **Note:** The application source files must be pushed to this repository before these installation steps can work.

## How It Works

### Task Management

JavaScript creates and updates task elements dynamically using the DOM. Event listeners respond to adding, editing, deleting, and checking off tasks.

### Task Statistics

The dashboard updates whenever tasks are added, deleted, or marked complete:

- **Total:** Number of existing tasks.
- **Pending:** Tasks not yet completed.
- **Completed:** Tasks marked as completed.

### Data Persistence

Each task is stored as an object with a title and completion status:

```javascript
{
  title: "Complete JavaScript project",
  completed: false
}
```

The app uses `JSON.stringify()` to save task data to `localStorage` and `JSON.parse()` to restore it when the page loads.

**Note:** Data stays in the user's browser. TaskFlow does not currently support accounts or cross-device synchronisation.

## Project Structure

```text
TaskFlow/
├── index.html
├── style.css
├── script.js
└── README.md
```

*The filenames above describe the intended project layout; confirm they match the files in your local folder.*

## Learning Outcomes

This project provided practice with:

- Selecting and manipulating DOM elements.
- Dynamically creating and appending HTML elements.
- Handling user interactions with event listeners.
- Implementing Create, Read, Update, and Delete (CRUD) operations.
- Organising JavaScript into reusable functions.
- Working with arrays, objects, and JSON.
- Persisting data with `localStorage`.
- Building responsive layouts with CSS.

## Future Improvements

- Filter tasks by completion status.
- Add due dates and priorities.
- Search tasks.
- Reorder tasks using drag and drop.
- Add optional cloud synchronisation.

## Project Context

TaskFlow was developed as a web development internship assignment at **Pynexia Technology**, applying front-end development concepts in a functional task management application.

## Author

**Fateemah Kutashi-Abdulquadri**  
Software Developer

---

*Built with HTML, CSS, and JavaScript.*
