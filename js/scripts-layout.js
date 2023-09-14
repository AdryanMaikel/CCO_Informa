const form_inputs = document.getElementById("form_inputs")
form_inputs.addEventListener("submit", function(event){
  event.preventDefault()
})

const active_dark = document.getElementById("active_dark")
active_dark.addEventListener("click", function () {
  document.querySelector("body").classList.toggle("dark")
})

const selecionarinformado = document.getElementById('select_informed')
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
    setTimeout(function(){
      document.getElementById("fiscal").focus()
    }, 600)
  }else{
    divfiscal.classList.remove("active")
    document.getElementById("table").focus()
  }
}

const box_was_informed = document.getElementById("box_was_informed")
box_was_informed.addEventListener("click", function() {
  box_was_informed.classList.toggle("active")
})

const replace = document.getElementById("replace")
replace.addEventListener("click", function() {
  replace.classList.toggle("active")
  if(replace.classList.contains("active")){
    setTimeout(function(){
      document.getElementById("replace-car").focus()
    }, 600)
  }else{
    document.getElementById("line").focus()
  }
})

const time = document.getElementById("time")
time.addEventListener("blur", function() {
  if(time.value.length == 4){
    time.value = time.value.slice(0, 2) + ":" + time.value.slice(2, 4)
  }
})

const activity = document.getElementById('div_activity')
const direction = document.getElementById('direction')
activity.addEventListener("click", function() {
  activity.classList.toggle("active")
  const options_activies = document.getElementsByClassName('options_activies')
  for(options of options_activies){
    options.onclick = function() {
      direction.innerHTML = this.textContent
      activity.classList.remove("active")
    }
  }
})

const div_event = document.getElementById('div_event')
div_event.addEventListener("click", function() {
  div_event.classList.toggle("active")
})
const text_event = document.getElementById('text_event')
const options_events = document.getElementsByClassName('options_events')
for(options of options_events){
  options.onclick = function() {
    text_event.innerHTML = this.textContent
    div_event.classList.remove("active")
    activeEvent(this.textContent)
  }
}
const continuedjourney = document.getElementById('continued_journey')
function activeEvent(events) {
  const div_delay = document.getElementById("div_delay")
  const div_location = document.getElementById("div_location")
  if(events.trim() == "interrompida"){
      div_delay.classList.remove("active")
      div_location.classList.add("active")
      continuedjourney.classList.add("open")
      row_continued.style.height = "46px"
      list_motives.style.top = "319px"
      setTimeout(function(){
        document.getElementById("location_event").focus()
      }, 600)
    } else {
      continuedjourney.classList.remove("active")
      list_motives.style.top = "272px"
      row_continued.style.height = 0
      switch (events.trim()) {
      case "atrasada":
        div_delay.classList.add("active")
        div_location.classList.remove("active")
        continuedjourney.classList.remove("open")
        
        setTimeout(function(){
          document.getElementById("delay_event").focus()
        }, 600)
        break;
        case "perdida":
          div_delay.classList.remove("active")
          div_location.classList.remove("active")
          continuedjourney.classList.remove("open")
          document.getElementById("motive").focus()
          setTimeout(function(){
            document.getElementById("div_motives").classList.add("active")
          },600)
      break;
      case "realizada a frente":
        div_delay.classList.remove("active")
        div_location.classList.add("active")
        continuedjourney.classList.remove("open")
        setTimeout(function(){
          document.getElementById("location_event").focus()
        }, 600)
      break;
    }
  }
}
continuedjourney.addEventListener("click", function(){
  continuedjourney.classList.toggle("active")
  setTimeout(function(){
    document.getElementById("location_continued").focus()
  }, 600)
})

tripulation.addEventListener("click", function(){
  tripulation.classList.toggle("active")
})
function set_tripulation(tripulation){
  who_missing.innerHTML = tripulation
}
