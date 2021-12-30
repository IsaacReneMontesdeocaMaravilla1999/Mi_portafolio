/*Validar campos de formulario */
function validar(){
    var form = document.form;

    if (form.name.value==0){
        alert("El campo Nombre esta vacio");
        form.name.value="";
        form.name.focus();
        return false;
    }
    if(form.email.value==0){
        alert("el campo Email esta vacio");
        form.email.value="";
        form.email.focus();
        return false;
    }
    if(form.asunto.value==0){
        alert("el campo Asunto esta vacio");
        form.asunto.value="";
        form.asunto.focus();
        return false;
    }
    if(form.mensaje.value==0){
        alert("el campo Mensaje esta vacio");
        form.mensaje.value="";
        form.mensaje.focus();
        return false;
    }
     alert("Datos enviados con exito");
     form.submit();
}
