const btn = document.querySelector('[data-form-btn]');

// Creamos una function
const createTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector('[data-form-input]');
    console.log(input.value);
};

// ya tengo seleccionado el elemento
console.log(btn);

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
