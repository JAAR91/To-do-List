import { format, parseISO } from 'date-fns';
import TodoProjects from './constructors.js';
import { editFillInputs, addbuttonClick } from './createTodo.js';

function printEachTodo(todo, i, j) {
  const TodoDivContainer = document.createElement('div');
  TodoDivContainer.classList.add('col-3', 'm-0', 'p-2');

  const TodoDiv = document.createElement('div');
  TodoDiv.classList.add('rounded', 'border', 'shadow',
    'bg-body', 'position-relative', 'p-2', 'h-100');

  TodoDiv.innerHTML += `<div class="border-bottom d-flex align-items-center m-0 justify-content-center mt-4">
    <p class="fs-3 text-center my-0 mx-1">${todo.title}</p>
    <p class="text-muted my-0 mx-1">(${todo.priority})</p>
    </div>
    <p class="text-muted m-0">Due: ${format(parseISO(todo.dueDate), 'EEE MMM d Y')}</p>
    <div class="d-flex flex-column my-1">
    <p class="text-muted m-0">Description:</p>
    <p class="p-0">${todo.description}</p>
    </div>
    <div class="my-1">
    <p class="text-muted m-0">Notes</p>
    <p class="m-0">${todo.notes}</p>
    </div>`;

  TodoDivContainer.appendChild(TodoDiv);

  const checkcontainer = document.createElement('div');
  checkcontainer.classList.add('form-check', 'form-switch', 'p-0',
    'd-flex', 'align-items-center');
  TodoDiv.appendChild(checkcontainer);

  const checklabel = document.createElement('p');
  checklabel.classList.add('m-0', 'p-0');
  checklabel.textContent = 'Completed:';
  checkcontainer.appendChild(checklabel);

  const checklistprintInp = document.createElement('input');
  checklistprintInp.type = 'checkbox';
  checklistprintInp.classList.add('m-0', 'form-check-input');
  checklistprintInp.checked = todo.checklist;
  checkcontainer.appendChild(checklistprintInp);

  checklistprintInp.onclick = () => {
    TodoProjects.updateTodo(i, j, checklistprintInp.checked);
  };

  const deleteTodo = document.createElement('button');
  deleteTodo.classList.add('deleteTodoBtn');
  deleteTodo.onclick = () => {
    TodoProjects.deleteTodo(i, j);
  };
  TodoDiv.appendChild(deleteTodo);

  const editButton = document.createElement('button');
  editButton.classList.add('editTodoButon');
  TodoDiv.appendChild(editButton);

  editButton.onclick = () => {
    addbuttonClick();
    editFillInputs(todo.title, todo.description, todo.dueDate, todo.priority, todo.notes, i, j);
  };

  return TodoDivContainer;
}

export default printEachTodo;