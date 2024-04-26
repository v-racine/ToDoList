
//This class represents a todo item and its associated data: the todo title and a boolean 
//flag that shows whether the item has been completed.
//The ToDo class will encapsulate todo items. 
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

//This class will maintain the collection of todo items. 
//You should be able to perform typical collection-oriented actions
//on a TodoList object, including iteration and selection.
class ToDoList {
  constructor(title) {
    this.title = title;
    this.todos = [];
  }

  add(todo) {
    if (!(todo instanceof ToDo)) {
      throw new TypeError("can only add ToDo objects")
    } else {
      this.todos.push(todo);
    }
  }

  size() {
    return this.todos.length;
  }

  first() {
    return this.todos[0];
  }
  
  last() {
    return this.todos[this.todos.length - 1];
  }

  itemAt(index) {
    this._validateIndex(index);
    return this.todos[index];
  }

  _validateIndex(index) { // _ in name suggests a "private" method
    if (!(index in this.todos)) {
      throw new ReferenceError(`invalid index: ${index}`);
    }
  }

  markDoneAt(idx) {
    this._validateIndex(idx);
    let task = this.todos[idx];
    task.markDone();
    
  }

  markUndoneAt(idx) {
    this._validateIndex(idx);
    let task = this.todos[idx];
    task.markUndone();
  }

  isDone() {
    return this.todos.every((task) => task.done === true);
  }

  shift() {
    let first = this.todos.shift();
    return first;
  }

  pop() {
    let last = this.todos.pop();
    return last;
  }

  removeAt(idx) {
    this._validateIndex(idx);
    return this.todos.splice(idx, 1);
  }

  toString() {
    let title = `---- ${this.title} ----`;
    let list = this.todos.map(todo => todo.toString()).join("\n");
    return `${title}\n${list}`;
  }

  forEach(callback) {
    this.todos.forEach(callback);
  }

}

//TESTS 
let todo1 = new ToDo("Buy milk");
let todo2 = new ToDo("Clean room");
let todo3 = new ToDo("Go to the gym");
let todo4 = new ToDo("Go shopping");
let todo5 = new ToDo("Feed the cats");
let todo6 = new ToDo("Study for Launch School");
let list = new ToDoList("Today's Todos");


list.add(todo1);
list.add(todo2);
list.add(todo3);
list.add(todo4);
list.add(todo5);
list.add(todo6);
console.log(list);

//list.todos.forEach(todo => console.log(String(todo)));
//list.forEach(todo => console.log(todo.toString()));