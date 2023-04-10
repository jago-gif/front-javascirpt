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
    },
    data: [
      [
        "WHEY",
        "Proteína",
        "Optimun Nutrition",
        "5 lbs",
        "Disponible"
      ],
      [
        "HMB",
        "Proteína Suero",
        "Sport Lab",
        "339 grs",
        "Disponible"
      ],
      [
        "CARNIVOR",
        "Proteína Carne",
        "MuscleMeds",
        "4.5 lbs",
        "n/d"
      ],
      [
        "PREDATOR",
        "Proteína Carne",
        "Hexacore",
        "4.8 lbs",
        "Disponible"
      ],
      [
        "NITRO TECH",
        "Proteína",
        "MuscleTech",
        "2 lbs",
        "Disponible"
      ],
      [
        "KREATOR",
        "Activador",
        "Winker Nutrition",
        "600 grs",
        "Disponible"
      ],
      [
        "ORGANIC PROTEIN",
        "Proteína Vegana",
        "Pure Inspired",
        "1.5 lbs",
        "Disponible"
      ],
      [
        "ENSURE SPORT",
        "Proteína Líquida",
        "Abbott",
        "330 ml",
        "Disponible"
      ],
      [
        "ISOPURE",
        "Proteína Líquida",
        "Natures Best",
        "473 ml",
        "n/d"
      ],
      [
        "PRO CREATINE",
        "Creatinina",
        "SportLab",
        "300 grs",
        "Disponible"
      ],
      [
        "GLUTAMINE",
        "Glutamina",
        "Optimun Nutrition",
        "300 grs",
        "n/d"
      ],
      [
        "GLUTAMINE DRIVE",
        "Glutamina",
        "Nutrex",
        "300 grs",
        "Disponible"
      ],
    ]
  });
})






