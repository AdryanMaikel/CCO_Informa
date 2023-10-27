const replace = document.getElementById("replace")
const toggle_replace_car = () => {
  const box_car_two = document.getElementById("box_car_two")
  const car_two = document.getElementById("car_two")
  replace.classList.toggle("active")
  box_car_two.classList.toggle("active")
  if(box_car_two.classList.contains("active")){
    car_two.toggleAttribute("disabled")
    return car_two.focus()
  }
  car_two.toggleAttribute("disabled")
  return line.focus()
}

export { toggle_replace_car }