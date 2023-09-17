const dark = document.getElementById("dark")
dark.addEventListener("click", function() {
  document.querySelector("body").classList.toggle("dark")
})

const informed = document.getElementById("informed")
informed.addEventListener("click", function(){
  informed.classList.toggle("active")
})

const who_informed = document.getElementById("who_informed")
who_informed.addEventListener("click", function(){
  who_informed.classList.toggle("open")
})
const options_informed = document.getElementsByClassName("informed")
const box_supervisor = document.getElementById("box_supervisor")
for(option of options_informed){
  option.onclick = function(){
    text_informed.innerHTML = this.textContent
    who_informed.classList.remove("open")
    if(this.textContent == "Fiscal"){
      box_supervisor.classList.add("active")
      return supervision.focus()
    }
    box_supervisor.classList.remove("active")
    return table.focus()
  }
}

const replace = document.getElementById("replace")
replace.addEventListener("click", function(){
  replace.classList.toggle("active")
  box_car_two.classList.toggle("active")
})

direction.addEventListener("focusout", function(){
  const options = document.querySelectorAll("#directions .option")
  for(option of options){
    option.onclick = function() {
      direction.value = this.textContent
      box_direction.classList.remove("open")
    }
  }
})