const activies = [
  "BC",
  "CB",
  "TT",
  "BB",
  "CC",
  "BT",
  "TB",
  "SG",
  "RC",
  "NS",
  "SN",
  "NL",
  "LN"
]

const events = [
  "atrasada",
  "interrompida",
  "perdida",
  "realizada a frente"
]

const motives = [
  "Acidente",
  "Assalto",
  "Atrasado",
  "Avaria",
  "Congestionamento",
  "Falta de Carro",
  "Falta de Tripulação",
  "Pneu Furado",
  "Problema com passageiro",
  "Problemas mecânicos",
  "Tempo insuficiente",
  "Validador/ Roleta",
  "Vandalismo",
  "Vistoria EPTC"
]
const problems = [
  "Carroceria - Ar Condicionado",
  "Carroceria - Elevador APD",
  "Carroceria - Itens de segurança",
  "Carroceria - Limpador / Espelho",
  "Carroceria - Outros",
  "Carroceria - Portas",
  "Elétrica - Alternador",
  "Elétrica - Iluminação Externa",
  "Elétrica - Iluminação interna",
  "Elétrica - Letreiro",
  "Elétrica - Pane elétrica",
  "Elétrica - Sem arranque",
  "Motor - Cigarra/Aquecimento",
  "Motor - Cigarra/óleo motor",
  "Motor - Correias",
  "Motor - Sem Força",
  "Motor - Vazamento de água",
  "Motor - Vazamento de óleo Diesel",
  "Motor - Vazamento de óleo motor",
  "Problemas na viagem anterior",
  "Suspensão - Arriada",
  "Suspensão - Carro atravessado",
  "Suspensão - Embreagem / Caixa",
  "Suspensão - Freio",
  "Suspensão - Roda",
  "Suspensão - Vazamento de ar"
]

const operators = [
  "Adryan",
  "Ana",
  "Felipe",
  "Hellen",
  "Leandro"
]

const create_options = (list, array) => {
  return list.innerHTML = `${array.map((index)=>{
    return `<li class="option">${index}</li>`
  }).join("")}`
}

const autocomplete = (input, array) => {
  return array.filter((value)=>{
    return value.toLowerCase().includes(input.toLowerCase())
  })
}

const toggle_x = (father) => {
  const open = document.querySelector(`#${father} ~ .box.mini.trash`)
  const input = document.querySelector(`#${father} input`)
  if(input.value == ""){
    return open.classList.remove("active")
  }else{
    open.classList.add("active")
    open.addEventListener("click", function(){
      input.value = ""
      open.classList.remove("active")
      return input.focus()
    })
  }
}


const box_min = document.getElementById("box_min")
const min = document.getElementById("min")
const box_local = document.getElementById("box_local")
const row_local = document.getElementById("row_local")
const interrupted_text = document.getElementById("interrupted_text")
const continued = document.getElementById("continued")
const box_continued = document.getElementById("box_continued")
const local = document.getElementById("local")
const motive = document.getElementById("motive")
function check_event(event_is) {
  box_min.classList.remove("active")
  box_local.classList.remove("active")
  box_local.classList.remove("open")
  row_local.classList.remove("open")
  continued.classList.remove("open")
  continued.classList.remove("active")
  box_continued.classList.remove("open")
  switch (event_is) {
    case "atrasada":
      box_min.classList.add("active")
      return min.focus()
    case "interrompida":
      box_local.classList.add("active")
      interrupted_text.textContent = "n"
      box_local.classList.add("open")
      row_local.classList.add("open")
      continued.classList.add("open")
      return local.focus()
    case "perdida":
      return motive.focus()
    case "realizada a frente":
      box_local.classList.add("active")
      interrupted_text.textContent = "a partir d"
      box_local.classList.add("open")
      row_local.classList.add("open")
      return local.focus()
  }
}


const input = (father, array) => {
var box = document.querySelector(`#${father}`)
var input = document.querySelector(`#${father} input`)
var list = document.querySelector(`#${father} ~ .list`)

input.addEventListener("click", function(){
  if(box.classList.contains("open")){
    return input.blur()
  }
  setTimeout(()=>{
    create_options(list, array)
  }, 150)
  setTimeout(()=>{
    box.classList.add("open")
  }, 151)
})

input.addEventListener("focus", function(){
  return check_event(this.value)
})

input.addEventListener("input", function(){
  box.classList.add("open")
  toggle_x(father)
  if(father == "box_event")
    this.value = this.value.replace(/[^a-zA-Z ]/,"").toLowerCase()

  create_options(list, autocomplete(this.value, array))
  if(list.childElementCount == 1){
    this.value = list.firstChild.textContent
    box.classList.remove("open")
    return check_event(this.value)
  }
})

input.addEventListener("focusout", function(){
  const options = document.querySelectorAll(`#${father} ~ .list .option`)
  for(var option of options){
    option.onclick = function(){
      input.value = this.textContent
      box.classList.remove("open")
      toggle_x(father)
      return check_event(this.textContent)
    }
  }
  setTimeout(()=>{
    box.classList.remove("open")
  }, 100)
})

}

export{ activies, events, motives, problems, operators, create_options, autocomplete, toggle_x, input }