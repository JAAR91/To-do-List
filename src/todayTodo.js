import { format, compareAsc, isToday, parseISO, parse } from 'date-fns';
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

function printTodos() {
  let totalTo = 0;
  const printTodoContainer = document.createElement('div');
  printTodoContainer.classList.add('container-fluid', 'p-0', 'd-flex', 'my-2');
  for(let i in TodoProjects.list){
    for(let j in TodoProjects.list[i].list){
      if (isToday(parseISO(TodoProjects.list[i].list[j].dueDate))){
        totalTo++;
        const TodoDiv = document.createElement('div');
        TodoDiv.classList.add('rounded', 'border','shadow', 'p-3', 'm-1',
        'bg-body', 'position-relative');
        TodoDiv.innerHTML += `<div class="border-bottom d-flex align-items-center m-0 justify-content-center">
        <p class="fs-3 text-center my-0 mx-1">${TodoProjects.list[i].list[j].title}</p>
        <p class="text-muted my-0 mx-1">(${TodoProjects.list[i].list[j].priority})</p>
        </div>
        <p class="text-muted m-0">Due: ${format(parseISO(TodoProjects.list[i].list[j].dueDate), "EEE MMM d Y")}</p>
        <div class="d-flex flex-column my-1">
        <p class="text-muted m-0">Description:</p>
        <p class="p-0">${TodoProjects.list[i].list[j].description}</p>
        </div>
        <div class="my-1">
        <p class="text-muted m-0">Notes</p>
        <p class="m-0">${TodoProjects.list[i].list[j].notes}</p>
        </div>`;

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
        checklistprintInp.checked = TodoProjects.list[i].list[j].checklist;
        checkcontainer.appendChild(checklistprintInp);

        checklistprintInp.onclick = () => {
            TodoProjects.updateTodo(i, j, checklistprintInp.checked);
        };

        printTodoContainer.appendChild(TodoDiv);

        const deleteTodo = document.createElement('button');
        deleteTodo.classList.add('deleteTodoBtn');
        deleteTodo.textContent = 'X';
        deleteTodo.onclick = () => {
            TodoProjects.deleteTodo(i, j);
        };
        TodoDiv.appendChild(deleteTodo);
      }
    }
  }
  todayTodo.appendChild(printTodoContainer);
  if(totalTo ===0){
    const notodosfound = new Image();
    notodosfound.classList.add('notodosfound');
    notodosfound.src = 'https://imgc.artprintimages.com/img/print/nothing-yet-sir-but-we-have-found-elvis-new-yorker-cartoon_u-l-pgqixi0.jpg';
    todayTodo.appendChild(notodosfound);
    todayTodo.appendChild(addTodobuttom);
  }
}

printTodos();

export default todayTodo;