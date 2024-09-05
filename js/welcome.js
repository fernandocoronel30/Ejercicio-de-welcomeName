const alertNombre = document.getElementById("alertName");
const btnBorrar = document.getElementById("btnBorrar");

window.addEventListener("load", function(event){
    if(this.localStorage.getItem("nombre") != null){
        alertNombre.innerHTML = `Hola <strong>${this.localStorage.getItem("nombre")}</strong> bienvenido/a de nuevo.`
        alertNombre.style.display = "block";
    }//if nombre != null

});//load

btnBorrar.addEventListener("click", function(event){
    event.preventDefault();
    localStorage.removeItem("nombre");
    //location.href = "welcome.html";
    history.go(0);
});