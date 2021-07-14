function ToDo(id, title, description, dueDate, priority, notes, checklist) {
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

function ProjectList() {
  this.list = [];
  this.load = () => {
    this.list = JSON.parse(localStorage.getItem('TODO'));
    if (this.list === null) {
      this.list = [new TodoList(0, 'Default')];
      this.save();
    }
  };
  this.save = () => {
    localStorage.setItem('TODO', JSON.stringify(this.list));
  };
  this.new = (name) => {
    this.list.push(new TodoList(this.list.length, name));
    window.location.reload();
  };
  this.delete = (index) => {
    this.list.splice(index, 1);
    this.save();
    window.location.reload();
  };
  this.newTodo = (index, title, description, dueDate, priority, notes, checklist) => {
    const newTodo = new ToDo(this.list[index].list.length, title,
      description, dueDate, priority, notes, checklist);
    this.list[index].list.push(newTodo);
    this.save();
    window.location.reload();
  };
  this.deleteTodo = (indexa, indexb) => {
    this.list[indexa].list.splice(indexb, 1);
    this.save();
    window.location.reload();
  };
  this.updateTodo = (i, j, value) => {
    this.list[i].list[j].checklist = value;
    this.save();
  };
  this.updateTodoinfo = (i, j, title, description, date, priority, notes) => {
    this.list[i].list[j].title = title;
    this.list[i].list[j].description = description;
    this.list[i].list[j].dueDate = date;
    this.list[i].list[j].priority = priority;
    this.list[i].list[j].notes = notes;
    this.save();
    window.location.reload();
  };
}

const TodoProjects = new ProjectList();
TodoProjects.load();

export default TodoProjects;
