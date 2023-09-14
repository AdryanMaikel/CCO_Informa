import { activies , motivies , problems } from "./data.js"
const list_activities = document.querySelector('.list_activities')
list_activities.innerHTML = `
${activies.map((value) => {
  return `
  <li class="options_activies">
    <span class="text_activies">${value}</span>
  </li>`
}).join('')}`

const list_motives = document.querySelector('#list_motives')
list_motives.innerHTML = `
${motivies.map((value) => {
  return `
  <li class="option_motive">
    <span class="text_motive">${value}</span>
  </li>`
}).join('')}`

const div_motives = document.getElementById("div_motives")
div_motives.addEventListener("click", function(){
  div_motives.classList.toggle("active")
  function autocomplete(input) {
    return motivies.filter((value)=>{
      const valueLowerCase = value.toLowerCase()
      const motiviesLowerCase = input.toLowerCase()
      return valueLowerCase.includes(motiviesLowerCase)
    })
  }
  motive.addEventListener('input', ({ target }) => {
    const dadosDoCampo = target.value
    if(dadosDoCampo.length) {
      const autoCompleteValores = autocomplete(dadosDoCampo)
      list_motives.innerHTML = `
      ${autoCompleteValores.map((value) => {
        return `
        <li class="option_motive">
        <span class="text_motive">${value}</span>
        </li>`
      }).join('')}`
    }else{
      list_motives.innerHTML = `
      ${motivies.map((value) => {
        return `
        <li class="option_motive">
          <span class="text_motive">${value}</span>
          </li>`
        }).join('')}`
    }
  })
})

function check_motive(motive) {
  if(motive == "Falta de Tripulação"){
    div_motives.classList.add("tripulation")
  }else{
    div_motives.classList.remove("tripulation")
  }
  if(motive == "Congestionamento"){
    div_motives.classList.add("congestion")
    setTimeout(function(){
      document.getElementById("input_congestion_location").focus()
    }, 600)
  }else{
    div_motives.classList.remove("congestion")
  }
  if(motive == "Problemas mecânicos"){
    row_problems.classList.add("open")
    setTimeout(function(){
      document.getElementById("problem").focus()
      div_problems.classList.add("active")
    }, 600)
  }else{
    row_problems.classList.remove("open")
  }
}

const motive = document.getElementById('motive')
const options_motive = document.getElementsByClassName('option_motive')
div_motives.addEventListener("focusout", function(){
  for(options of options_motive){
    options.onclick = function() {
      motive.value = this.textContent.trim()
      div_motives.classList.remove("active")
      check_motive(this.textContent.trim())
    }
  }
})

const list_problems = document.querySelector('#list_problems')
list_problems.innerHTML = `
${problems.map((value) => {
  return `
  <li class="option_problem">
    <span class="text_problem">${value}</span>
  </li>`
}).join('')}`

const div_problems = document.getElementById("div_problems")
div_problems.addEventListener("click", function(){
  div_problems.classList.toggle("active")
  function autocomplete(input) {
    return problems.filter((value)=>{
      const valueLowerCase = value.toLowerCase()
      const problemsLowerCase = input.toLowerCase()
      return valueLowerCase.includes(problemsLowerCase)
    })
  }
  problem.addEventListener('input', ({ target }) => {
    const dadosDoCampo = target.value
    if(dadosDoCampo.length) {
      const autoCompleteValores = autocomplete(dadosDoCampo)
      list_problems.innerHTML = `
      ${autoCompleteValores.map((value) => {
        return `
        <li class="option_problem">
          <span class="text_problem">${value}</span>
        </li>`
      }).join('')}`
    }else{
      list_problems.innerHTML = `
      ${problems.map((value) => {
        return `
        <li class="option_problem">
          <span class="text_problem">${value}</span>
        </li>`
      }).join('')}`
    }
  })
})

const problem = document.getElementById('problem')
const option_problem = document.getElementsByClassName('option_problem')
div_problems.addEventListener("focusout", function(){
  for(options of option_problem){
    options.onclick = function() {
      problem.value = this.textContent.trim()
      div_problems.classList.remove("active")
    }
  }
})
