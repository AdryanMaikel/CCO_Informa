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

const box_local = document.getElementById("box_local")
const row_local = document.getElementById("row_local")
const continued = document.getElementById("continued")
const box_continued = document.getElementById("box_continued")
box_local.addEventListener("click", function(){
  box_local.classList.toggle("open")
  row_local.classList.toggle("open")
  if(continued.classList.contains("active")){
    box_continued.classList.toggle("open")
  }
})
continued.addEventListener("click", function(){
  continued.classList.toggle("active")
  box_continued.classList.toggle("open")
})

supervision.addEventListener("input", function(){this.value = this.value.replace(/[^a-zA-Z]/,"")})

table.addEventListener("input", function(){this.value = this.value.replace(/[^a-zA-Z0-9]/,"").toUpperCase()})
table.addEventListener("focusout", function(){
  if(this.value.indexOf("/")>=1 || this.value.length < 3){
    return
  }
  result = this.value.split("").reverse().slice(0,3)
  result = this.value.split("").reverse().slice(3,this.value.length+1).reverse().join("")+"/"+result.reverse().join("")
  this.value = result
})

input_car.addEventListener("input", function(){this.value = this.value.replace(/[^0-9]/,"")})
car_two.addEventListener("input", function(){this.value = this.value.replace(/[^0-9]/,"")})
line.addEventListener("input", function(){this.value = this.value.replace(/[^a-zA-Z0-9]/,"").toUpperCase()})
hour.addEventListener("input", function(){this.value = this.value.replace(/[^0-9:]/,"").toUpperCase()})
hour.addEventListener("blur", function() {
  if(hour.value.length == 4){
    hour.value = hour.value.slice(0, 2) + ":" + hour.value.slice(2, 4)
  }
})
const input_event = document.getElementById("event")
input_event.addEventListener("input", function(){this.value = this.value.replace(/[^a-zA-Z ]/,"").toUpperCase()})

const box_Operador = document.getElementById("box_Operador")
box_Operador.addEventListener("click", function(){
  box_Operador.classList.add("open")
})