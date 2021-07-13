import {
  format, isToday, parseISO,
} from 'date-fns';
import TodoProjects from './constructors.js';
import { TodosContainer } from './leftbar.js';
import printEachTodo from './printTodos.js';
import { addTodolink } from './createTodo.js';

const todayTodo = document.createElement('div');
todayTodo.classList.add('d-flex', 'flex-column', 'align-items-center');
TodosContainer.appendChild(todayTodo);

const todayTitle = document.createElement('div');
todayTitle.classList.add('d-flex', 'justify-content-center',
  'mt-5', 'align-items-center');
todayTitle.innerHTML = `<h1 class="fs-4 m-0 p-0">Today </h1>
<p class="text-muted my-0 mx-2"> ${format(new Date(), 'EEE MMM dd')}</p>`;
todayTodo.appendChild(todayTitle);

todayTodo.appendChild(addTodolink());

function printTodos() {
  let totalTo = 0;
  const printTodoContainer = document.createElement('div');
  printTodoContainer.classList.add('container-fluid', 'p-0', 'd-flex', 'my-2');
  for (let i = 0; i < TodoProjects.list.length; i += 1) {
    for (let j = 0; j < TodoProjects.list[i].list.lenght; j += 1) {
      if (isToday(parseISO(TodoProjects.list[i].list[j].dueDate))) {
        totalTo += 1;
        printTodoContainer.appendChild(printEachTodo(TodoProjects.list[i].list[j], i, j));
      }
    }
  }
  todayTodo.appendChild(printTodoContainer);
  if (totalTo === 0) {
    const notodosfound = new Image();
    notodosfound.classList.add('notodosfound');
    notodosfound.src = 'https://imgc.artprintimages.com/img/print/nothing-yet-sir-but-we-have-found-elvis-new-yorker-cartoon_u-l-pgqixi0.jpg';
    todayTodo.appendChild(notodosfound);
  }
}

printTodos();

export default todayTodo;