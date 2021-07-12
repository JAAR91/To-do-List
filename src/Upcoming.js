import { format, compareAsc, isToday, parseISO } from 'date-fns';
import TodoProjects from './constructors.js';
import { TodosContainer } from './leftbar.js';
import { addTodo, addTodobuttom } from './createTodo.js';

const upcomingTodo = document.createElement('div');
upcomingTodo.classList.add('d-flex', 'flex-column', 'align-items-center');
TodosContainer.appendChild(upcomingTodo);

export default upcomingTodo;