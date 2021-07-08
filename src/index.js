import menuButtom from './topnavbar.js';
import printProjectlist,{
  menuContainer, ProjectsLink, leftbarprojectList, addProjects
} from './leftbar.js';
import formContainer,{newProjectButton, nameinpuit} from './newprojectform.js';
import './styles.css';
import { ProjectList } from './constructors.js';

const TodoProjects = new ProjectList();
TodoProjects.load();
console.log(TodoProjects.list);

menuButtom.onclick = () => {
  if (menuContainer.classList.contains('menuopen')) {
    menuContainer.classList.remove('menuopen');
    menuContainer.classList.add('menuclose');
  } else {
    menuContainer.classList.add('menuopen');
    menuContainer.classList.remove('menuclose');
  }
};

ProjectsLink.onclick = () => {
  if (ProjectsLink.classList.contains('activated')) {
    ProjectsLink.classList.remove('activated');
    ProjectsLink.innerHTML = '<img class="mx-3 arrow-rotate" src="https://image.flaticon.com/icons/png/512/43/43478.png" style="width:12px;"> Projects';
  } else {
    ProjectsLink.classList.add('activated');
    ProjectsLink.innerHTML = '<img class="mx-3 arrow-rotate-back" src="https://image.flaticon.com/icons/png/512/43/43478.png" style="width:12px;"> Projects';
  }
  if (leftbarprojectList.classList.contains('d-none')) {
    leftbarprojectList.classList.remove('d-none');
  } else {
    leftbarprojectList.classList.add('d-none');
  }
};

printProjectlist(TodoProjects.list);

addProjects.onclick = () => {
    formContainer.classList.remove('form-hidden');
    formContainer.classList.add('form-shown');
};

newProjectButton.onclick = () => {
    TodoProjects.new(nameinpuit.value);
    TodoProjects.save();
    window.location.reload();
};