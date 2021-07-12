export function ToDo(id, title, description, dueDate, priority, notes, checklist) {
  this.id = id;
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
  this.notes = notes;
  this.checklist = checklist;
}

function TodoList(id, name) {
  this.id = id;
  this.name = name;
  this.list = [];
}

export function ProjectList() {
  this.list = [];
  this.load = function () {
    this.list = JSON.parse(localStorage.getItem('TODO'));
    if (this.list === null) {
      this.list = [];
    }
  };
  this.save = function () {
    localStorage.setItem('TODO', JSON.stringify(this.list));
    window.location.reload();
  };
  this.new = function (name) {
    console.log(this.list.length);
    this.list.push(new TodoList(this.list.length, name));
  };
  this.delete = function (index) {
    this.list.splice(index, 1);
    this.save();
  };
  this.newTodo = function (index, title, description, dueDate, priority, notes, checklist) {
    const newTodo = new ToDo(this.list[index].list.length, title,
      description, dueDate, priority, notes, checklist);
    this.list[index].list.push(newTodo);
    this.save();
    window.location.reload();
  };
  this.deleteTodo = function (indexa, indexb){
    this.list[indexa].list.splice(indexb,1);
    this.save();
  };
}

// localStorage.clear();
const TodoProjects = new ProjectList();
TodoProjects.load();

export default TodoProjects;
