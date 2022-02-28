var modalparent = document.getElementsByClassName("modal");
var cerrar = document.getElementsByClassName("modal-sandbox");
var cabezas = document.getElementsByClassName("choose");
var guys = document.getElementsByClassName("slide");
var lastone = 0;
// Get the button that opens the modal

var modal_btn_multi = document.getElementsByClassName("modal-trigger");

// When the user clicks the button, open the modal
function setDataIndex() {
  for (i = 0; i < modal_btn_multi.length; i++) {
    modal_btn_multi[i].setAttribute("data-index", i);
    modalparent[i].setAttribute("data-index", i);
  }


for (i = 0; i < modal_btn_multi.length; i++) {
  modal_btn_multi[i].onclick = function () {
    var ElementIndex = this.getAttribute("data-index");
    modalparent[ElementIndex].style.display = "block";
  };

  for (i=0; i<cabezas.length; i++){
    cabezas[i].setAttribute("data-index", i);
  }
}
for (i = 0; i < cabezas.length; i++) {
  cabezas[i].onclick = function () {
    var ElementIndex2 = this.getAttribute("data-index");
    guys[lastone].style.display= "none"
    guys[ElementIndex2].style.display = "block";
    lastone = ElementIndex2
  };}
}
window.onload = function () {
  setDataIndex();
};

$(".close-modal, .modal-sandbox").click(function () {
  $(".modal").css({ display: "none" });
});
