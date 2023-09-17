import { activies/* , motivies , problems*/, create_options, autocomplete } from "./data.js"
const directions = document.getElementById('directions')
directions.innerHTML = create_options(activies)

const box_direction = document.getElementById("box_direction")
const direction = document.getElementById("direction")
direction.addEventListener("focus", function(){
  box_direction.classList.toggle("open")
  direction.addEventListener('input', () => {
    this.value = this.value.toUpperCase()
    if(this.value.length) {
      const autocomplete_values = autocomplete(this.value, activies)
      directions.innerHTML = create_options(autocomplete_values)
    }else{
      directions.innerHTML = create_options(activies)
    }
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