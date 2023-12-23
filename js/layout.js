import{ toggle_replace_car } from "./replace.js"
import { check_event, check_motive, check_problem } from "./checks.js"
import { calculateHourExit } from "./calculate_hour_exit.js"

const toggle_x = (father) => {
  const trash_box = document.querySelector(`#${father} ~ .box.mini.trash`)
  const input = document.querySelector(`#${father} input`)
  if(input.value == ""){
    return trash_box.classList.remove("active")
  }
  trash_box.classList.add("active")
  trash_box.addEventListener("click", function() {
    input.value = ""
    trash_box.classList.remove("active")
    switch (father) {
      case "box_event":
        check_event(input.value)
        break
      case "box_motive":
        check_motive(input.value)
        break
      case "box_problems":
        check_problem(input.value)
        break
    }
    input.focus();
  })
}

const informed = document.getElementById("informed")
const supervision = document.getElementById("supervision")
informed.addEventListener("click", function(){
  informed.classList.toggle("active")
  supervision.focus()
})

replace.addEventListener("click", function(){
  toggle_replace_car()
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

continued.addEventListener("click", function() {
  continued.classList.toggle("active")
  box_continued.classList.toggle("open")
  if(!box_continued.classList.contains("open")){
    input_continued.disabled = true
    return local.focus()
  }
  input_continued.disabled = false
  return input_continued.focus()
})

const autocomplete_direction = () => {
  if(line.value == "B02"
  || line.value == "B25"
  || line.value == "B51"
  || line.value == "B55"
  || line.value == "B56"){
    direction.value = "BB"
  }else
  if(line.value == "B09"
  || line.value == "A53"
  || line.value == "A63"
  || line.value == "A60"){
    direction.value = "TT"
  }else
  if(line.value == "605"
  || line.value == "617"
  || line.value == "650"
  || line.value == "653"
  || line.value == "7052"
  || line.value == "7053"
  ){
    direction.value = "CC"
  }else
  if(line.value == "A631"
  || line.value == "A21"
  || line.value == "A24"
  || line.value == "A27"
  || line.value == "A31"
  || line.value == "A33"
  ){
    direction.value = "BT"
  }else
  if(line.value == "A632"){
    direction.value = "TB"
  }else{
    // direction.value = ""
  }
  return toggle_x("box_direction")
}

table.addEventListener("input", function(){
  this.value = this.value.replace(/[^a-zA-Z0-9]/,"").toUpperCase()
})

table.addEventListener("focusout", function(){
  if(this.value.indexOf("/")>=1 || this.value.length < 3){return}//Para não ficar colocando barras 
  var value = this.value.split("")
  value = value.slice(0,this.value.length-3).join("")+"/"+value.slice(this.value.length-3,this.value.length+1).join("")
  if(line.value == ""){
    var input_line = value.split("/")[0]
    if(input_line == "661"){
      line.value = "761"
    }else if(input_line == "662"){
      line.value = "762"
    }else{
      line.value = input_line
    }
  }
  autocomplete_direction()
  return this.value = value
})

const cars = document.getElementsByClassName("car")
for(var car of cars){
  car.addEventListener("input", function(){
    this.value = this.value.replace(/[^0-9]/,"")
    if(this.value.length == 4){
      if(replace.classList.contains("active"))
        return car_two.focus()
      else
        return line.focus()
    }
  })
}

line.addEventListener("input", function(){
  this.value = this.value.replace(/[^a-zA-Z0-9]/,"").toUpperCase()
})

line.addEventListener("focusout", function(){
  return autocomplete_direction()
})

const inputs_hour = document.querySelectorAll("input.hour")
for(const input_hour of inputs_hour){
  input_hour.addEventListener("input", function(event){
    this.value = this.value.replace(/[^0-9:]/,"")
    if(input_hour.value.length == 2
    && event.inputType != "deleteContentBackward")
      return this.value += ":"
    else if(input_hour.value.length == 5)
      if(input_hour.id == "hour")
        return direction.focus()
      else if(input_hour.id == "hour_stop")
        return hour_return.focus()
      else
        return input_hour.blur()
  })
}

const box_hours = document.getElementById("box_hours")
const box_gps = document.getElementById("box_gps")
const hour_return = document.getElementById("hour_return")
const hour_stop = document.getElementById("hour_stop")
box_gps.addEventListener("click", () => {
  if(document.getElementById("parou").checked == true){
    box_hours.classList.add("active")
    hour_return.disabled = false
    hour_stop.disabled = false
    if(hour_stop.value == "")
      return hour_stop.focus()
    else
      return hour_return.focus()
  }else{
    box_hours.classList.remove("active")
    hour_return.disabled = true
    hour_stop.disabled = true
  }
})

min.addEventListener("input", function(){
  this.value = this.value.replace(/[^0-9]/, "")
  if(this.value.length == 2){
    return motive.focus()
  }
})

const trash_cco_informa = document.getElementById('btn_trash')
trash_cco_informa.addEventListener('click', () => {
  document.getElementById('text_cco_informa').value = ''
})


const clear_all = document.getElementById('clear_all')
clear_all.addEventListener('click', function(){
  document.getElementById('text_cco_informa').value = ''
  cleaning_all()
  var inputs = document.querySelectorAll('#form_send_sheets input')
  var textareas = document.querySelectorAll('#form_send_sheets textarea')
  for(const input of inputs){
    input.value = ''
  }
  for(const textarea of textareas){
    textarea.value = ''
  }
})

const dropping_passengers = document.getElementById("dropping_passengers")
dropping_passengers.addEventListener('click', () => {
  dropping_passengers.classList.toggle('active')
})

const calculate_hour_exit = document.getElementById('calculate_hour_exit')
calculate_hour_exit.addEventListener('click', () => {
  document.getElementById('box_calculate_hour_exit').classList.toggle('open')
})

const inputs_hours = document.querySelectorAll('#box_calculate_hour_exit .row .collumn .box .hour')
for(var input_hour of inputs_hours) {
  input_hour.addEventListener('blur', () => {
    const start_journey = document.getElementById('start_journey').value
    const start_interval = document.getElementById('start_interval').value
    const end_interval = document.getElementById('end_interval').value
    const end_journey = document.getElementById('end_journey')
    if(start_journey  == ''
    || start_interval == ''
    || end_interval   == '') {
      return
    }
    
    end_journey.value = calculateHourExit('07:10', start_journey, start_interval, end_interval)
  })
}

export { toggle_x }