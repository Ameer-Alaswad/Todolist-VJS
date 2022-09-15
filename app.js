const todosContainer = document.querySelector("ul");
const submit = document.querySelector("form");
const textInput = document.querySelector("#textInput");
const addAtodo = document.querySelector("#addAtodo");
const removeTodos = document.querySelector("#remove-all-todos");
const removeChecked = document.querySelector("#remove-all-checked");
const checkAllTodos = document.querySelector("#check-all-todos");

submit.addEventListener("submit", (e) => {
  if (textInput.value === "") {
    e.preventDefault();
    textInput.setCustomValidity("Plz add a Todo!");
  } else {
    e.preventDefault();
    addAtodo.textContent = "";
    let list = document.createElement("li");
    let text = document.createTextNode(textInput.value);
    let span = document.createElement("span");
    let deleteCheckboxContainer = document.createElement("span");
    span.appendChild(text);
    const DeleteButton = document.createElement("button");
    list.appendChild(span);
    DeleteButton.innerHTML = "X";
    var checkbox = document.createElement("INPUT");
    checkbox.setAttribute("type", "checkbox");
    deleteCheckboxContainer.appendChild(checkbox);
    deleteCheckboxContainer.appendChild(DeleteButton);
    list.appendChild(deleteCheckboxContainer);
    todosContainer.appendChild(list);
    list.classList.add("lis");
    span.classList.add("spanStyle");
    deleteCheckboxContainer.classList.add("deleteCheckboxContainer");
    DeleteButton.classList.add("deleteButton");
    checkbox.classList.add("checkbox");
    DeleteButton.addEventListener("click", () => {
      list.remove();
      if (todosContainer.children.length === 0) {
        addAtodo.textContent = "There are no Todos!";
      }
    });
    checkbox.addEventListener("click", (e) => {
      let checkboxState = e.target.checked;
      if (checkboxState) {
        span.style.opacity = "0.5";
        span.style.textDecoration = "line-through";
      } else {
        span.style.opacity = "1";
        span.style.textDecoration = "none";
      }
    });
    textInput.value = "";
  }
  const allLis = document.querySelectorAll("li");
  removeTodos.addEventListener("click", () => {
    [...allLis].map((li) => {
      li.remove();
      addAtodo.textContent = "There are no Todos!";
    });
  });
  removeChecked.addEventListener("click", () => {
    let deleteChecked = [...allLis].map((li) => {
      if (li.childNodes[1].children[0].checked) {
        li.remove();
        if (todosContainer.children.length === 0) {
          addAtodo.textContent = "There are no Todos!";
        }
      }
    });
  });
  checkAllTodos.addEventListener("click", (e) => {
    [...allLis].map((li) => {
      if (!li.childNodes[1].children[0].checked) {
        li.childNodes[1].children[0].checked = "true";
        li.children[0].classList.add("todoStyling");
      }
    });
  });
});
