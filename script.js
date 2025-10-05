function addTask() {
  let input = document.getElementById("taskInput");
  if (!input.value.trim()) return alert("Enter task!");
  let li = document.createElement("li");
  li.innerHTML = `${input.value}
    <span>
      <button onclick="editTask(this)">Edit</button>
      <button onclick="this.parentElement.parentElement.remove()">Del</button>
    </span>`;
  document.getElementById("taskList").appendChild(li);
  input.value = "";
}

function editTask(btn) {
  let li = btn.parentElement.parentElement;
  let newText = prompt("Edit task:", li.firstChild.textContent.trim());
  if (newText) li.firstChild.textContent = newText + " ";
}
