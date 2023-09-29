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

const events = [
  "atrasada",
  "interrompida",
  "perdida",
  "realizada a frente"
]

const motives = [
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
  "Tempo insuficiente",
  "Validador/ Roleta",
  "Vandalismo",
  "Vistoria EPTC"
]
const problems = [
  "Carroceria - Ar Condicionado",
  "Carroceria - Elevador APD",
  "Carroceria - Itens de segurança",
  "Carroceria - Limpador / Espelho",
  "Carroceria - Outros",
  "Carroceria - Portas",
  "Elétrica - Alternador",
  "Elétrica - Iluminação Externa",
  "Elétrica - Iluminação interna",
  "Elétrica - Letreiro",
  "Elétrica - Pane elétrica",
  "Elétrica - Sem arranque",
  "Motor - Cigarra/Aquecimento",
  "Motor - Cigarra/óleo motor",
  "Motor - Correias",
  "Motor - Sem Força",
  "Motor - Vazamento de água",
  "Motor - Vazamento de óleo Diesel",
  "Motor - Vazamento de óleo motor",
  "Problemas na viagem anterior",
  "Suspensão - Arriada",
  "Suspensão - Carro atravessado",
  "Suspensão - Embreagem / Caixa",
  "Suspensão - Freio",
  "Suspensão - Roda",
  "Suspensão - Vazamento de ar"
]

const operators = [
  "Adryan",
  "Ana",
  "Felipe",
  "Hellen",
  "Leandro"
]

const create_options = (list, array) => {
  return list.innerHTML = `${array.map((index)=>{
    return `<li class="option">${index}</li>`
  }).join("")}`
}

const autocomplete = (input, array) => {
  return array.filter((value)=>{
    return value.toLowerCase().includes(input.toLowerCase())
  })
}

const toggle_x = (pai) => {
  const open = document.querySelector(`#${pai} ~ .box.mini.x`)
  const input = document.querySelector(`#${pai} input`)
  if(input.value == ""){
    return open.classList.remove("active")
  }else{
    open.classList.add("active")
    open.addEventListener("click", function(){
      input.value = ""
      open.classList.remove("active")
      return input.focus()
    })
  }
}



export{ activies, events, motives, problems, operators, create_options, autocomplete, toggle_x }