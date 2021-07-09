import TodoProjects from './constructors.js';
import {TodosContainer} from './leftbar.js';
import {addTodo, addTodobuttom} from './createTodo.js';
import { format, compareAsc } from 'date-fns'

const todayTodo = document.createElement('div');
todayTodo.classList.add('d-flex', 'flex-column', 'align-items-center')
TodosContainer.appendChild(todayTodo);

const todayTitle = document.createElement('div');
todayTitle.classList.add('d-flex', 'justify-content-center',
'mt-5', 'align-items-center');
todayTitle.innerHTML = `<h1 class="fs-4 m-0 p-0">Today </h1>
<p class="text-muted my-0 mx-2"> ${format(new Date(), 'EEE MMM dd')}</p>`;
todayTodo.appendChild(todayTitle);

todayTodo.appendChild(addTodo);

function checkTodos(list){
    let count =0;
    for(let i in list){
        if(list[i].length > 0){
            return true;
        }
    }
    return false;
}

if (checkTodos(TodoProjects.list)){
    console.log('hay todos');
} else{
    //console.log('no hay todos');
    const notodosfound = new Image();
    notodosfound.classList.add('notodosfound');
    notodosfound.src = 'https://imgc.artprintimages.com/img/print/nothing-yet-sir-but-we-have-found-elvis-new-yorker-cartoon_u-l-pgqixi0.jpg';
    todayTodo.appendChild(notodosfound);

    todayTodo.appendChild(addTodobuttom);
}

export default todayTodo;