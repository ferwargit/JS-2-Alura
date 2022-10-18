import checkComplete from './components/checkComplete.js';
import deleteIcon from './components/deleteIcon.js';

// ( () => {

const btn = document.querySelector('[data-form-btn]');

// Creamos una function
const createTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector('[data-form-input]');
    const value = input.value;
    const list = document.querySelector('[data-list]');
    const task = document.createElement("li");
    task.classList.add('card');
    // Limpiar el imput
    input.value = "";
    /* const content = `<div>
                        <i class="far fa-check-square icon"></i>
                        // Mando a llamar a la funcion
                        ${checkComplete()}
                        <span class="task">${value}</span>
                    </div>
                    <i class="fas fa-trash-alt trashIcon icon"></i>`; */
    // console.log(checkComplete());
    const taskContent = document.createElement("div");
    
    const titleTask = document.createElement("span");
    titleTask.classList.add("task");
    titleTask.innerText = value;
    taskContent.appendChild(checkComplete());
    // Agrego la estructura al elemento padre
    taskContent.appendChild(titleTask);
    
    /* const content = `<div>
                        ${checkComplete()}
                        <span class="task">${value}</span>
                    </div>
                    <i class="fas fa-trash-alt trashIcon icon"></i>`; */
    // const content = `
    //                 <i class="fas fa-trash-alt trashIcon icon"></i>`;
    // task.innerHTML = content;
    task.appendChild(taskContent);
    task.appendChild(deleteIcon());
    list.appendChild(task);
    // console.log(content);
};

// ya tengo seleccionado el elemento
// console.log(btn);

// Cuando el usuario haga click, sepamos que el usuario
// esta realizando esa accion.
// Necesitamos que alguien escuche, un listener de tipo click
// el metodo que nos ayuda a escuchar es addEventList()
// Recibe 2 parametro
// 1ro cual es el evento que quiero escuchar
// 2do que es lo que queremos que pase una vez que el usuario
// genere esta accion
// Recibimos como parametro el evento dentro de la funcion
// btn.addEventListener("click", function(evento) {
//     // console.log(evento);
//     evento.preventDefault();
//     const input = document.querySelector('[data-form-input]');
//     console.log(input.value);
// });


// Arrow function / funciones flecha / funciones anónimas
// btn.addEventListener("click", (evento) => {
//     evento.preventDefault();
//     const input = document.querySelector('[data-form-input]');
//     console.log(input.value);
// });

btn.addEventListener("click", createTask);





// Para que funcione la funcion la mando a llamar inmediatamente()
// })();