let nombre;
let correo;
let mensaje;
/*
en JavaScript de debe utilizar 
document.getElementById para indicar el elemento que se espera que tenga una acción.
y se debe llamar a addEventListener para agregar el evento que queremos escuchar y la acción a escuchar
document.getElementById("enviar").addEventListener('click', function () {
*/
$('#enviar').click(function () {
  nombre = $("#nombre").val();
  correo = $("#correo").val();
  mensaje = $("#mensaje").val();
  validar();
})
let validar = function () {
  if (nombre == "") {
    alert("no puede dejar en blanco el campo nombre");
    $("#noNombre").css("visibility", "visible");
  }
  if (correo == "") {
    alert("no puede dejar en blanco el campo correo");
    $("noCorreo").css("visibility", "visible");
  }
  if (mensaje == "") {
    alert("no puede dejar en blanco el campo mensaje");
    $("#noMensaje").css("visibility", "visible");
  }
  if (nombre != "" && correo != "" && mensaje != "") {
    alert("formulario validado correctamente, todos los campos tienen informacion");
  }
}
$("#nombre").blur(function () {
  if ($("#nombre").val() == "") {
    $("#noNombre").css("visibility", "visible");
  }
})
$("#mensaje").blur(function () {
  if ($("#mensaje").val() == "") {
    $("#noMensaje").css("visibility", "visible");
  }
})
$("#correo").blur(function () {
  if ($("#correo").val() == "") {
    $("#noCorreo").css("visibility", "visible");
  }
})

//aquí inicia la tabla
$(document).ready(function () {
  $("#sellersQuantityTable").DataTable({
    language: {
      "url": "//cdn.datatables.net/plug-ins/1.10.24/i18n/Spanish.json"
    }/* para enviar por data descomentar el documento
    ,
    data: [
      [
        "Windows 7",
        "16 gb",
        "500gb",
        "Intel 5",
        "wifi"
      ],
      [
        "Windows 10",
        "32 gb",
        "250gb",
        "Intel 7",
        "por cable"
      ],
      [
        "Windows 11",
        "8 gb",
        "500gb",
        "Intel 9",
        "wifi"
      ],
      [
        "Windows 7",
        "16 gb",
        "500gb",
        "Intel 5",
        "wifi"
      ],
      [
        "Windows 10",
        "32 gb",
        "250gb",
        "Intel 7",
        "por cable"
      ],
      [
        "Windows 11",
        "8 gb",
        "500gb",
        "Intel 9",
        "wifi"
      ],
      [
        "Windows 7",
        "16 gb",
        "500gb",
        "Intel 5",
        "wifi"
      ],
      [
        "Windows 10",
        "32 gb",
        "250gb",
        "Intel 7",
        "por cable"
      ],
      [
        "Windows 11",
        "8 gb",
        "500gb",
        "Intel 9",
        "wifi"
      ],
      [
        "Windows 7",
        "16 gb",
        "500gb",
        "Intel 5",
        "wifi"
      ],
      [
        "Windows 10",
        "32 gb",
        "250gb",
        "Intel 7",
        "por cable"
      ],
      [
        "Windows 11",
        "8 gb",
        "500gb",
        "Intel 9",
        "wifi"
      ],
    ]*/
  });
})






