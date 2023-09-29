const informed = document.getElementById("informed")
const supervision = document.getElementById("supervision")
informed.addEventListener("click", function(){
  informed.classList.toggle("active")
  supervision.focus()
})

const replace = document.getElementById("replace")
const box_car_two = document.getElementById("box_car_two")
const car_two = document.getElementById("car_two")
replace.addEventListener("click", function(){
  replace.classList.toggle("active")
  box_car_two.classList.toggle("active")
  if(box_car_two.classList.contains("active")){
    car_two.toggleAttribute("disabled")
    return car_two.focus()
  }
  car_two.toggleAttribute("disabled")
  return line.focus()
})

const box_local = document.getElementById("box_local")
const row_local = document.getElementById("row_local")
const continued = document.getElementById("continued")
const box_continued = document.getElementById("box_continued")
const input_continued = document.getElementById("input_continued")
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
  if(!box_continued.classList.contains("open")){
    return local.focus()
  }
  return input_continued.focus()
})

supervision.addEventListener("input", function(){})

table.addEventListener("input", function(){this.value = this.value.replace(/[^a-zA-Z0-9]/,"").toUpperCase()})
table.addEventListener("focusout", function(){
  if(this.value.indexOf("/")>=1 || this.value.length < 3){return}//Para não ficar colocando barras 
  var value = this.value.split("")
  return this.value = value.slice(0,this.value.length-3).join("")+"/"+value.slice(this.value.length-3,this.value.length+1).join("")
})

const cars = document.getElementsByClassName("car")
for(var car of cars){
  car.addEventListener("input", function(){this.value = this.value.replace(/[^0-9]/,"")})
}
line.addEventListener("input", function(){this.value = this.value.replace(/[^a-zA-Z0-9]/,"").toUpperCase()})
hour.addEventListener("input", function(){
  this.value = this.value.replace(/[^0-9:]/,"").toUpperCase()
  if(hour.value.length == 4){
    hour.value = hour.value.slice(0, 2) + ":" + hour.value.slice(2, 4)
    return direction.focus()
  }
})
// hour.addEventListener("blur", function() {
// })
const input_event = document.getElementById("event")
input_event.addEventListener("input", function(){this.value = this.value.replace(/[^a-zA-Z ]/,"").toUpperCase()})

// const box_Operador = document.getElementById("box_Operador")
// box_Operador.addEventListener("click", function(){
//   box_Operador.classList.add("open")
// })
