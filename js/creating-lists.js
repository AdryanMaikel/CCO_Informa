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
function check_event(event_is) {
  switch (event_is) {
    case "atrasada":
      box_event.classList.add("active")
      box_min.classList.add("active")
      break;
    case "interrompida":
      
      break;
    default:
      box_event.classList.remove("active")
      box_min.classList.remove("active")
      break;
  }
}

event.addEventListener("focusout", function(){
  const events_options = document.querySelectorAll("#events .option")
  for(option of events_options){
    option.onclick = function(){
      event.value = this.textContent
      box_event.classList.remove("open")
      return check_event(this.textContent.trim())
    }
  }
})