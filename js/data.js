  const activies = ["BC", "CB", "TT", "BB", "CC", "BT", "TB", "SG", "RC", "NS", "SN", "NL", "LN"]
// function autocomplete(activity) {
//   return activies.filter((value)=>{
//     const valueLowerCase = value.toLowerCase()
//     const activityLowerCase = activity.toLowerCase()
//     return valueLowerCase.includes(activityLowerCase)
//   })
// }
// const campo = document.querySelector('.campo')
// const sugestoes = document.querySelector('.sugestoes')

// campo.addEventListener('input', ({ target }) => {
//   const dadosDoCampo = target.value
//   if(dadosDoCampo.length) {
//     const autoCompleteValores = autocomplete(dadosDoCampo)
//     sugestoes.innerHTML = `
//     ${autoCompleteValores.map((value) => {
//       return `<li>${value}</li>`
//       }).join('')
//     } `
//   }
// })