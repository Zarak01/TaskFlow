const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");
const button = document.getElementById("add-task-btn");
const totalTask = document.getElementById("total-task");
const pendingTask = document.getElementById("pending-task");
const completedTask = document.getElementById("completed-task");


function createTask(taskName, isCompleted = false) {
    const newTask = document.createElement("li");
    newTask.classList.add("task-item");

    const taskText = document.createElement("span")
    taskText.textContent = taskName;
    taskText.classList.add("task-text")

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("task-checkbox");
    checkbox.setAttribute("aria-label", "Mark task as completed");
    checkbox.checked = isCompleted;
    newTask.classList.toggle("completed", isCompleted);
    checkbox.addEventListener("change", function() {
        newTask.classList.toggle("completed", checkbox.checked);
        updateCounters()
        saveTasks()
    });

    const editButton = document.createElement("button");
    editButton.type = "button";
    editButton.classList.add("edit-btn");
    editButton.setAttribute("aria-label", "Edit task");
    editButton.innerHTML = '<i class="fa-solid fa-pen"></i>';
    editButton.addEventListener("click", function() {
        const updatedTask = window.prompt(
            "Edit your task:",
            taskText.textContent
        );

        if (updatedTask !== null && updatedTask.trim() !== "") {
            taskText.textContent = updatedTask.trim();
            updateCounters()
            saveTasks()
        }
    });

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.classList.add("delete-btn");
    deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    deleteButton.addEventListener("click", function(){
        newTask.remove()
        updateCounters()
        saveTasks()
    });
    
    newTask.append(checkbox, taskText, editButton, deleteButton);
    taskList.appendChild(newTask);
}

function saveTasks() {
    const tasks = [];

    const taskItems = taskList.querySelectorAll(".task-item");

    taskItems.forEach(function(item) {
        const task = {
            title: item.querySelector(".task-text").textContent,
            completed: item.classList.contains("completed")
        };

        tasks.push(task);
    });

    localStorage.setItem("taskflow-tasks", JSON.stringify(tasks));
}

function loadTasks() {
    const savedTasks = localStorage.getItem("taskflow-tasks");

    if (savedTasks !== null) {
        const tasks = JSON.parse(savedTasks);

        tasks.forEach(function(task) {
            createTask(task.title, task.completed);
        });
        updateCounters()
    }
}

button.addEventListener("click", function(event) {
    event.preventDefault();
    const taskName = taskInput.value.trim();
    if (taskName !== "") {
        createTask(taskName);
        saveTasks()
        taskInput.value = "";
        updateCounters()
    }
});


function updateCounters() {
    const total = taskList.children.length;

    const completed =
        taskList.querySelectorAll(".completed").length;

    const pending = total - completed;

    totalTask.textContent = total;
    pendingTask.textContent = pending;
    completedTask.textContent = completed;
}

loadTasks()