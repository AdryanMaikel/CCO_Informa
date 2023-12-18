import { toggle_x } from "./data.js"
import { toggle_replace_car } from "./replace.js"

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
  min.disabled = true
  local.disabled = true
  switch (event_is) {
    case "adiantada":
      box_min.classList.add("active")
      min.disabled = false
      toggle_x('box_motive')
      return min.focus()
    case "atrasada":
      box_min.classList.add("active")
      min.disabled = false
      return min.focus()
    case "interrompida":
      box_local.classList.add("active")
      local.disabled = false
      interrupted_text.textContent = "n"
      interrupted_text.style.width = "8.28px"
      box_local.classList.add("open")
      row_local.classList.add("open")
      continued.classList.add("open")
      return local.focus()
    case "perdida":
      return motive.focus()
    case "realizada a frente":
      box_local.classList.add("active")
      local.disabled = false
      interrupted_text.textContent = "a partir d"
      interrupted_text.style.width = "58.13px"
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
const row_gps = document.getElementById("row_gps")
const hour_return = document.getElementById("hour_return")
const hour_stop = document.getElementById("hour_stop")
function check_motive(input_motive) {
  row_problems.classList.remove("open")
  box_problems.classList.remove("open")
  row_congestion.classList.remove("open")
  row_tripulation.classList.remove("open")
  row_roullet_and_validator.classList.remove("open")
  row_limpador_espelho.classList.remove("open")
  row_embreagem_caixa.classList.remove("open")
  congestion_locale.disabled = true
  row_gps.classList.remove("open")
  hour_return.disabled = true
  hour_stop.disabled = true
  const events = document.getElementById('event')
  switch (input_motive) {
    case "Adiantado com autorização":
      if(events.value == ''){
        events.value = 'adiantada'
        toggle_x('box_event')
        return check_event('adiantada')
      }
      return
    case "Adiantado sem autorização":
      if(events.value == ''){
        events.value = 'adiantada'
        toggle_x('box_event')
        return check_event('adiantada')
      }
      return
    case "Problemas mecânicos":
      row_problems.classList.add("open")
      if(problem.value == "Carroceria - Limpador / Espelho")
        row_limpador_espelho.classList.add("open")
      else if(problem.value == "Suspensão - Embreagem / Caixa")
        row_embreagem_caixa.classList.add("open")
      return problem.focus()
    case "Congestionamento":
      row_congestion.classList.add("open")
      congestion_locale.disabled = false
      return congestion_locale.focus()
    case "Falta de Tripulação":
      row_tripulation.classList.add("open")
      return motorista.focus()
    case "Validador/ Roleta":
      row_roullet_and_validator.classList.add("open")
      return validator.focus()
    case "GPS com problemas de Comunicação":
      row_gps.classList.add("open")
      if(document.getElementById("parou").checked == true){
        hour_return.disabled = false
        hour_stop.disabled = false
      }
      return hour_stop.focus()
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
    case "Problemas na viagem anterior":
      input_car.value = car_two.value
      car_two.value = ""
      if(document.getElementById("replace").classList.contains("active")){
        toggle_replace_car()
      }
      document.getElementById("line").blur()
      break
  }
  return document.getElementById("problem").blur()
}

export { check_event, check_motive, check_problem }