import { toggle_x, toggle_replace_car } from './layout.js'

const motive = document.getElementById('motive')
const box_min = document.getElementById('box_min')
const box_local = document.getElementById('box_local')
const row_local = document.getElementById('row_local')
const continued = document.getElementById('continued')
const box_continued = document.getElementById('box_continued')
const dropping_passengers = document.getElementById('dropping_passengers')
const min = document.getElementById('min')
const local = document.getElementById('local')
const interrupted_text = document.getElementById('interrupted_text')

function reset_form_elements_for_event() {
  box_min.classList.remove('active')
  box_local.classList.remove('active')
  box_local.classList.remove('open')
  row_local.classList.remove('open')
  continued.classList.remove('open')
  continued.classList.remove('active')
  box_continued.classList.remove('open')
  dropping_passengers.classList.remove('active')
  min.disabled = true
  local.disabled = true
}

function handle_min_event(event) {
  box_min.classList.add('active')
  min.disabled = false
  if (event === 'adiantada')
    toggle_x('box_motive')
  
  min.focus()
}

function handle_local_event(event) {
  local.disabled = false
  box_local.classList.add('active')
  box_local.classList.add('open')
  row_local.classList.add('open')
  if (event === 'interrompida') {
    set_width_element('n', '8.28px')
    continued.classList.add('open')
  } else {
    set_width_element('a partir d', '60px')
  }
  local.focus()
}

function set_width_element(text, width) {
  interrupted_text.textContent = text
  interrupted_text.style.width = width
}

function check_event(event) {
  reset_form_elements_for_event()
  switch (event) {
    case 'adiantada':
    case 'atrasada':
      handle_min_event(event)
      break
    case 'interrompida':
    case 'realizada a frente':
      handle_local_event(event)
      break
    case 'perdida':
      motive.focus()
      break
    default:
      break
  }
}

const row_problems = document.getElementById('row_problems')
const box_problems = document.getElementById('box_problems')
const problem = document.getElementById('problem')
const row_congestion = document.getElementById('row_congestion')
const congestion_locale = document.getElementById('congestion_locale')
const row_tripulation = document.getElementById('row_tripulation')
const row_roullet_and_validator = document.getElementById('row_roullet_and_validator')
const row_limpador_espelho = document.getElementById('row_limpador_espelho')
const row_embreagem_caixa = document.getElementById('row_embreagem_caixa')
const row_gps = document.getElementById('row_gps')
const hour_return = document.getElementById('hour_return')
const hour_stop = document.getElementById('hour_stop')
const events = document.getElementById('event')
const parou = document.getElementById('parou')

function reset_form_elements_for_motive() {
  row_problems.classList.remove('open')
  box_problems.classList.remove('open')
  row_congestion.classList.remove('open')
  row_tripulation.classList.remove('open')
  row_roullet_and_validator.classList.remove('open')
  row_limpador_espelho.classList.remove('open')
  row_embreagem_caixa.classList.remove('open')
  congestion_locale.disabled = true
  row_gps.classList.remove('open')
  hour_stop.disabled = true
  hour_return.disabled = true
}

function handle_adiantado_event() {
  if(events.value == ''){
    events.value = 'adiantada'
    toggle_x('box_event')
    return check_event('adiantada')
  }
}

function handle_problems_event() {
  row_problems.classList.add('open')
  return problem.focus()
}

function handle_congestion_event() {
  row_congestion.classList.add('open')
  congestion_locale.disabled = false
  return congestion_locale.focus()
}

function handle_tripulation_event() {
  row_tripulation.classList.add('open')
  return motive.blur()
}

function handle_validator_event() {
  row_roullet_and_validator.classList.add('open')
  return motive.blur()
}

function handle_gps_event() {
  row_gps.classList.add('open')
  if(parou.checked){
    hour_stop.disabled = false
    hour_return.disabled = false
  }
  return hour_stop.focus()
}

function check_motive(motive) {
  reset_form_elements_for_motive()
  switch (motive) {
    case 'Adiantado com autorização':
    case 'Adiantado sem autorização':
      handle_adiantado_event()
      break
    case 'Problemas mecânicos':
      handle_problems_event()
      break
    case 'Congestionamento':
      handle_congestion_event()
      break
    case 'Falta de Tripulação':
      handle_tripulation_event()
      break
    case 'Validador/ Roleta':
      handle_validator_event()
      break
    case 'GPS com problemas de Comunicação':
      handle_gps_event()
      break
    default:
      break
  }
}

const replace = document.getElementById('replace')
const input_car = document.getElementById('input_car')
const car_two = document.getElementById('car_two')
const line = document.getElementById('line')

function check_problem(value) {
  row_limpador_espelho.classList.remove('open')
  row_embreagem_caixa.classList.remove('open')
  switch (value) {
    case 'Carroceria - Limpador / Espelho':
      row_limpador_espelho.classList.add('open')
      break
    case 'Suspensão - Embreagem / Caixa':
      row_embreagem_caixa.classList.add('open')
      break
    case 'Problemas na viagem anterior':
      input_car.value = car_two.value
      car_two.value = ''
      if(replace.classList.contains('active')){
        toggle_replace_car()
      }
      line.blur()
      break
  }
  return problem.blur()
}

export { check_event, check_motive, check_problem }