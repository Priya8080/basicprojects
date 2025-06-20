function addTask() {
  let input = document.getElementById("taskInput");
  let task = input.value.trim();
  if (task === "") {
    alert("Please enter a task.");
    return;
  }
  let li = document.createElement("li");
  let span = document.createElement("span");
  span.textContent = task;
  li.appendChild(span);
  let delBtn = document.createElement("button");
  delBtn.textContent = "Remove";
  delBtn.style.marginLeft = "10px";
  delBtn.onclick = function () {
    li.remove();
  };
  li.appendChild(delBtn);
  document.getElementById("taskList").appendChild(li);
  input.value = "";
}

