// Contact Form submission
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you! Form submitted.");
  this.reset();
});

// To-Do List
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.innerHTML = `${taskText} <span onclick="this.parentElement.remove()">×</span>`;
  document.getElementById("taskList").appendChild(li);

  taskInput.value = "";
}