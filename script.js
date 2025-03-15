const toDoInput = document.getElementById("todoInput");
const addToDOButton = document.getElementById("addTodoButton");
const toDoList = document.getElementById("todoList");

addToDOButton.addEventListener("click", addToDO);

function addToDO() {
  const toDoText = toDoInput.value.trim();
  if (toDoText !== "") {
    const li = document.createElement("li");
    li.textContent = toDoText;
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "💩";
    deleteButton.addEventListener("click", () => {
      li.remove();
    });

    li.appendChild(deleteButton);
    toDoList.appendChild(li);

    toDoInput.value = "";
  }
}
