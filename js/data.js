import { toggle_x } from "./layout.js"
import { autocomplete, create_options} from "./lists.js"
import { check_event, check_motive, check_problem } from "./checks.js"

const input = (father, array) => {
  var box = document.querySelector(`#${father}`)
  var input = document.querySelector(`#${father} input`)
  var list = document.querySelector(`#${father} ~ .list`)

  input.addEventListener("click", function(){
    if(box.classList.contains("open")){
      return input.blur()
    }
    setTimeout(()=>{
      create_options(list, array)
    }, 150)
    setTimeout(()=>{
      box.classList.add("open")
      return input.focus()
    }, 151)
  })

  input.addEventListener("input", function(){
    box.classList.add("open")
    toggle_x(father)
    if(father == "box_event")
      this.value = this.value.replace(/[^a-zA-Z ]/,"").toLowerCase()
    else if(father == "box_motive" || father == "box_problems")
      this.value = this.value.replace(/[^a-zA-Záçãâ ]/,"")
    else if(father == "box_direction")
      this.value = this.value.replace(/[^a-zA-Z]/,"").toUpperCase()
    else if(father == "who_informed"){
      this.value = this.value.replace(/[^a-zA-Z ]/,"")
      var values = this.value.split(" ")
      if(values.length > 0){
        this.value = values.map((value)=>{
          return value.charAt(0).toUpperCase()+value.slice(1,value.length)
        }).join(" ")
      }
      return
    }

    create_options(list, autocomplete(this.value, array))
    if(list.childElementCount == 1){
      this.value = list.firstChild.textContent
      box.classList.remove("open")
      if(father == "box_direction")
        window.document.getElementById("event").focus()
      else if(father == "box_event")
        check_event(this.value)
      else if(father == "box_motive")
        check_motive(this.value)
      else if(father == "box_problems")
        check_problem(this.value)
    }
  })

  input.addEventListener("focusout", function(){
    if(father == "who_informed"){
      input.value = input.value.trim()
    }

    const options = document.querySelectorAll(`#${father} ~ .list .option`)
    for(var option of options){
      option.onclick = function(){
        input.value = this.textContent
        box.classList.remove("open")
        toggle_x(father)
        if(father == "box_event")
          return check_event(this.textContent)
        else if(father == "box_motive")
          return check_motive(this.textContent)
        else if(father == "box_problems")
          return check_problem(this.textContent)
      }
    }
    
    setTimeout(()=>{
      box.classList.remove("open")
    }, 100)
  })
}

const cleaning_all = () => {
  const inputs = document.querySelectorAll("#form_cco_informa input")
  for(var input of inputs){
    input.value = ""
  }
  document.getElementById("informed").classList.remove("active")
  document.getElementById("replace").classList.remove("active")
  document.getElementById("box_car_two").classList.remove("active")
  document.getElementById('car_two').disabled = true
  toggle_x("box_operator")
  toggle_x("who_informed")
  toggle_x("box_direction")
  toggle_x("box_event")
  check_event("")
  toggle_x("box_motive")
  check_motive("")
  toggle_x("box_problems")
}

document.getElementById("reset_cco_informa").addEventListener("click", cleaning_all)

export{ input, cleaning_all }