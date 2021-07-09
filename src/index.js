import TodoProjects from './constructors.js';
import menuButtom from './topnavbar.js';
import printProjectlist,{
  menuContainer, addProjects, TodosContainer
} from './leftbar.js';
import formContainer,{newProjectButton, nameinpuit} from './newprojectform.js';
import todoToday from './todayTodo.js'
import './styles.css';

TodoProjects.load();

menuButtom.onclick = () => {
  if (!menuContainer.classList.contains('menuopen') && !menuContainer.classList.contains('menuclose')) {
    menuContainer.classList.add('menuclose');
    TodosContainer.classList.remove('todoscondefault');
    TodosContainer.classList.add('todosconcenter');
  } else if(menuContainer.classList.contains('menuopen')) {
    menuContainer.classList.remove('menuopen');
    TodosContainer.classList.remove('todoscondefault');
    TodosContainer.classList.add('todosconcenter');
    menuContainer.classList.add('menuclose');
  } else {
    menuContainer.classList.add('menuopen');
    menuContainer.classList.remove('menuclose');
    TodosContainer.classList.remove('todosconcenter');
    TodosContainer.classList.add('todoscondefault');
  }
};

let menulinkstotal = printProjectlist(TodoProjects);

function menuklinkclick(currentbutton) {
    for(let i = 1; i <= menulinkstotal; i++){
      let abutton = document.getElementById('linkmenu' + i);
      if (abutton.id === currentbutton.id){
        abutton.classList.add('active-link');

      } else {
        abutton.classList.remove('active-link');
      }
    }
}

addProjects.onclick = () => {
    formContainer.classList.remove('form-hidden');
    formContainer.classList.remove('text-light');
    formContainer.classList.add('form-shown');
};

newProjectButton.onclick = () => {
    TodoProjects.new(nameinpuit.value);
    TodoProjects.save();
    window.location.reload();
};

function linkselect(evt) {
  if (evt.target.localName === 'a'){
    console.log(evt.target.textContent);
    menuklinkclick(evt.target);
  }
  if (evt.target.localName==='buttom' && evt.target.id !== 'addbuttom'){
    TodoProjects.delete(evt.target.id);
  }
}

menuContainer.addEventListener('click', linkselect);

