document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const deadlineInput = document.getElementById("deadlineInput");
    const priorityInput = document.getElementById("priorityInput");
    const taskList = document.getElementById("taskList");
    const addTaskButton = document.getElementById("addTask");

    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        const deadlineText = deadlineInput.value;
        const priorityText = priorityInput.value;

        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        const taskDiv = document.createElement("div");
        taskDiv.classList.add("task");
        taskDiv.innerHTML = `
            <span>${taskText}</span>
            <span>${deadlineText}</span>
            <span>${priorityText}</span>
            <button class="delete">Delete</button>
        `;

        taskList.appendChild(taskDiv);
        taskInput.value = "";
        deadlineInput.value = "";
        priorityInput.value = "low";

        const deleteButton = taskDiv.querySelector(".delete");
        deleteButton.addEventListener("click", function () {
            taskList.removeChild(taskDiv);
        });
    });
});
