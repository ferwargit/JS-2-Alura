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
};

export default checkComplete;