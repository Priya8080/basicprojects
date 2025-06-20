window.onload = function () {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.forEach(task => {
    createTaskElement(task);
  });
};
function addTask() {
  let input = document.getElementById("taskInput");
  let task = input.value.trim();

  if (task === "") {
    alert("Please enter a task.");
    return;
  }

  createTaskElement(task);
  saveTaskToStorage(task);
  input.value = "";
}

function createTaskElement(task) {
  let li = document.createElement("li");

  let span = document.createElement("span");
  span.textContent = task;
  span.onclick = function () {
  span.classList.toggle("completed");
};
   li.appendChild(span);

  let delBtn = document.createElement("button");
  delBtn.textContent = "Remove";
  delBtn.className = "remove";
  delBtn.onclick = function () {
    li.remove();
    removeTaskFromStorage(task);
  };

  li.appendChild(delBtn);
  document.getElementById("taskList").appendChild(li);
}

function saveTaskToStorage(task) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function removeTaskFromStorage(taskToRemove) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  let updatedTasks = tasks.filter(task => task !== taskToRemove);
  localStorage.setItem("tasks", JSON.stringify(updatedTasks));
}
