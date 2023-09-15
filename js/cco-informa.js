const dark = document.getElementById("dark")
dark.addEventListener("click", function() {
  document.querySelector("body").classList.toggle("dark")
})

const informed = document.getElementById("informed")
informed.addEventListener("click", function(){
  informed.classList.toggle("active")
})

const who_informed = document.getElementById("who_informed")
who_informed.addEventListener("click", function(){
  who_informed.classList.toggle("open")
})
const options_informed = document.getElementsByClassName("informed")
const box_supervisor = document.getElementById("box_supervisor")
for(option of options_informed){
  option.onclick = function(){
    text_informed.innerHTML = this.textContent
    who_informed.classList.remove("open")
    if(this.textContent == "Fiscal"){
      return box_supervisor.classList.add("active")
    }else{
      return box_supervisor.classList.remove("active")
    }
  }
}