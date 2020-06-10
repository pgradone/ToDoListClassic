refreshHTMLlists();

document.querySelector("form").addEventListener("submit", function (evnt) {
  evnt.preventDefault();
  const newThingToDo = document.querySelector("#newthing");
  addToList(newThingToDo.value, false);
  todoArray.push({ done: false, task: newThingToDo.value });
  console.log(todoArray);
  newThingToDo.value = "";
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
  // create the 'list' item
  const liHTML = document.createElement("li");
  // append item to the list
  myList.append(liHTML);
  // create the 'input' item
  const inputHTML = document.createElement("input");
  // append it inside the parent 'li' created previously
  liHTML.append(inputHTML);
  // add attribute type='checkbox' to inputHTML
  inputHTML.type = "checkbox";
  // set 'checked' attribute of inputHTML to 'done' of data
  inputHTML.checked = done;
  // create the 'span' item
  const spanHTML = document.createElement("span");
  // insert the 'task' data into its innerHTML
  spanHTML.textContent = task;
  // also append it inside the parent 'li' created previously
  liHTML.append(spanHTML);
  // 'line-through' the span text if done
  spanHTML.style.textDecoration = done ? "line-through" : "";
  // Make sure to update the task when the user clicks on the checkbox.
  // add 'click' event listener to input item by calling function
  // inputHTML.addEventListener("click", function () {
  //   // change the GUI
  //   spanHTML.style.textDecoration = this.checked ? "line-through" : "";
  //   const elementToSwitch = this.parentElement.cloneNode(true);
  //   const nextList = this.checked
  //     ? document.querySelector("#listdone")
  //     : document.querySelector("#listtodo");
  //   nextList.append(elementToSwitch);
  //   this.parentElement.remove();
  //   console.log(todoArray);
  //   // then change the data
  //   // find out which index of the array will be modified
  //   // for (let index = 0; index < todoArray.length; index++) {
  //   //   // by comparing the task string
  //   //   // there is no other way to ID the task !
  //   //   if (task === todoArray[index].task) {
  //   //     todoArray[index].done = inputHTML.checked;
  //   //   }
  //   // }
  // });
}
