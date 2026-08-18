let pacientes = [];
let turno = 1;

function mostrarFormulario() {
    document.getElementById("bienvenida").style.display = "none";
    document.getElementById("formulario").style.display = "block";
}

function validarDatos(nombre, edad, especialidad) {
    if (nombre.trim() === "" || edad === "" || especialidad === "") {
        return "Debe completar todos los campos.";
    }

    if (edad <= 0) {
        return "La edad ingresada no es válida.";
    }

    return "ok";
}

function registrarPaciente() {
    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;
    let especialidad = document.getElementById("especialidad").value;
    let mensajeDiv = document.getElementById("mensaje");

    let validacion = validarDatos(nombre, edad, especialidad);

    if (validacion !== "ok") {
        mensajeDiv.innerHTML = validacion;
        mensajeDiv.style.color = "#e11d48";
        return;
    }

    let numeroTurno = String(turno).padStart(3, "0");

    pacientes.push({
        turno: numeroTurno,
        nombre: nombre,
        especialidad: especialidad
    });

    turno++;

    mensajeDiv.innerHTML = "Paciente registrado correctamente.";
    mensajeDiv.style.color = "#0284c7";

    document.getElementById("nombre").value = "";
    document.getElementById("edad").value = "";
    document.getElementById("especialidad").value = "";

    mostrarListaPacientes();
}

function mostrarListaPacientes() {
    let lista = document.getElementById("lista");
    lista.innerHTML = "";

    for (let i = 0; i < pacientes.length; i++) {
        lista.innerHTML +=
            "<li><b>Turno " +
            pacientes[i].turno +
            "</b> - " +
            pacientes[i].nombre +
            " (" +
            pacientes[i].especialidad +
            ")</li>";
    }

    document.getElementById("total").innerHTML = pacientes.length;
}

function buscarPaciente() {
    let nombreBuscar = document.getElementById("buscar").value.trim();
    let mensajeDiv = document.getElementById("mensaje");

    if (nombreBuscar === "") {
        mensajeDiv.innerHTML = "Ingrese un nombre para buscar.";
        mensajeDiv.style.color = "#e11d48";
        return;
    }

    let encontrado = false;

    for (let i = 0; i < pacientes.length; i++) {
        if (pacientes[i].nombre.toLowerCase() === nombreBuscar.toLowerCase()) {
            encontrado = true;
            break;
        }
    }

    if (encontrado) {
        mensajeDiv.innerHTML = "Paciente encontrado en la lista.";
        mensajeDiv.style.color = "#0284c7";
    } else {
        mensajeDiv.innerHTML = "Paciente no encontrado.";
        mensajeDiv.style.color = "#e11d48";
    }
}

function mostrarCuriosidad() {
    console.log("Hospital Gustavo Fricke");
}
