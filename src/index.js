import TodoProjects from './constructors.js';
import menuButtom from './topnavbar.js';
import printProjectlist, {
  menuContainer, addProjects, TodosContainer,
} from './leftbar.js';
import formContainer, { newProjectButton, nameinput } from './newprojectform.js';
import todayTodo from './todayTodo.js';
import newTodoformContainer, {
  newTodoBtn, titleinput, descriptionInp, dateInp, prioprityInp, notesInp, projecInp } from './createTodo.js';
import upcomingTodo from './Upcoming.js'
import './styles.css';
import projectTodoPrint, {projectTodo} from './projecTodoPrint.js'

menuButtom.onclick = () => {
  if (!menuContainer.classList.contains('menuopen') && !menuContainer.classList.contains('menuclose')) {
    menuContainer.classList.add('menuclose');
    TodosContainer.classList.remove('todoscondefault');
    TodosContainer.classList.add('todosconcenter');
  } else if (menuContainer.classList.contains('menuopen')) {
    menuContainer.classList.remove('menuopen');
    TodosContainer.classList.remove('todoscondefault');
    TodosContainer.classList.add('todosconcenter');
    menuContainer.classList.add('menuclose');
  } else {
    menuContainer.classList.add('menuopen');
    menuContainer.classList.remove('menuclose');
    TodosContainer.classList.remove('todosconcenter');
    TodosContainer.classList.add('todoscondefault');
  }
};

const menulinkstotal = printProjectlist(TodoProjects);

function menuklinkclick(currentbutton) {
  for (let i = 1; i <= menulinkstotal; i++) {
    const abutton = document.getElementById(`linkmenu${i}`);
    if (abutton.id === currentbutton.id) {
      abutton.classList.add('active-link');
    } else {
      abutton.classList.remove('active-link');
    }
  }

  switch(currentbutton.textContent) {
    case 'Today':
      showTodaytodos();
      break;
    case 'Upcoming':
      showUpcomingTodos();
      break;
    default:
      printprojectsTodospage(currentbutton.textContent);
  }

}

addProjects.onclick = () => {
  formContainer.classList.remove('form-hidden');
  formContainer.classList.add('form-shown');
};

newProjectButton.onclick = () => {
  TodoProjects.new(nameinput.value);
  TodoProjects.save();
  window.location.reload();
};

newTodoBtn.onclick = () => {
  TodoProjects.newTodo(projecInp.value, titleinput.value,
    descriptionInp.value, dateInp.value, prioprityInp.value,
    notesInp.value, false);
};

function showTodaytodos(){
  todayTodo.classList.remove('d-none');
  upcomingTodo.classList.add('d-none');
  projectTodo.classList.add('d-none');
}

function showUpcomingTodos (){
  upcomingTodo.classList.remove('d-none');
  todayTodo.classList.add('d-none');
  projectTodo.classList.add('d-none');
}

function printprojectsTodospage(projectname){
  for(let i in TodoProjects.list){
    if (TodoProjects.list[i].name === projectname){
      projectTodoPrint(projectname, TodoProjects.list[i].list, i);
    }
  }
  upcomingTodo.classList.add('d-none');
  todayTodo.classList.add('d-none');
  projectTodo.classList.remove('d-none');
}

function linkselect(evt) {
  if (evt.target.localName === 'a') {
    menuklinkclick(evt.target);
  }
  if (evt.target.localName === 'buttom' && evt.target.id !== 'addbuttom') {
    TodoProjects.delete(evt.target.id);
  }
}

menuContainer.addEventListener('click', linkselect);

//console.log(TodoProjects);
