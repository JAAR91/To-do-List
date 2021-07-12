import { format, compareAsc, isToday, parseISO, parse } from 'date-fns';
import TodoProjects from './constructors.js';

function printTodos(TodosFiltered) {
    const printTodoContainer = document.createElement('div');
    printTodoContainer.classList.add('container-fluid', 'p-0', 'd-flex', 'my-2');

    for (let i in TodosFiltered){
        const TodoDiv = document.createElement('div');
        TodoDiv.classList.add('rounded', 'border','shadow', 'p-3', 'm-1',
        'bg-body', 'position-relative');
        
        TodoDiv.innerHTML += `<div class="border-bottom d-flex align-items-center m-0 justify-content-center">
        <p class="fs-3 text-center my-0 mx-1">${TodosFiltered.list[i].title}</p>
        <p class="text-muted my-0 mx-1">(${TodosFiltered.list[i].priority})</p>
        </div>
        <p class="text-muted m-0">Due: ${format(parseISO(TodosFiltered.list[i].dueDate), "EEE MMM d Y")}</p>
        <div class="d-flex flex-column my-1">
        <p class="text-muted m-0">Description:</p>
        <p class="p-0">${TodosFiltered.list[i].description}</p>
        </div>
        <div class="my-1">
        <p class="text-muted m-0">Notes</p>
        <p class="m-0">${TodosFiltered.list[i].notes}</p>
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
        checklistprintInp.checked = TodosFiltered.list[i].checklist;
        checkcontainer.appendChild(checklistprintInp);

        checklistprintInp.onclick = () => {
            //TodoProjects.updateTodo(i,checklistprintInp.checked);
        };

        printTodoContainer.appendChild(TodoDiv);

        const deleteTodo = document.createElement('button');
        deleteTodo.classList.add('deleteTodoBtn');
        deleteTodo.textContent = 'X';
        deleteTodo.onclick = () => {
            //TodoProjects.deleteTodo(i);
        };
        TodoDiv.appendChild(deleteTodo);
    }
    return printTodoContainer;
}

export default printTodos;