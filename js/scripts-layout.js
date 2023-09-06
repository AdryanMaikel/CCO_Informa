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