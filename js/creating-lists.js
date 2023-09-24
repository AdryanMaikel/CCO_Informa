import { activies, events, motives , problems, operators, create_options, autocomplete } from "./data.js"

const operators_list = document.getElementById("operators_list")
create_options(operators_list, operators)

const box_operator = document.getElementById("box_operator")
const operator = document.getElementById("operator")
operator.addEventListener("focus", function(){
  box_operator.classList.toggle("open")
  operator.addEventListener("input", function(){
    box_operator.classList.add("open")
    create_options(operators_list, autocomplete(this.value, operators))
    if(operators_list.childElementCount == 1){
      this.value = operators_list.lastChild.textContent
      return box_operator.classList.remove("open")
    }
  })
})

operator.addEventListener("focusout", function(){

})


const directions = document.getElementById('directions')
create_options(directions, activies)

const box_direction = document.getElementById("box_direction")
const direction = document.getElementById("direction")
direction.addEventListener("focus", function(){
  box_direction.classList.toggle("open")
  direction.addEventListener('input', function(){
    this.value = this.value.toUpperCase()
    create_options(directions, autocomplete(this.value, activies))
  })
})

direction.addEventListener("focusout", function(){
  const options = document.querySelectorAll("#directions .option")
  for(var option of options){
    option.onclick = function() {
      direction.value = this.textContent
      box_direction.classList.remove("open")
    }
  }
})

const list_events = document.getElementById("events")
create_options(list_events, events)

const box_event = document.getElementById("box_event")
const event = document.getElementById("event")
event.addEventListener("focus", function(){
  box_event.classList.toggle("open")
  event.addEventListener("input", function(){
    this.value = this.value.toLowerCase()
    create_options(list_events, autocomplete(this.value, events))
  })
})

const box_min = document.getElementById("box_min")
const min = document.getElementById("min")
const box_local = document.getElementById("box_local")
const row_local = document.getElementById("row_local")
const interrupted_text = document.getElementById("interrupted_text")
const continued = document.getElementById("continued")
const box_continued = document.getElementById("box_continued")
const local = document.getElementById("local")
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
      
      break;
    case "realizada a frente":
      box_local.classList.add("active")
      interrupted_text.textContent = "a partir d"
      box_local.classList.add("open")
      row_local.classList.add("open")
      return local.focus()
    default:
      break;
  }
}

event.addEventListener("focusout", function(){
  const events_options = document.querySelectorAll("#events .option")
  for(option of events_options){
    option.onclick = function(){
      event.value = this.textContent
      box_event.classList.remove("open")
      return check_event(this.textContent)
    }
  }
})

const list_motives = document.getElementById("list_motives")
create_options(list_motives, motives)
const box_motive = document.getElementById("box_motive")
const motive = document.getElementById("motive")
motive.addEventListener("focus", function(){
  box_motive.classList.toggle("open")
  motive.addEventListener("input", function(){
    this.value = this.value.replace(/[0-9]/g, "")
    create_options(autocomplete(this.value, motiveslist_motives, ))
  })
})

const row_problems = document.getElementById("row_problems")
const box_problems = document.getElementById("box_problems")
const problem = document.getElementById("problem")
const row_congestion = document.getElementById("row_congestion")
const congestion_locale = document.getElementById("congestion_locale")
const row_tripulation = document.getElementById("row_tripulation")
const row_roullet_and_validator = document.getElementById("row_roullet_and_validator")
function check_motive(input_motive) {
  row_problems.classList.remove("open")
  box_problems.classList.remove("open")
  row_congestion.classList.remove("open")
  row_tripulation.classList.remove("open")
  row_roullet_and_validator.classList.remove("open")
  switch (input_motive) {
    case "Problemas mecânicos":
      row_problems.classList.add("open")
      return problem.focus()
    case "Congestionamento":
      row_congestion.classList.add("open")
      return congestion_locale.focus()
      case "Falta de Tripulação":
        return row_tripulation.classList.add("open")
    case "Validador/ Roleta":
      return row_roullet_and_validator.classList.add("open")
    default:
      break;
  }
}

motive.addEventListener("focusout", function(){
  const motives_options = document.querySelectorAll("#list_motives .option")
  for(option of motives_options){
    option.onclick = function(){
      motive.value = this.textContent
      box_motive.classList.remove("open")
      check_motive(this.textContent)
    }
  }
})

const list_problems = document.getElementById("list_problems")
create_options(list_problems, problems)

problem.addEventListener("focus", function(){
  box_problems.classList.toggle("open")
  problem.addEventListener("input", function(){
    this.value = this.value.replace(/[0-9]/g, "")
    create_options(autocomplete(this.value, problemslist_problems, ))
  })
})
problem.addEventListener("focusout", function(){
  const problems_options = document.querySelectorAll("#list_problems .option")
  for(option of problems_options){
    option.onclick = function(){
      problem.value = this.textContent
      box_problems.classList.remove("open")
    }
  }
})

const list_operadores = document.getElementById("list_operadores")
create_options(list_operadores, operators)

const box_Operador = document.getElementById("box_Operador")
const options_operator = document.querySelectorAll("#list_operadores .option")
const Operador = document.getElementById("Operador")
for(var option of options_operator){
  option.onclick = function(){
    Operador.value = this.textContent
    box_Operador.classList.toggle("open")
  }
}