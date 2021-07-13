import { TodosContainer } from './leftbar.js';
import { addTodo, addTodobuttom } from './createTodo.js';
import printEachTodo from './printTodos.js'

export const projectTodo = document.createElement('div');
projectTodo.classList.add('d-flex', 'flex-column', 'align-items-center', 'd-none');
TodosContainer.appendChild(projectTodo);

function projectTodoPrint(projectTitle, projectTodos, i) {

    projectTodo.innerHTML = '';

    const todayTitle = document.createElement('div');
    todayTitle.classList.add('d-flex', 'justify-content-center',
    'mt-5', 'align-items-center');
    todayTitle.innerHTML = `<h1 class="fs-4 m-0 p-0">${projectTitle} </h1>`;
    projectTodo.appendChild(todayTitle);
    projectTodo.appendChild(addTodo);

    let totalTo = 0;
    const printTodoContainer = document.createElement('div');
    printTodoContainer.classList.add('container-fluid', 'p-0', 'd-flex', 'my-2');

    for (let j in projectTodos){
        totalTo++;
        printTodoContainer.appendChild(printEachTodo(projectTodos[j], i, j));
    }

    projectTodo.appendChild(printTodoContainer);
    if(totalTo ===0){
      const notodosfound = new Image();
      notodosfound.classList.add('notodosfound');
      notodosfound.src = 'https://imgc.artprintimages.com/img/print/nothing-yet-sir-but-we-have-found-elvis-new-yorker-cartoon_u-l-pgqixi0.jpg';
      projectTodo.appendChild(notodosfound);
      projectTodo.appendChild(addTodobuttom);
    }

}



export default projectTodoPrint;