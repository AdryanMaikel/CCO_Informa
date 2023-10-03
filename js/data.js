const supervisions = [
  "Navegantes",
  "Nortran",
  "Sopal"
]

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

const row_problems = document.getElementById("row_problems")
const box_problems = document.getElementById("box_problems")
const problem = document.getElementById("problem")
const row_congestion = document.getElementById("row_congestion")
const congestion_locale = document.getElementById("congestion_locale")
const row_tripulation = document.getElementById("row_tripulation")
const row_roullet_and_validator = document.getElementById("row_roullet_and_validator")
const row_limpador_espelho = document.getElementById("row_limpador_espelho")
const row_embreagem_caixa = document.getElementById("row_embreagem_caixa")  
function check_motive(input_motive) {
  row_problems.classList.remove("open")
  box_problems.classList.remove("open")
  row_congestion.classList.remove("open")
  row_tripulation.classList.remove("open")
  row_roullet_and_validator.classList.remove("open")
  row_limpador_espelho.classList.remove("open")
  row_embreagem_caixa.classList.remove("open")
  switch (input_motive) {
    case "Problemas mecânicos":
      row_problems.classList.add("open")
      if(problem.value == "Carroceria - Limpador / Espelho")
        row_limpador_espelho.classList.add("open")
      else if(problem.value == "Suspensão - Embreagem / Caixa")
        row_embreagem_caixa.classList.add("open")
      return problem.focus()
    case "Congestionamento":
      row_congestion.classList.add("open")
      return congestion_locale.focus()
    case "Falta de Tripulação":
      row_tripulation.classList.add("open")
      return motorista.focus()
    case "Validador/ Roleta":
      row_roullet_and_validator.classList.add("open")
      return validator.focus()
  }
}
const check_problem = (value) => {
  row_limpador_espelho.classList.remove("open")
  row_embreagem_caixa.classList.remove("open")
  switch (value) {
    case "Carroceria - Limpador / Espelho":
      row_limpador_espelho.classList.add("open")
      break
    case "Suspensão - Embreagem / Caixa":
      row_embreagem_caixa.classList.add("open")
      break
  }
  return document.getElementById("problem").blur()
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
      if(father == "box_event")
        check_event(input.value)
      else if(father == "box_motive")
        check_motive(input.value)
      else if(father == "box_problems")
        return check_problem(input.value)
      return input.focus()
    })
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
    return input.focus()
  }, 151)
})

input.addEventListener("input", function(){
  box.classList.add("open")
  toggle_x(father)
  if(father == "box_event")
    this.value = this.value.replace(/[^a-zA-Z ]/,"").toLowerCase()
  else if(father == "box_motive" || father == "box_problems")
    this.value = this.value.replace(/[^a-zA-Záçãâ ]/,"")
  else if(father == "box_direction")
    this.value = this.value.replace(/[^a-zA-Z]/,"").toUpperCase()
  else if(father == "who_informed")
    {return}
  create_options(list, autocomplete(this.value, array))
  if(list.childElementCount == 1){
    this.value = list.firstChild.textContent
    box.classList.remove("open")
    if(father == "box_direction")
      window.document.getElementById("event").focus()
    else if(father == "box_event")
      check_event(this.value)
    else if(father == "box_motive")
      check_motive(this.value)
    else if(father == "box_problems")
      check_problem(this.value)
  }
})

input.addEventListener("focusout", function(){
  const options = document.querySelectorAll(`#${father} ~ .list .option`)
  for(var option of options){
    option.onclick = function(){
      input.value = this.textContent
      box.classList.remove("open")
      toggle_x(father)
      if(father == "box_event")
        return check_event(this.textContent)
      else if(father == "box_motive")
        return check_motive(this.textContent)
      else if(father == "box_problems")
        return check_problem(this.textContent)
      
    }
  }
  setTimeout(()=>{
    box.classList.remove("open")
  }, 100)})
}

const cleaning_all = () => {
  const inputs = document.querySelectorAll("input")
  for(var input of inputs){
    input.value = ""
  }
  toggle_x("box_operator")
  toggle_x("who_informed")
  toggle_x("box_direction")
  toggle_x("box_event")
  check_event("")
  toggle_x("box_motive")
  check_motive("")
  toggle_x("box_problems")
}

const reset_cco_informa = document.getElementById("reset_cco_informa")
reset_cco_informa.addEventListener("click", cleaning_all)

export{ supervisions, activies, events, motives, problems, operators, input }