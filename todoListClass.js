//This class will maintain the collection of todo items. 
class ToDoList {}


//This class represents a todo item and its associated data: the todo title and a boolean 
//flag that shows whether the item has been completed.
//The ToDo class will encapulate todo items. 
class ToDo {
  static DONE_MARKER = "X";
  static UNDONE_MARKER = " ";

  constructor(title) {
    this.title = title;
    this.done = false;
  }

  toString() {
    let marker = this.isDone() ? ToDo.DONE_MARKER : ToDo.UNDONE_MARKER;
    return `[${marker}] ${this.title}`;
  }

  markDone() {
    this.done = true;
  }

  markUndone() {
    this.done = false;
  }

  isDone() {
    return this.done;
  }

  getTitle() {
    return this.title;
  }
}


let todo1 = new ToDo("Buy milk");
let todo2 = new ToDo("Clean room");
let todo3 = new ToDo("Go to the gym");

// console.log(todo1);
// console.log(String(todo1));
console.log(todo1.toString()); // [] Buy milk
console.log(todo2.toString()); // [] Clean room 
console.log(todo3.toString()); // [] Go to the gym
 
todo1.markDone();
console.log(todo1.toString()); // [X] Buy milk
console.log(todo1.isDone() ? "The task is completed." : "The task is not yet completed");
// The task is completed. 
console.log(todo3.getTitle()); // Go to the gym