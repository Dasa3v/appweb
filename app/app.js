// Función para agregar una tarea
function addTask() {
    // Obtener el valor del input
    var taskInput = document.getElementById("new-task").value;

    // Si el input no está vacío, agregar la tarea a la lista
    if (taskInput) {
        var taskList = document.getElementById("task-list");

        // Crear un nuevo elemento de lista (li)
        var newTask = document.createElement("li");
        newTask.textContent = taskInput;

        // Agregar el nuevo elemento a la lista
        taskList.appendChild(newTask);

        // Limpiar el input después de agregar la tarea
        document.getElementById("new-task").value = "";
    }
}
