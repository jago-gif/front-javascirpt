let nombre ;
let correo ;
let mensaje ;

document.getElementById("enviar").addEventListener('click', function () {
   nombre = document.getElementById("nombre").value;
   correo = document.getElementById("correo").value;
   mensaje = document.getElementById("mensaje").value;
   validar();
})

  let validar = function(){
    if(nombre==""){
      alert("no puede dejar en blanco el campo nombre")
      document.getElementById("noNombre").style.visibility='visible';
    }
    if(correo==""){
      alert("no puede dejar en blanco el campo correo")
      document.getElementById("noCorreo").style.visibility='visible';
    }
    if(mensaje==""){
      alert("no puede dejar en blanco el campo mensaje")
      document.getElementById("noMensaje").style.visibility='visible';
    }
  }