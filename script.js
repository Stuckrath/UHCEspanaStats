var modalparent = document.getElementsByClassName("modal");
var cerrar = document.getElementsByClassName("modal-sandbox");

// Get the button that opens the modal
  
var modal_btn_multi = document.getElementsByClassName("modal-trigger");

// When the user clicks the button, open the modal
function setDataIndex() {
  for (i = 0; i < modal_btn_multi.length; i++) {
    modal_btn_multi[i].setAttribute("data-index", i);
    modalparent[i].setAttribute("data-index", i);
  }
}

for (i = 0; i < modal_btn_multi.length; i++) {
  modal_btn_multi[i].onclick = function () {
    var ElementIndex = this.getAttribute("data-index");
    modalparent[ElementIndex].style.display = "block";
  };

  //When the user clicks on <span> (x), close the modal
}

window.onload = function () {
  setDataIndex();
};

$(".close-modal, .modal-sandbox").click(function () {
  $(".modal").css({ display: "none" });
});
