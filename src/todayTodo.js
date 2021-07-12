import { format, compareAsc } from 'date-fns';
import TodoProjects from './constructors.js';
import { TodosContainer } from './leftbar.js';
import { addTodo, addTodobuttom } from './createTodo.js';

const todayTodo = document.createElement('div');
todayTodo.classList.add('d-flex', 'flex-column', 'align-items-center');
TodosContainer.appendChild(todayTodo);

const todayTitle = document.createElement('div');
todayTitle.classList.add('d-flex', 'justify-content-center',
  'mt-5', 'align-items-center');
todayTitle.innerHTML = `<h1 class="fs-4 m-0 p-0">Today </h1>
<p class="text-muted my-0 mx-2"> ${format(new Date(), 'EEE MMM dd')}</p>`;
todayTodo.appendChild(todayTitle);

todayTodo.appendChild(addTodo);

function checkTodos(TodoProjects) {
  const count = 0;
  for (const i in TodoProjects.list) {
    if (TodoProjects.list[0].list.length > 0) {
      return true;
    }
  }
  return false;
}

if (checkTodos(TodoProjects)) {
  const printTodoContainer = document.createElement('div');
  printTodoContainer.classList.add('container-fluid', 'p-0', 'd-flex', 'my-2');

  for (let i in TodoProjects.list){
    for(let j in TodoProjects.list[i].list){
      const TodoDiv = document.createElement('div');
      TodoDiv.classList.add('rounded', 'border','shadow', 'p-3', 'm-1', 'bg-body');
      
      TodoDiv.innerHTML += `<div class="border-bottom d-flex align-items-center m-0 justify-content-center">
        <p class="fs-3 text-center my-0 mx-1">${TodoProjects.list[i].list[j].title}</p>
        <p class="text-muted my-0 mx-1">(${TodoProjects.list[i].list[j].priority})</p>
      </div>
      <p class="text-muted m-0">Due Date: ${format(Date.parse(TodoProjects.list[i].list[j].dueDate, 1), 'EEE MMM d, Y')}</p>
      <div class="d-flex flex-column my-1">
        <p class="text-muted m-0">Description:</p>
        <p class="p-0">${TodoProjects.list[i].list[j].description}</p>
      </div>
      <p>Notes: ${TodoProjects.list[i].list[j].notes}</p>
      <p>Check: ${TodoProjects.list[i].list[j].checklist}</p>`;
      printTodoContainer.appendChild(TodoDiv);

      const deleteTodo = document.createElement('button');
      deleteTodo.classList.add('btn','btn-outline-danger','float-end', 'btn-sm', 'm-0');
      deleteTodo.textContent = 'X';
      deleteTodo.onclick = () => {
        TodoProjects.deleteTodo(i,j);
      };
      TodoDiv.appendChild(deleteTodo);
    }
  }
  todayTodo.appendChild(printTodoContainer);
} else { 
  const notodosfound = new Image();
  notodosfound.classList.add('notodosfound');
  notodosfound.src = 'https://imgc.artprintimages.com/img/print/nothing-yet-sir-but-we-have-found-elvis-new-yorker-cartoon_u-l-pgqixi0.jpg';
  todayTodo.appendChild(notodosfound);
  todayTodo.appendChild(addTodobuttom);
}

export default todayTodo;