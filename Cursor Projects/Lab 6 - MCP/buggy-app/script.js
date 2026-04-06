// Task Tracker Pro – script.js

const taskStore = {
  getAll() {
    return JSON.parse(localStorage.getItem("tasks") || "[]");
  },
  save(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
};

function loadTasks() {
  console.log("Loading tasks from storage…");
  const tasks = taskStore.getAll();
  return tasks;
}

document.addEventListener("DOMContentLoaded", function () {
  const addBtn = document.getElementById("add-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  addBtn.addEventListener("click", function () {
    const text = taskInput.value.trim();
    if (!text) return;

    const li = document.createElement("li");
    li.textContent = text;
    taskList.appendChild(li);
    taskInput.value = "";
  });

  // This will throw immediately on page load
  loadTasks();
});
