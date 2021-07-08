import {mainContainer} from './topnavbar';
//const mainContainer = document.getElementById('container');

export const menuContainer = document.createElement('div');
menuContainer.classList.add('d-flex', 'flex-column', 'menuContainer', 'menuopen');
mainContainer.appendChild(menuContainer);

const todayLink = document.createElement('a');
todayLink.classList.add('link-light', 'text-decoration-none', 'leftmenu-links', 'p-2', 'active-link');
todayLink.href = '#';
todayLink.innerHTML += '<img class="m-2" src="https://image.flaticon.com/icons/png/512/1134/1134921.png" style="width:20px;">Today';
menuContainer.appendChild(todayLink);

const upcomingLink = document.createElement('a');
upcomingLink.classList.add('link-light', 'text-decoration-none', 'leftmenu-links', 'p-2');
upcomingLink.href = '#';
upcomingLink.innerHTML += '<img class="m-2" src="https://image.flaticon.com/icons/png/512/1247/1247409.png" style="width:20px;">Upcoming';
menuContainer.appendChild(upcomingLink);

const projectsContainer = document.createElement('div');
projectsContainer.classList.add('my-3');
menuContainer.appendChild(projectsContainer);

export const ProjectsLink = document.createElement('a');
ProjectsLink.classList.add('text-decoration-none', 'link-dark');
ProjectsLink.href = '#';
ProjectsLink.innerHTML = '<img class="mx-3" src="https://image.flaticon.com/icons/png/512/43/43478.png" style="width:14px; transform: rotate(90deg);"> Projects';
projectsContainer.appendChild(ProjectsLink);

export const addProjects = document.createElement('buttom');
addProjects.classList.add('btn', 'btn-outline-light', 'ms-5', 'py-0');
addProjects.textContent = '+';
addProjects.data
projectsContainer.appendChild(addProjects);

export const leftbarprojectList = document.createElement('div');
leftbarprojectList.classList.add('d-flex', 'flex-column', 'p-0', 'ms-3');
projectsContainer.appendChild(leftbarprojectList);

export default function printProjectlist(projects) {
  for (const i in projects) {
    const menuprojectLinks = document.createElement('a');
    menuprojectLinks.classList.add('text-decoration-none', 'link-light', 'leftmenu-links', 'd-flex', 'justify-content-between', 'my-1', 'py-3');
    menuprojectLinks.href = '#';
    leftbarprojectList.appendChild(menuprojectLinks);

    const projectbutton = document.createElement('p');
    projectbutton.classList.add('link-light', 'mx-3', 'my-0');
    projectbutton.textContent = projects[i].name;
    menuprojectLinks.appendChild(projectbutton);

    const projectbadge = document.createElement('span');
    projectbadge.classList.add('badge', 'bg-warning', 'rounded-pill', 'text-dark', 'my-0', 'mx-3', 'px-2', 'py-auto');
    projectbadge.textContent = projects[i].list.length;
    menuprojectLinks.append(projectbadge);
  }
}