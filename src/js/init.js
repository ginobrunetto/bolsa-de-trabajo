import "https://code.jquery.com/jquery-2.1.1.min.js";
import M from "materialize-css";
$(document).ready(function () {
  $(".collapsible").collapsible();
});
$(document).ready(function () {
  $(".modal").modal();
  $("#textarea2").val("");
  M.textareaAutoResize($("#textarea2"));
  $("input#input_text, textarea#textarea2").characterCounter();
  $('.dropdown-trigger').dropdown();
});
$(document).ready(function () {
  $(".sidenav").sidenav();
});
function alerta() {
  var r = confirm("Desea cargar un puesto vacante para su empresa?");
  if (r == true) {
    console.log("You pressed OK!");
    location.href="../index.html"
  } else {
    console.log("You pressed Cancel!");
  }
}