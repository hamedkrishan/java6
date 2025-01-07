class ToDo {
  constructor() {
    this.taskInput = document.getElementById("taskinput");
    this.addBtn = document.querySelector("#addTask");
    this.taskList = document.getElementById("taskList");

    // Add a button for deleting selected tasks
    this.deleteSelectedBtn = document.createElement("button");
    this.deleteSelectedBtn.innerText = "Delete Selected";
    this.deleteSelectedBtn.classList.add("btn", "btn-danger", "mt-2");
    this.deleteSelectedBtn.disabled = true; // Initially disabled
    this.taskList.parentNode.appendChild(this.deleteSelectedBtn);

    this.addBtn.addEventListener("click", () => {
      this.addTask();
    });

    this.taskInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        this.addTask();
      }
    });

    this.deleteSelectedBtn.addEventListener("click", () => {
      this.deleteSelectedTasks();
    });
  }

  addTask() {
    const inputTask = this.taskInput.value;

    if (inputTask === "") {
      window.alert("Please enter value first");
      return;
    }

    const listItem = document.createElement("li");
    const inputSpan = document.createElement("span");
    const completedBtn = document.createElement("button");
    const deleteBtn = document.createElement("button");
    const editBtn = document.createElement("button");
    const taskCheckbox = document.createElement("input");

    // Create the checkbox for marking task completion
    taskCheckbox.type = "checkbox";
    taskCheckbox.addEventListener("change", () => {
      this.toggleComplete(inputSpan, taskCheckbox);
      this.updateDeleteSelectedButtonState();
    });

    completedBtn.addEventListener("click", () => {
      this.toggleComplete(inputSpan, taskCheckbox);
    });

    deleteBtn.addEventListener("click", () => {
      this.deleteTask(listItem);
      this.updateDeleteSelectedButtonState();
    });

    editBtn.addEventListener("click", () => {
      this.editTask(inputSpan, listItem);
    });

    completedBtn.classList.add("btn", "btn-success");
    deleteBtn.classList.add("btn", "btn-danger");
    editBtn.classList.add("btn", "btn-warning");

    listItem.classList.add("mb-4", "gab");

    inputSpan.innerText = inputTask;
    completedBtn.innerText = "Complete";
    deleteBtn.innerText = "Delete";
    editBtn.innerText = "Edit";

    listItem.appendChild(taskCheckbox); // Add checkbox
    listItem.appendChild(inputSpan);
    listItem.appendChild(completedBtn);
    listItem.appendChild(deleteBtn);
    listItem.appendChild(editBtn);

    this.taskList.appendChild(listItem);

    this.taskInput.value = "";
    this.updateDeleteSelectedButtonState();
  }

  toggleComplete(task, checkbox) {
    if (checkbox.checked) {
      task.classList.add("completed");
    } else {
      task.classList.remove("completed");
    }
  }

  deleteTask(task) {
    task.remove();
  }

  deleteSelectedTasks() {
    const checkboxes = this.taskList.querySelectorAll(
      "input[type='checkbox']:checked"
    );
    checkboxes.forEach((checkbox) => {
      const listItem = checkbox.parentNode;
      listItem.remove();
    });
    this.updateDeleteSelectedButtonState();
  }

  editTask(taskSpan, listItem) {
    this.taskInput.value = taskSpan.innerText;
    this.deleteTask(listItem);
    this.taskInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter" && this.taskInput.value !== "") {
        taskSpan.innerText = this.taskInput.value;
        this.addTask();
        this.taskInput.value = "";
      }
    });
  }

  updateDeleteSelectedButtonState() {
    const anyChecked =
      this.taskList.querySelector("input[type='checkbox']:checked") !== null;
    this.deleteSelectedBtn.disabled = !anyChecked;
  }
}

const todoTask = new ToDo();
