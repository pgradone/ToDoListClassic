refreshHTMLlists();

document.querySelector("form").addEventListener("submit", function (evnt) {
  evnt.preventDefault();
  const newTaskValue = document.querySelector("#newthing").value;
  const newTask = { done: false, task: newTaskValue };
  addToList(newTaskValue, false);
  todoArray.push(newTask);
  console.log(todoArray);
  refreshHTMLlists();
});

function refreshHTMLlists() {
  // remove all items from the 2 lists
  document.querySelector("#listtodo").innerHTML = "";
  document.querySelector("#listdone").innerHTML = "";
  // add all data of the Array to the list
  for (const todoData of todoArray) {
    addToList(todoData.task, todoData.done);
  }
}

function addToList(task, done) {
  // define the PARENT list item
  const myList = done
    ? document.querySelector("#listdone")
    : document.querySelector("#listtodo");
  // create the 'list' item and append to list
  const liHTML = document.createElement("li");
  myList.append(liHTML);
  // create the 'input' item and append it inside the <li>
  const inputHTML = document.createElement("input");
  liHTML.append(inputHTML);
  // set attribute type='checkbox' to inputHTML
  inputHTML.type = "checkbox";
  // set 'checked' attribute of inputHTML to 'done' of data
  inputHTML.checked = done;
  // create the 'span' item, set its content and append to <li> also
  const spanHTML = document.createElement("span");
  spanHTML.textContent = task;
  liHTML.append(spanHTML);
  // set 'line-through' style to the span text (if done), otherwise none
  spanHTML.style.textDecoration = done ? "line-through" : "";
  // Make sure to update the task when the user clicks on the checkbox.
  // add 'click' event listener to input item by calling function
  inputHTML.addEventListener("click", function () {
    // change the data
    // find out which index of the array will be modified
    for (let index = 0; index < todoArray.length; index++) {
      // by comparing the task string
      // there is no other way to ID the task !
      if (task === todoArray[index].task) {
        todoArray[index].done = inputHTML.checked;
      }
    }
    refreshHTMLlists();
  });
}
