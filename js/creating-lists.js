import { activies, events/* , motivies , problems*/, create_options, autocomplete } from "./data.js"
const directions = document.getElementById('directions')
directions.innerHTML = create_options(activies)

const box_direction = document.getElementById("box_direction")
const direction = document.getElementById("direction")
direction.addEventListener("focus", function(){
  box_direction.classList.toggle("open")
  direction.addEventListener('input', function(){
    this.value = this.value.toUpperCase()
    const autocomplete_values = autocomplete(this.value, activies)
    directions.innerHTML = create_options(autocomplete_values)
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
list_events.innerHTML = create_options(events)

const box_event = document.getElementById("box_event")
const event = document.getElementById("event")
event.addEventListener("focus", function(){
  box_event.classList.toggle("open")
  event.addEventListener("input", function(){
    this.value = this.value.toLowerCase()
    const autocomplete_values = autocomplete(this.value, events)
    list_events.innerHTML = create_options(autocomplete_values)
  })
})

const box_min = document.getElementById("box_min")
const min = document.getElementById("min")
const box_local = document.getElementById("box_local")
const row_local = document.getElementById("row_local")
const interrupted_text = document.getElementById("interrupted_text")
const continued = document.getElementById("continued")
function check_event(event_is) {
  box_min.classList.remove("active")
  box_local.classList.remove("active")
  box_local.classList.remove("open")
  row_local.classList.remove("open")
  continued.classList.remove("active")
  switch (event_is) {
    case "atrasada":
      box_min.classList.add("active")
      min.focus()
      break;
    case "interrompida":
      box_local.classList.add("active")
      interrupted_text.textContent = "n"
      box_local.classList.add("open")
      row_local.classList.add("open")
      continued.classList.add("active")
      
      break;
    case "perdida":
      
      break;
    case "realizada a frente":
      box_local.classList.add("active")
      interrupted_text.textContent = "a partir d"
      box_local.classList.add("open")
      row_local.classList.add("open")
  
    break;
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