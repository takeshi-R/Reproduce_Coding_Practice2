'use strict';
const modalElement = document.getElementById("modal")
const maskElement = document.getElementById("mask")
const modal01Element = document.getElementById("modal01")

document.getElementById("modalOpen").addEventListener("click", function() {
  modalElement.classList.add("active");
  maskElement.classList.add("active");
})
document.getElementById("modalClose").addEventListener("click", function() {
  modalElement.classList.remove("active");
  maskElement.classList.remove("active");
})
document.getElementById("modalOpen01").addEventListener("click", function() {
  modal01Element.classList.add("active");
  maskElement.classList.add("active");
})
document.getElementById("modalClose01").addEventListener("click", function() {
  modal01Element.classList.remove("active");
  maskElement.classList.remove("active");
})
