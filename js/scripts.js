import { activies } from "./data.js"
console.log(activies)
const list_activities = document.querySelector('.list_activities')
list_activities.innerHTML = `
${activies.map((value) => {
  return `
  <li class="options_activies">
    <span class="text_activies">${value}</span>
  </li>`
}).join('')}`