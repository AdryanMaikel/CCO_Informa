const selecionarinformado = document.getElementById('selecionar-informado')
selecionarinformado.addEventListener("click", function() {
  selecionarinformado.classList.toggle("active")
})

const who_informed = document.getElementById('who_informed')
const option = document.getElementsByClassName('option')
for(options of option){
  options.onclick = function() {
    who_informed.innerHTML = this.textContent
    selecionarinformado.classList.remove("active")
    activeFiscal(this.textContent)
  }
}

const divfiscal = document.getElementById("divfiscal")
function activeFiscal(option) {
  if(option.trim() == "Fiscal"){
    divfiscal.classList.add("active")
  }else{
    divfiscal.classList.remove("active")
  }
}

const box_was_informed = document.getElementById("box_was_informed")
box_was_informed.addEventListener("click", function() {
  box_was_informed.classList.toggle("active")
})

const replace = document.getElementById("replace")
replace.addEventListener("click", function() {
  replace.classList.toggle("active")
})