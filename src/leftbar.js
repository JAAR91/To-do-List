import {mainContainer} from './topnavbar';

export const menuContainer = document.createElement('div');
menuContainer.classList.add('d-flex', 'flex-column', 'menuContainer');
mainContainer.appendChild(menuContainer);

const todayLink = document.createElement('a');
todayLink.classList.add('text-decoration-none', 'leftmenu-links', 'p-2', 'active-link');
todayLink.href = '#';
todayLink.id = 'linkmenu1';
todayLink.innerHTML += '<img class="m-2" src="https://image.flaticon.com/icons/png/512/1134/1134921.png" style="width:20px;">Today';
menuContainer.appendChild(todayLink);

const upcomingLink = document.createElement('a');
upcomingLink.classList.add('text-decoration-none', 'leftmenu-links', 'p-2');
upcomingLink.href = '#';
upcomingLink.innerHTML += '<img class="m-2" src="https://image.flaticon.com/icons/png/512/1247/1247409.png" style="width:20px;">Upcoming';
upcomingLink.id = 'linkmenu2';
menuContainer.appendChild(upcomingLink);

const projectsContainer = document.createElement('div');
projectsContainer.classList.add('my-3');
menuContainer.appendChild(projectsContainer);

export const ProjectsLink = document.createElement('a');
ProjectsLink.classList.add('text-decoration-none', 'link-dark');
ProjectsLink.innerHTML = '<img class="mx-3" src="https://image.flaticon.com/icons/png/512/43/43478.png" style="width:14px; transform: rotate(90deg);"> Projects';
projectsContainer.appendChild(ProjectsLink);

export const addProjects = document.createElement('buttom');
addProjects.classList.add('btn', 'btn-outline-light', 'ms-5', 'py-0');
addProjects.textContent = '+';
addProjects.id = 'addbuttom';
projectsContainer.appendChild(addProjects);

export const leftbarprojectList = document.createElement('div');
leftbarprojectList.classList.add('d-flex', 'flex-column', 'p-0', 'ms-3');
projectsContainer.appendChild(leftbarprojectList);

export default function printProjectlist(ProjectList) {
  let idmenu = 2;
  for (const i in ProjectList.list) {
    idmenu++;

    const menuprojectLinks = document.createElement('a');
    menuprojectLinks.classList.add('text-decoration-none',
    'leftmenu-links', 'd-flex', 'justify-content-between',
    'my-1', 'p-2');
    menuprojectLinks.href = '#';
    menuprojectLinks.id = 'linkmenu' + idmenu;
    menuprojectLinks.textContent = ProjectList.list[i].name;
    leftbarprojectList.appendChild(menuprojectLinks);

    const projectbadge = document.createElement('buttom');
    projectbadge.classList.add('text-dark', 'my-0', 'mx-3', 'px-2', 'py-auto',
    'delete-projecct-btn');
    projectbadge.id = i;
    projectbadge.innerHTML = `<p class="p-0 m-0">${ProjectList.list[i].list.length}</p>`;
    menuprojectLinks.append(projectbadge);
  }
  return idmenu;
}

export const TodosContainer = document.createElement('div');
TodosContainer.classList.add('TodosContainer', 'todoscondefault', 'p-3');
mainContainer.appendChild(TodosContainer);

