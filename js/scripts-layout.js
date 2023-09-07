const selecionarinformado = document.getElementById('selecionar-informado')
const text = document.getElementById('text')
const option = document.getElementsByClassName('option')

selecionarinformado.addEventListener("click", function() {
  selecionarinformado.classList.toggle("active")
})

for(options of option){
  options.onclick = function() {
    text.innerHTML = this.textContent
    selecionarinformado.classList.remove("active")
  }
}

const box_was_informed = document.getElementById("box_was_informed")
box_was_informed.addEventListener("click", function() {
  box_was_informed.classList.toggle("active")
})