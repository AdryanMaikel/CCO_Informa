const informed = document.getElementById("informed")
const supervision = document.getElementById("supervision")
informed.addEventListener("click", function(){
  informed.classList.toggle("active")
  supervision.focus()
})

const open_remove_x = (pai) => {
  const open = document.querySelector(`#${pai} ~ .box.mini.x`)
  const input = document.querySelector(`#${pai} input`)
  if(input.value == ""){
    return open.classList.remove("active")
  }else{
    open.classList.add("active")
    open.addEventListener("click", function(){
      input.value = ""
      open.classList.remove("active")
      return input.focus()
    })
  }
}
const who_informed = document.getElementById("who_informed")
supervision.addEventListener("click", function(){
  who_informed.classList.toggle("open")
})
supervision.addEventListener("blur", function(){
  for(var option of options_informed){
    option.onclick = function(){
      supervision.value = this.textContent
      who_informed.classList.remove("open")
      open_remove_x("who_informed")
      return table.focus()
    }
  }
  setTimeout(function(){
    who_informed.classList.remove("open")
  },100)
})
supervision.addEventListener("input", function(){
  open_remove_x("who_informed")
})
const options_informed = document.getElementsByClassName("informed")
const box_supervisor = document.getElementById("box_supervisor")



const replace = document.getElementById("replace")
const box_car_two = document.getElementById("box_car_two")
replace.addEventListener("click", function(){
  replace.classList.toggle("active")
  box_car_two.classList.toggle("active")
  if(box_car_two.classList.contains("active")){
    return car_two.focus()
  }
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

supervision.addEventListener("input", function(){this.value = this.value.replace(/[^a-zA-Z] /,"")})

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
