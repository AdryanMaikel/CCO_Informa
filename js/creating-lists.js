import { activies/* , motivies , problems*/ } from "./data.js"
const directions = document.getElementById('directions')
directions.innerHTML = `
${activies.map((value) => {
  return `
  <li class="option">
    <span>${value}</span>
  </li>`
}).join('')}`
