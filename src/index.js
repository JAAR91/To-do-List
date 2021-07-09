import menuButtom from './topnavbar.js';
import printProjectlist,{
  menuContainer, ProjectsLink, leftbarprojectList, addProjects, projectbadge
} from './leftbar.js';
import formContainer,{newProjectButton, nameinpuit} from './newprojectform.js';
import './styles.css';
import { ProjectList } from './constructors.js';

const TodoProjects = new ProjectList();
TodoProjects.load();

menuButtom.onclick = () => {
  if (!menuContainer.classList.contains('menuopen') && !menuContainer.classList.contains('menuclose')) {
    menuContainer.classList.add('menuclose');
  } else if(menuContainer.classList.contains('menuopen')) {
    menuContainer.classList.remove('menuopen');
    menuContainer.classList.add('menuclose');
  } else {
    menuContainer.classList.add('menuopen');
    menuContainer.classList.remove('menuclose');
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
