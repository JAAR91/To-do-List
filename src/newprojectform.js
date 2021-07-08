import {mainContainer} from './topnavbar';

const formContainer = document.createElement('div');
formContainer.classList.add('addnewprojectform', 'form-hidden');
mainContainer.appendChild(formContainer);

const form = document.createElement('div');
form.classList.add('add-form', 'position-absolute', 'top-50', 'start-50','translate-middle', 'rounded-3');

formContainer.appendChild(form);

const formtitle = document.createElement('p');
formtitle.classList.add('text-light', 'bg-dark', 'w-100', 'p-2', 'rounded-top');
formtitle.textContent = 'Add new project';
form.appendChild(formtitle);

const formclosebutton = document.createElement('buttom');
formclosebutton.classList.add('btn', 'btn-outline-light', 'float-end', 'm-0', 'py-0');
formclosebutton.textContent = 'X';
formclosebutton.onclick = () => {
    formContainer.classList.add('form-hidden');
    formContainer.classList.remove('form-shown');
};
formtitle.appendChild(formclosebutton);

const inputcontainer = document.createElement('div');
inputcontainer.classList.add('p-3');
form.appendChild(inputcontainer);

export const nameinpuit = document.createElement('input');
nameinpuit.type = 'text';
nameinpuit.placeholder = 'Enter project name here...';
nameinpuit.classList.add('form-control');
inputcontainer.appendChild(nameinpuit);

export const newProjectButton = document.createElement('buttom');
newProjectButton.classList.add('btn', 'btn-dark', 'my-2', 'p-1', 'float-end');
newProjectButton.textContent = 'Create Project';
inputcontainer.appendChild(newProjectButton);

export default formContainer;
