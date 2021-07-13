import TodoProjects from './constructors.js';
import { mainContainer } from './topnavbar.js';

const newTodoformContainer = document.createElement('div');
newTodoformContainer.classList.add('addnewprojectform', 'form-hidden');
mainContainer.appendChild(newTodoformContainer);

export function addTodolink() {
  const addTodo = document.createElement('a');
  addTodo.classList.add('text-decoration-none', 'link-info');
  addTodo.textContent = '+ Add Task';
  addTodo.href = '#';
  addTodo.onclick = () => {
    newTodoformContainer.classList.remove('form-hidden');
    newTodoformContainer.classList.add('form-shown');
  };

  return addTodo;
}

const form = document.createElement('div');
form.classList.add('add-todo-form', 'position-absolute', 'top-50',
  'start-50', 'translate-middle', 'rounded-3');
newTodoformContainer.appendChild(form);

const formtitle = document.createElement('p');
formtitle.classList.add('text-light', 'bg-dark', 'w-100', 'p-2', 'rounded-top');
formtitle.textContent = 'Add new project';
form.appendChild(formtitle);

const addformclosebutton = document.createElement('buttom');
addformclosebutton.classList.add('btn', 'btn-outline-light', 'float-end', 'm-0', 'py-0');
addformclosebutton.textContent = 'X';

addformclosebutton.onclick = () => {
  newTodoformContainer.classList.add('form-hidden');
  newTodoformContainer.classList.remove('form-shown');
};

formtitle.appendChild(addformclosebutton);

const inputcontainer = document.createElement('div');
inputcontainer.classList.add('px-3', 'pb-3');
form.appendChild(inputcontainer);

const inputlabel = document.createElement('label');
inputlabel.textContent = 'Title:';
inputcontainer.appendChild(inputlabel);

export const titleinput = document.createElement('input');
titleinput.type = 'text';
titleinput.placeholder = 'Enter title here...';
titleinput.classList.add('form-control', 'my-1');
inputcontainer.appendChild(titleinput);

const deslabel = document.createElement('label');
deslabel.textContent = 'Description:';
inputcontainer.appendChild(deslabel);

export const descriptionInp = document.createElement('textarea');
descriptionInp.placeholder = 'Enter description here...';
descriptionInp.classList.add('form-control', 'my-1');
inputcontainer.appendChild(descriptionInp);

const datelabel = document.createElement('label');
datelabel.textContent = 'Date:';
inputcontainer.appendChild(datelabel);

export const dateInp = document.createElement('input');
dateInp.type = 'date';
dateInp.classList.add('form-control', 'my-1');
inputcontainer.appendChild(dateInp);

const priolabel = document.createElement('label');
priolabel.textContent = 'Priority:';
inputcontainer.appendChild(priolabel);

export const prioprityInp = document.createElement('select');
prioprityInp.classList.add('form-select', 'my-1');
prioprityInp.innerHTML = `<option value="Low">Low</option>
<option value="Normal">Normal</option>
<option value="High">High</option>`;
inputcontainer.appendChild(prioprityInp);

const notelabel = document.createElement('label');
notelabel.textContent = 'Notes:';
inputcontainer.appendChild(notelabel);

export const notesInp = document.createElement('textarea');
notesInp.placeholder = 'Enter notes here...';
notesInp.classList.add('form-control', 'my-1');
inputcontainer.appendChild(notesInp);

const projectlabel = document.createElement('label');
projectlabel.textContent = 'Add to project:';
inputcontainer.appendChild(projectlabel);

export const projecInp = document.createElement('select');
projecInp.classList.add('form-select', 'my-1');
for (let i = 0; i < TodoProjects.list.length; i += 1) {
  projecInp.innerHTML += `<option value="${i}">
    ${TodoProjects.list[i].name}</option>`;
}
inputcontainer.appendChild(projecInp);

export const newTodoBtn = document.createElement('buttom');
newTodoBtn.classList.add('btn', 'btn-success', 'mx-auto');
newTodoBtn.textContent = '+ New Task';
inputcontainer.appendChild(newTodoBtn);

export default newTodoformContainer;
