import {
  format, compareAsc, parseISO,
} from 'date-fns';
import TodoProjects from './constructors.js';
import { TodosContainer } from './leftbar.js';
import printEachTodo from './printTodos.js';
import { addTodolink } from './createTodo.js';

const upcomingTodo = document.createElement('div');
upcomingTodo.classList.add('d-flex', 'flex-column', 'align-items-center', 'd-none');
TodosContainer.appendChild(upcomingTodo);

const todayTitle = document.createElement('div');
todayTitle.classList.add('d-flex', 'justify-content-center',
  'mt-5', 'align-items-center');
todayTitle.innerHTML = `<h1 class="fs-4 m-0 p-0">Upcoming </h1>
<p class="text-muted my-0 mx-2"> ${format(new Date(), 'EEE MMM dd')}</p>`;

upcomingTodo.appendChild(todayTitle);

upcomingTodo.appendChild(addTodolink());

let totalTo = 0;
const printTodoContainer = document.createElement('div');
printTodoContainer.classList.add('container-fluid', 'p-0', 'd-flex', 'my-2');
for (let i = 0; i < TodoProjects.list.length; i += 1) {
  for (let j = 0; j < TodoProjects.list[i].list.length; j += 1) {
    if (compareAsc(parseISO(TodoProjects.list[i].list[j].dueDate), new Date()) === 1) {
      totalTo += 1;
      printTodoContainer.appendChild(printEachTodo(TodoProjects.list[i].list[j], i, j));
    }
  }
}
upcomingTodo.appendChild(printTodoContainer);
if (totalTo === 0) {
  const notodosfound = new Image();
  notodosfound.classList.add('notodosfound');
  notodosfound.src = 'https://imgc.artprintimages.com/img/print/nothing-yet-sir-but-we-have-found-elvis-new-yorker-cartoon_u-l-pgqixi0.jpg';
  upcomingTodo.appendChild(notodosfound);
}

export default upcomingTodo;