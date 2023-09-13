const activies = [
  "BC",
  "CB",
  "TT",
  "BB",
  "CC",
  "BT",
  "TB",
  "SG",
  "RC",
  "NS",
  "SN",
  "NL",
  "LN"
]
const motivies = [
  "Acidente",
  "Assalto",
  "Atrasado",
  "Avaria",
  "Congestionamento",
  "Falta de Carro",
  "Falta de Tripulação",
  "Pneu Furado",
  "Problema com passageiro",
  "Problemas mecânicos",
  "Roleta",
  "Tempo insuficiente",
  "Validador",
  "Vandalismo",
  "Vistoria EPTC"
]
const problems = []

export{ activies, motivies, problems }

// function autocomplete(motivies) {
//   return motivies.filter((value)=>{
//     const valueLowerCase = value.toLowerCase()
//     const motiviesLowerCase = motivies.toLowerCase()
//     return valueLowerCase.includes(motiviesLowerCase)
//   })
// }
// motive.addEventListener('input', ({ target }) => {
//   const dadosDoCampo = target.value
//   if(dadosDoCampo.length) {
//     const autoCompleteValores = autocomplete(dadosDoCampo)
//     sugestoes.innerHTML = `
//     ${autoCompleteValores.map((value) => {
//       return `<li>${value}</li>`
//     }).join('')}`
//   }else{
//     sugestoes.innerHTML = `
//     ${motivies.map((value) => {
//       return `
//       <li class="option_motive">
//         <span class="text_motive">${value}</span>
//       </li>`
//     }).join('')}`
//   }
// })
// function autocomplete(activity) {
//   return activies.filter((value)=>{
//     const valueLowerCase = value.toLowerCase()
//     const activityLowerCase = activity.toLowerCase()
//     return valueLowerCase.includes(activityLowerCase)
//   })
// }
// const campo = document.querySelector('.campo')
// const sugestoes = document.querySelector('.list_activities')

// campo.addEventListener('input', ({ target }) => {
//   const dadosDoCampo = target.value
//   if(dadosDoCampo.length) {
//     const autoCompleteValores = autocomplete(dadosDoCampo)
//     sugestoes.innerHTML = `
//     ${autoCompleteValores.map((value) => {
//       return `<li>${value}</li>`
//     }).join('')}`
//   }else{
//     sugestoes.innerHTML = `
//     ${activies.map((value) => {
//       return `
//       <li class="options_activies">
//         <span class="text_activies">${value}</span>
//       </li>`
//     }).join('')}`
//   }
// })

/* Gerando activitys */
// const activity = document.getElementById('div_activity')
// const direction = document.getElementById('direction')
// activity.addEventListener("click", function() {
//   activity.classList.toggle("active")
//   const activies = ["BC", "CB", "TT", "BB", "CC", "BT", "TB", "SG", "RC", "NS", "SN", "NL", "LN"]
//   const list_activities = document.querySelector('.list_activities')
//   list_activities.innerHTML = `
//   ${activies.map((value) => {
//     return `
//     <li class="options_activies">
//       <span class="text_activies">${value}</span>
//     </li>`
//   }).join('')}`
//   const options_activies = document.getElementsByClassName('options_activies')
//   for(options of options_activies){
//     options.onclick = function() {
//       direction.innerHTML = this.textContent
//       activity.classList.remove("active")
//     }
//   }
// })
