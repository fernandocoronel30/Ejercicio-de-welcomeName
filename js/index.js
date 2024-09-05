const txtNombre = document.getElementById("txtNombre");
const btnGuardar = document.getElementById("btnGuardar");
const alertValidaciones = document.getElementById("alertValidaciones");
const alertValidacionesTexto = document.getElementById(
    "alertValidacionesTexto"
);

btnGuardar.addEventListener("click", function(event){
    event.preventDefault();
    txtNombre.style.border = "";
    alertValidaciones.style.display = "none";

    if(txtNombre.value.length < 3){
        txtNombre.style.border = "solid medium red";
        alertValidaciones.innerHTML =
        "El <strong>Nombre</strong> no es correcto.<br/>";
        alertValidaciones.style.display = "block";
    }

    localStorage.setItem("nombre", txtNombre.value);

    txtNombre.value = "";
    txtNombre.focus();
});