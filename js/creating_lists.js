import { operators } from "./data.js";
const operators_list = document.getElementById("operators_list")
for(var operator of operators){
  operators_list.innerHTML += `<li class="option">${operator}</li>`
}

