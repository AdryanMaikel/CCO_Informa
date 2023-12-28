import { toggle_x } from "./layout.js"
import { check_event, check_motive, check_problem } from "./checks_events.js"

class ListCreator {
  constructor(father, array) {
    this.box_element = document.getElementById(father)
    this.input_element = document.querySelector(`#${father} input`)
    this.list_element = document.querySelector(`#${father} ~ .list`)
    this.array = array

    this.setupEventListeners()
  }

  create_options(array) {
    this.list_element.innerHTML = array.map(
      (element) => `<li class="option">${element}</li>`
    ).join('')
  }

  autocomplete_options(input) {
    return this.array.filter(
      (value) => value.toLowerCase().includes(input.toLowerCase())
    )
  }

  handle_input_click() {
    if (this.box_element.classList.contains('open'))
      return this.input_element.blur()
    setTimeout(() => this.create_options(this.array), 150)
    setTimeout(() => {
      this.box_element.classList.add('open')
      return this.input_element.focus()
    }, 151)
  }

  capitalize_each_word(words) {
    return words.split(' ').map(
      (word) => `${word.charAt(0).toUpperCase()}${word.slice(1)}`
    ).join(' ')
  }

  check_which_event(input_value) {
    switch (this.box_element.id) {
      case 'box_event':
        return check_event(input_value)
      case 'box_motive':
        return check_motive(input_value)
      case 'box_problems':
        return check_problem(input_value)
    }
  }

  handle_input_press_keys() {
    this.box_element.classList.add('open')
    toggle_x(this.box_element.id)
    let value_result = this.input_element.value.replace(REGEX_LETTERS, '')
    switch (this.box_element.id) {
      case 'who_informed':
        this.input_element.value = this.capitalize_each_word(value_result)
        return
      case 'box_event':
        value_result = value_result.toLowerCase()
        break
      case 'box_direction':
        value_result = value_result.toUpperCase()
        break
    }
    this.input_element.value = value_result
    this.create_options(this.autocomplete_options(this.input_element.value))
    if (this.list_element.childElementCount === 1) {
      this.input_element.value = this.list_element.firstChild.textContent
      this.box_element.classList.remove('open')
      if (this.box_element.id === 'box_direction')
        document.getElementById('event').focus()
      else
        this.check_which_event(this.input_element.value)
    }
  }

  handle_input_focusout() {
    this.input_element.value = this.input_element.value.trim()
    const OPTIONS = document.querySelectorAll(`#${this.box_element.id} ~ .list .option`)
    for (const OPTION of OPTIONS) {
      OPTION.onclick = () => {
        this.input_element.value = OPTION.textContent
        toggle_x(this.box_element.id)
        this.check_which_event(OPTION.textContent)
      }
    }
    setTimeout(() => this.box_element.classList.remove('open'), 250)
  }

  setupEventListeners() {
    this.input_element.addEventListener("click", () => this.handle_input_click())
    this.input_element.addEventListener("input", () => this.handle_input_press_keys())
    this.input_element.addEventListener("focusout", () => this.handle_input_focusout())
  }
}

import { BOX_CLASS, LISTS } from "./lists_data.js"

const REGEX_LETTERS = /[^a-zA-Z`´áéíóú^âêîôû`àèìòù~ãõçÁÉÍÓÚÂÊÎÔÛÀÈÌÒÙÃÕÇ ]/g
BOX_CLASS.map((box_class, index) => new ListCreator(box_class, LISTS[index]))