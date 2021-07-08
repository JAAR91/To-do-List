const mainContainer = document.getElementById('container');

export const menuContainer = document.createElement('div');
menuContainer.classList.add('d-flex', 'flex-column', 'menuContainer');
mainContainer.appendChild(menuContainer);

const todayLink = document.createElement('a');
todayLink.classList.add('link-light', 'text-decoration-none', 'leftmenu-links');
todayLink.href = '#';
todayLink.innerHTML += `<img class="m-2" src="https://image.flaticon.com/icons/png/512/1134/1134921.png" style="width:20px;">Today`;
menuContainer.appendChild(todayLink);

const upcomingLink = document.createElement('a');
upcomingLink.classList.add('link-light', 'text-decoration-none', 'leftmenu-links');
upcomingLink.href = '#';
upcomingLink.innerHTML += `<img class="m-2" src="https://image.flaticon.com/icons/png/512/1247/1247409.png" style="width:20px;">Upcoming`;
menuContainer.appendChild(upcomingLink);

const projectsContainer = document.createElement('div');
projectsContainer.classList.add('my-3');
menuContainer.appendChild(projectsContainer);

export const ProjectsLink =  document.createElement('a');
ProjectsLink.classList.add('link-dark', 'text-decoration-none', 'border');
ProjectsLink.href = '#';
ProjectsLink.innerHTML = `<img class="mx-3" src="https://image.flaticon.com/icons/png/512/43/43478.png" style="width:14px;"> Projects`;
projectsContainer.appendChild(ProjectsLink);

export const leftbarprojectList = document.createElement('div');
leftbarprojectList.classList.add('d-none', 'd-flex', 'flex-column', 'p-0' ,'m-0');
projectsContainer.appendChild(leftbarprojectList);

export function printProjectlist(projects) {
    for (let i in projects) {
         
        const menuprojectLinks = document.createElement('a');
        menuprojectLinks.classList.add('text-decoration-none', 'link-light', 'leftmenu-links');
        menuprojectLinks.href = '#';
        menuprojectLinks.innerHTML = `~ ${projects[i].name} ....................(${projects[i].list.length})`;
        leftbarprojectList.appendChild(menuprojectLinks);
    };
}