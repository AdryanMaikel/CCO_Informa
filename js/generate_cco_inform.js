function generate_cco_inform(){
  cco_informa = "*CCO INFORMA*\n"
  const informed = document.getElementById("informed")
  if(informed.classList.contains("active")){
    cco_informa += "Conforme informado ao CCO pelo "
  }else{
    cco_informa += "Conforme contato feito pelo CCO ao "
  }

  if(text_informed.innerText == "Fiscal"){
    cco_informa += "fiscal "
    if(supervision.value.length > 0){
      cco_informa += supervision.value[0].toUpperCase()+supervision.value.substring(1)
    }
  }else{
    cco_informa += "largador da "+who_informed.innerText
  }
  cco_informa += "\n"
  
  cco_informa += `- ${table.value}, carro ${car.value}\n`
  cco_informa += `- ${line.value} das ${hour.value}, ${direction.value}\n`
  cco_informa += "- Viagem "
  const event = document.getElementById("event")
  switch (event.value) {
    case "":
      // return event.focus()
      break
    case "atrasada":
      cco_informa += `realizada com ${min.value} minutos de atraso`
      break
    case "perdida":
      cco_informa += `não realizada`
      break
    case "realizada a frente":
      cco_informa += `realizada a partir da ${local.value}`
      break
    case "interrompida":
      cco_informa += `interrompida na ${local.value}`
      break
  }
  cco_informa += "\n- Motivo: "

  switch (motive.value) {
    case "Acidente":
      cco_informa += "Carro "+car.value+" ter se envolvido em um acidente"
    break;
    case "Assalto":
      cco_informa += "Carro "+car.value+" ter sido assaltado"
    break;
    case "Atrasado":
      cco_informa += "Atraso"
    break;
    case "Avaria":
      cco_informa += "Carro "+car.value+" ter sofrido avaria"
    break;
    case "Congestionamento":
      if(congestion_locale.value.length > 0){
        cco_informa += `Congestionamento na ${congestion_locale.value}`
      }else{
        return congestion_locale.focus()
      }
    break;
    case "Falta de Carro":
      cco_informa += "Falta de carro"
    break;
    case "Falta de Tripulação":
      cco_informa += "Falta de "
      if(motorista.checked){
        cco_informa += "motorista"
      }else{
        cco_informa += "cobrador"
      }
    break;
    case "Pneu Furado":
      cco_informa += "Pneu furado do carro "+car.value
    break;
    case "Problema com passageiro":
      cco_informa += "problema com passageiro"
    break;
    case "Tempo insuficiente":
      cco_informa += "tempo insuficiente para realizar viagem"
    break;
    case "Validador/ Roleta":
      cco_informa += "Problemas " 
      if(roullet.checked)
        cco_informa += "na roleta "
      else
        cco_informa += "no validador "
      cco_informa += `do carro ${car.value}`
    break;
    case "Vandalismo":
      cco_informa += "Carro "+car.value+" ter sofrido vandalismo"
    break;
    case "Vistoria EPTC":
      cco_informa += "Carro "+car.value+" ter sido recolhido pela EPTC"
    break;
    case "Problemas mecânicos":
      switch (problem.value) {
        case "Carroceria - Ar Condicionado":
          cco_informa += "Problemas no ar-condicionado do carro "+car.value
        break;
        case "Carroceria - Elevador APD":
          cco_informa += "Problemas no elevador APD do carro "+car.value
        break;
        case "Carroceria - Itens de segurança":
          cco_informa += ""
        break;
        case "Carroceria - Limpador / Espelho":
          cco_informa += "Problemas no limpador/espelho do carro "+car.value
        break;
        case "Carroceria - Outros":
          cco_informa += ""
        break;
        case "Carroceria - Portas":
          cco_informa += "Problemas nas portas do carro "+car.value
        break;
        case "Elétrica - Alternador":
          cco_informa += "Problemas no alternador do carro "+car.value
        break;
        case "Elétrica - Iluminação interna":
          cco_informa += "Problemas de iluminação interna no carro "+car.value
        break;
        case "Elétrica - Letreiro":
          cco_informa += "Problemas no letreiro do carro "+car.value
        break;
        case "Elétrica - Pane elétrica":
          cco_informa += "Pane elétrica do carro "+car.value
        break;
        case "Elétrica - Sem arranque":
          cco_informa += "Carro "+car.value+" não pegar"
        break;
        case "Motor - Cigarra/Aquecimento":
          cco_informa += "Carro "+car.value+" ter super aquecido"
        break;
        case "Motor - Cigarra/óleo motor":
          cco_informa += "Carro "+car.value+" ter super aquecido"
        break;
        case "Motor - Correias":
          cco_informa += "Problemas nas correias do motor do carro "+car.value
        break;
        case "Motor - Sem Força":
          cco_informa += "Carro "+car.value+" estar sem força"
        break;
        case "Motor - Vazamento de água":
          cco_informa += "Vazamento de água no carro "+car.value
        break;
        case "Motor - Vazamento de óleo Diesel":
          cco_informa += "Vazamento de diesel no carro "+car.value
        break;
        case "Motor - Vazamento de óleo motor":
          cco_informa += "Vazamento de óleo do motor no carro "+car.value
        break;
        case "Problemas na viagem anterior":
          cco_informa += ""
        break;
        case "Suspensão - Arriada":
          cco_informa += "Problemas na suspenção do carro "+car.value
        break;
        case "Suspensão - Carro atravessado":
          cco_informa += "Carro "+car.value+" estar atravessado"
        break;
        case "Suspensão - Embreagem / Caixa":
          cco_informa += "Problemas na embreagem do carro "+car.value
        break;
        case "Suspenção - Freio":
          cco_informa += "Problemas nos freios do carro "+car.value
        break;
        case "Suspensão - Roda":
          cco_informa += "Problemas nas rodas do carro "+car.value
        break;
        case "Suspensão - Vazamento de ar":
          cco_informa += "Vazamento de ar no carro "+car.value
        break;
      }
    break;
  }
  if(replace.classList.contains("active")){
    const car_two = document.getElementById("car_two").value
    cco_informa += `, trocado pelo carro ${car_two}`
  }
  if(continued.classList.contains("active")){
    if(input_continued.value.length > 0){
      cco_informa += `, que continuou puxando viagem a partir da ${input_continued.value}`
    }else{
      input_continued.focus()
    }
  }
  cco_informa += "\n\n"
  return cco_informa
}
const text_cco_informa = document.getElementById("text_cco_informa")
const form = document.getElementById("form").addEventListener("submit", function(event){event.preventDefault()})
const generate_cco = document.getElementById("generate_cco_inform").addEventListener("click", function(){
  text_cco_informa.value = generate_cco_inform()
})
const generate_other = document.getElementById("generate_other").addEventListener("click", function(){
  text_cco_informa.value += generate_cco_inform()
})
const copy = document.getElementById("copy").addEventListener("click", function(){
  text_cco_informa.select()
  document.execCommand("copy")
})
// MOLDE
/*
*CCO INFORMA:*
Conforme informado ao CCO pelo largador da Nortran
- 659/011, carro 6427
- 659 das 15:00, BC
- Viagem interrompida na Av. Cascais
- Motivo: devido a problemas no limpador do para-brisa do carro 6427,
trocado pelo carro 6487, que continuou puxando viagem a partir da 
Av. Cascais em diante
*/