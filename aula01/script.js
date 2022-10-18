( () => {

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
    const content = `
                        
                        
                    
                    <i class="fas fa-trash-alt trashIcon icon"></i>`;
    // task.innerHTML = content;
    task.appendChild(taskContent);
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

// Creamos una nueva funcion
const checkComplete = () => {
    // Creo el elemento
    const i = document.createElement("i");
    // Le agrego las clases
    i.classList.add("far","fa-check-square","icon");
    // i.classList.add("fa-check-square");
    // i.classList.add("icon");
    i.addEventListener("click", completeTask);
    // regreso el elemento i
    return i
}

// Inmediately invoked function expressions IIEF
const completeTask = (event) => {
    // console.log(event.target);
    const element = event.target;
    // Agregamos la clase fas
    // element.classList.add("fas");
    // toggle verifica si existe o no la clase
    element.classList.toggle("fas");
    // Agregamos la clase del color(css)
    // element.classList.add('completeIcon');
    element.classList.toggle('completeIcon');
    // Quitaos la clase
    // element.classList.remove("far");
    element.classList.toggle("far");
}
// Para que funcione la funcion la mando a llamar inmediatamente()
})();