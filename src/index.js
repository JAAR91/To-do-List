import {mainContainer, menuButtom} from './topnavbar.js';
import {menuContainer, ProjectsLink, leftbarprojectList, printProjectlist} from './leftbar.js';
import {ProjectList} from  './constructors.js';
import './styles.css';

let projectsList = new ProjectList;
projectsList.load;

menuButtom.onclick = () => {
    if (menuContainer.classList.contains('d-none')){
        menuContainer.classList.remove('d-none');
    } else {
        menuContainer.classList.add('d-none');
    }
};

ProjectsLink.onclick = () => {
    if (ProjectsLink.classList.contains('activated')){
        ProjectsLink.classList.remove('activated');
        ProjectsLink.innerHTML = `<img class="mx-3" src="https://image.flaticon.com/icons/png/512/43/43478.png" style="width:14px;"> Projects`;
    } else {
        ProjectsLink.classList.add('activated');
        ProjectsLink.innerHTML = `<img class="mx-3" src="https://image.flaticon.com/icons/png/512/43/43478.png" style="width:14px; transform: rotate(90deg);"> Projects`;
    }
    if (leftbarprojectList.classList.contains('d-none')){
        leftbarprojectList.classList.remove('d-none');
    } else {
        leftbarprojectList.classList.add('d-none');
    }
};

printProjectlist([{name:'project1', list:[1,2,3]}, {name:'project2', list:[1,2,3,4,5]},{name:'project3', list:[1]}]);



