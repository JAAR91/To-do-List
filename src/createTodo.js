import TodoProjects from './constructors.js';
import {mainContainer} from './topnavbar';

export const addTodo = document.createElement('a');
addTodo.classList.add('text-decoration-none', 'link-info');
addTodo.textContent = '+ Add Task';
addTodo.href = '#';

export const addTodobuttom = document.createElement('buttom');
addTodobuttom.classList.add('btn', 'text-center', 'btn-info');
addTodobuttom.textContent = '+ Add Task';
addTodobuttom.href = '#';

const newTodoformContainer = document.createElement('div');
newTodoformContainer.classList.add('addnewprojectform','form-hidden');
mainContainer.appendChild(newTodoformContainer);

function createTodo() {
    newTodoformContainer.classList.remove('form-hidden');
    newTodoformContainer.classList.add('form-shown');
}

addTodo.addEventListener('click', createTodo);
addTodobuttom.addEventListener('click', createTodo);

const form = document.createElement('div');
form.classList.add('add-todo-form', 'position-absolute', 'top-50',
'start-50','translate-middle', 'rounded-3');
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

export const descriptionInp = document.createElement('input');
descriptionInp.type = 'text';
descriptionInp.placeholder = 'Enter description here...';
descriptionInp.classList.add('form-control', 'my-1');
inputcontainer.appendChild(descriptionInp);

const datelabel = document.createElement('label');
datelabel.textContent = 'Date:';
inputcontainer.appendChild(datelabel);

export const dateInp = document.createElement('input');
dateInp.type = 'datetime-local';
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

export const notesInp = document.createElement('input');
notesInp.type = 'text';
notesInp.placeholder = 'Enter notes here...';
notesInp.classList.add('form-control', 'my-1');
inputcontainer.appendChild(notesInp);

const projectlabel = document.createElement('label');
projectlabel.textContent = 'Add to project:';
inputcontainer.appendChild(projectlabel);

export const projecInp = document.createElement('select');
projecInp.classList.add('form-select', 'my-1');
for(let i in TodoProjects.list){
    projecInp.innerHTML +=`<option value="${i}">
    ${TodoProjects.list[i].name}</option>`;
}
inputcontainer.appendChild(projecInp);

const checkcontainer = document.createElement('div');
checkcontainer.classList.add('form-check', 'form-switch')
inputcontainer.appendChild(checkcontainer);

export const checklistInp = document.createElement('input');
checklistInp.type = 'checkbox';
checklistInp.classList.add( 'my-1', 'form-check-input');
checkcontainer.appendChild(checklistInp);

const checklabel = document.createElement('p');
checklabel.classList.add('m-0')
checklabel.textContent = 'Done?';
checklabel.style.width = '50px';
checkcontainer.appendChild(checklabel);

export const newTodoBtn = document.createElement('buttom');
newTodoBtn.classList.add('btn', 'btn-success', 'mx-auto');
newTodoBtn.textContent = '+ New Task';
inputcontainer.appendChild(newTodoBtn);

export default newTodoformContainer;
