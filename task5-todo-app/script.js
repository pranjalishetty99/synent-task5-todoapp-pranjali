window.onload = function() {
    showTasks();
};

function addTask() {

    let input = document.getElementById("taskInput");

    let task = input.value;

    if (task === "") {
        alert("Please enter a task");
        return;
    }

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.push(task);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    showTasks();

    input.value = "";
}

function showTasks() {

    let taskList = document.getElementById("taskList");

    taskList.innerHTML = "";

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach(function(task, index) {

        let li = document.createElement("li");

        li.innerHTML = task +
            " <button onclick='completeTask(this)'>Complete</button> " +
            " <button onclick='removeTask(" + index + ")'>Delete</button>";

        taskList.appendChild(li);

    });
}

function removeTask(index) {

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.splice(index, 1);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    showTasks();
}

function completeTask(button) {
    button.parentElement.style.textDecoration = "line-through";
}