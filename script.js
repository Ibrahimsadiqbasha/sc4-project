
document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("task-input");
    const taskDatetime = document.getElementById("task-datetime");
    const addTaskBtn = document.getElementById("add-task-btn");
    const taskList = document.getElementById("task-list");

    // Add a new task
    addTaskBtn.addEventListener("click", () => {
        const taskText = taskInput.value.trim();
        const taskTime = taskDatetime.value;

        if (!taskText || !taskTime) {
            alert("Please enter both task description and date/time.");
            return;
        }

        addTask(taskText, taskTime);
        taskInput.value = "";
        taskDatetime.value = "";
    });

    // Add task function
    function addTask(text, time) {
        const li = document.createElement("li");

        const taskDetails = document.createElement("div");
        taskDetails.className = "task-details";
        const taskText = document.createElement("span");
        taskText.textContent = text;
        const taskTime = document.createElement("small");
        taskTime.textContent = new Date(time).toLocaleString();
        taskDetails.appendChild(taskText);
        taskDetails.appendChild(taskTime);

        const taskActions = document.createElement("div");
        taskActions.className = "task-actions";

        const completeBtn = document.createElement("button");
        completeBtn.className = "complete";
        completeBtn.textContent = "Complete";
        completeBtn.addEventListener("click", () => {
            taskText.classList.toggle("task-completed");
        });

        const editBtn = document.createElement("button");
        editBtn.className = "edit";
        editBtn.textContent = "Edit";
        editBtn.addEventListener("click", () => editTask(taskText, taskTime));

        const deleteBtn = document.createElement("button");
        deleteBtn.className = "delete";
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", () => li.remove());

        taskActions.appendChild(completeBtn);
        taskActions.appendChild(editBtn);
        taskActions.appendChild(deleteBtn);

        li.appendChild(taskDetails);
        li.appendChild(taskActions);
        taskList.appendChild(li);
    }

    // Edit task
    function editTask(taskText, taskTime) {
        const newTaskText = prompt("Edit Task", taskText.textContent);
        if (newTaskText) {
            taskText.textContent = newTaskText;
        }

        const newTime = prompt(
            "Edit Date & Time (YYYY-MM-DDTHH:MM)",
            new Date(taskTime.textContent).toISOString().slice(0, 16)
        );
        if (newTime) {
            taskTime.textContent = new Date(newTime).toLocaleString();
        }
    }
});
