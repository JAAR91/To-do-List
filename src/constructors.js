export function ToDo(id, title, description, dueDate, priority, notes, checklist) {
  this.id = id;
  this.title = title;
  this.desccription = description;
  this.dueDate = dueDate;
  this.priority = priority;
  this.notes = notes;
  this.checklist = checklist;
}

export function Alist(id, name) {
  this.id = id;
  this.name = name;
  this.list = [];
  this.add = function (title, description, dueDate, priority, notes, checklist) {
    this.list.push(new ToDo(this.list.length, title, description, dueDate, priority, notes, checklist));
  };
  this.delete = function (index) {
    this.list.splice(index, 1);
  };
}

export function ProjectList() {
  this.list = [];
  this.load = function () {
    this.list = JSON.parse(localStorage.getItem('TODO'));
  };
  this.save = function () {
    localStorage.setItem('TODO', JSON.stringify(this.list));
  };
  this.new = function (name) {
    this.list.push(new Alist(this.list.length, name));
  };
  this.delete = function (index) {
    console.log(index);
    this.list.splice(index, 1);
    this.save();
    window.location.reload();
  };
}

const TodoProjects = new ProjectList();

export default TodoProjects;
