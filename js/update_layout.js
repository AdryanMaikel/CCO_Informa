const box_operator = document.getElementById("box_operator")
const operator = document.getElementById("operator")

box_operator.addEventListener("click", function(){
  box_operator.classList.toggle("open")
})

operator.addEventListener("focusout", function(){
  const options_operators = document.querySelectorAll("#operators_list .option")
  for(var option of options_operators){
    option.onclick = function() {
      operator.value = this.textContent
      box_operator.classList.remove("open")
    }
  }
})