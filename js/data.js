const operators = [
  "Adryan",
  "Ana",
  "Felipe",
  "Hellen",
  "Leandro"
]

function createList(list, array){
  for(var index of array.sort()){
    list.innerHTML += `<li class="option">${index}</li>`
  }
}
export { operators , createList }