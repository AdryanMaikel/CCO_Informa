CCO_SHEETS = {Data:"",	Tabela:"",	Linha:"",	Carro:"",	Substituto:"",	Hora:"",	Sentido:"",	Ocorrência:"",	Problema:"",	Observação:"",	Operador:""}

const date = new Date()
const day = String(date.getDate()).padStart(2, "0")
const month = String(date.getMonth() + 1).padStart(2, "0")
const year = date.getFullYear()
const date_actual = `${day}/${month}/${year}`


problema_viagem_anterior = ""

CCO_SHEETS.Data = date_actual

function generate_cco_informa(){
  cco_informa = "*CCO INFORMA*\n"
  const informed = document.getElementById("informed")
  if(informed.classList.contains("active")){
    cco_informa += "Conforme informado ao CCO pelo "
  }else{
    cco_informa += "Conforme contato feito pelo CCO ao "
  }

  var why_informed = ''
  if(supervision.value == "Navegantes"
  || supervision.value == "Nortran"
  || supervision.value == "Sopal"){
    why_informed += "largador da "+supervision.value
  }else{
    why_informed += "fiscal "
    if(supervision.value.length > 0){
      why_informed += supervision.value
    }
  }
  cco_informa += `${why_informed}\n`

  const input_car = document.getElementById("input_car").value

  CCO_SHEETS.Tabela = table.value
  CCO_SHEETS.Linha = line.value
  CCO_SHEETS.Carro = input_car
  CCO_SHEETS.Hora = hour.value
  CCO_SHEETS.Sentido = direction.value

  cco_informa += `- ${table.value}, carro ${input_car}\n`
  cco_informa += `- ${line.value} das ${hour.value}, ${direction.value}\n`

  ocorrencia_CCO_SHEETS = ""
  const event = document.getElementById("event")
  result_event = "Viagem "
  switch (event.value) {
    case "":
      // return event.focus()
      break
    case "adiantada":
      result_event += `realizada com ${min.value} minutos antes do horário previsto,`
      break
    case "atrasada":
      result_event += `realizada com ${min.value} minutos de atraso`
      ocorrencia_CCO_SHEETS = "Problemas mecânicos - Atrasado"
      break
    case "perdida":
      result_event += `não realizada`
      ocorrencia_CCO_SHEETS = "Problemas mecânicos - Viagem perdida"
      break
    case "realizada a frente":
      result_event += `realizada a partir d${local.value}`
      ocorrencia_CCO_SHEETS = "Problemas mecânicos - Viagem realizada a frente"
      break
    case "interrompida":
      result_event += `interrompida n${local.value}`
      ocorrencia_CCO_SHEETS = "Problemas mecânicos - Viagem interrompida"
      break
  }

  CCO_SHEETS.Problema = problem.value
  cco_informa +="- "+result_event+"\n- Motivo: "

  result_motive = ""
  switch (motive.value) {
    case "Acidente":
      result_motive += "Carro "+input_car+" ter se envolvido em um acidente"
    break;
    case "Adiantado com autorização":
      result_event += ` autorizado pelo ${why_informed}.`
    break
    case "Adiantado sem autorização":
      result_event += ` sem autorização da fiscalização.`
    break
    case "Assalto":
      result_motive += "Carro "+input_car+" ter sido assaltado"
    break;
    case "Atrasado":
      result_motive += "Atraso"
    break;
    case "Avaria":
      result_motive += "Carro "+input_car+" ter sofrido avaria"
    break;
    case "Congestionamento":
      if(congestion_locale.value.length > 0){
        result_motive += `Congestionamento n${congestion_locale.value}`
      }else{
        return congestion_locale.focus()
      }
    break;
    case "Falta de Carro":
      result_motive += "Falta de carro"
    break;
    case "Falta de Tripulação":
      result_motive += "Falta de "
      if(motorista.checked){
        result_motive += "motorista"
      }else{
        result_motive += "cobrador"
      }
    break;
    case "Pneu Furado":
      result_motive += "Pneu furado do carro "+input_car
    break;
    case "Problema com passageiro":
      result_motive += "problema com passageiro"
    break;
    case "Tempo insuficiente":
      result_motive += "tempo insuficiente para realizar viagem"
    break;
    case "Validador/ Roleta":
      result_motive += "Problemas " 
      if(roullet.checked)
        result_motive += "na roleta "
      else
        result_motive += "no validador "
      result_motive += `do carro ${input_car}`
    break;
    case "Vandalismo":
      result_motive += "Carro "+input_car+" ter sofrido vandalismo"
    break;
    case "Vistoria EPTC":
      //result_motive += "Carro "+input_car+" ter sido recolhido pela EPTC"
      result_motive += "Vistoria da EPTC"
      break;
    case "Problemas mecânicos":
      switch (problem.value) {
        case "Carroceria - Ar Condicionado":
          result_motive += "Problemas no ar-condicionado do carro "+input_car
        break;
        case "Carroceria - Elevador APD":
          result_motive += "Problemas no elevador APD do carro "+input_car
        break;
        case "Carroceria - Itens de segurança":
          result_motive += ""
        break;
        case "Carroceria - Limpador / Espelho":
          if(document.getElementById("Limpador").checked)
            result_motive += "Problemas no limpador" 
          else
            result_motive += "Queda do espelho"
          result_motive += " do carro "+input_car
        break;
        case "Carroceria - Outros":
          result_motive += ""
        break;
        case "Carroceria - Portas":
          result_motive += "Problemas nas portas do carro "+input_car
        break;
        case "Elétrica - Alternador":
          result_motive += "Problemas no alternador do carro "+input_car
        break;
        case "Elétrica - Iluminação interna":
          result_motive += "Problemas de iluminação interna no carro "+input_car
        break;
        case "Elétrica - Letreiro":
          result_motive += "Problemas no letreiro do carro "+input_car
        break;
        case "Elétrica - Pane elétrica":
          result_motive += "Pane elétrica do carro "+input_car
        break;
        case "Elétrica - Sem arranque":
          result_motive += "Carro "+input_car+" não pegar"
        break;
        case "Motor - Cigarra/Aquecimento":
          result_motive += "Carro "+input_car+" ter super aquecido"
        break;
        case "Motor - Cigarra/óleo motor":
          result_motive += "Carro "+input_car+" ter super aquecido"
        break;
        case "Motor - Correias":
          result_motive += "Problemas nas correias do motor do carro "+input_car
        break;
        case "Motor - Sem Força":
          result_motive += "Carro "+input_car+" estar sem força"
        break;
        case "Motor - Vazamento de água":
          result_motive += "Vazamento de água no carro "+input_car
        break;
        case "Motor - Vazamento de óleo Diesel":
          result_motive += "Vazamento de diesel no carro "+input_car
        break;
        case "Motor - Vazamento de óleo motor":
          result_motive += "Vazamento de óleo do motor no carro "+input_car
        break;
        case "Problemas na viagem anterior":
          result_motive = problema_viagem_anterior += ' na viagem anterior'
        break;
        case "Suspensão - Arriada":
          result_motive += "Problemas na suspensão do carro "+input_car
        break;
        case "Suspensão - Carro atravessado":
          result_motive += "Carro "+input_car+" estar atravessado"
        break;
        case "Suspensão - Embreagem / Caixa":
          result_motive += "Problemas na "
          if(document.getElementById("Embreagem").checked)
            result_motive += "embreagem"
          else
            result_motive += "caixa das marchas"
          result_motive += " do carro "+input_car
        break;
        case "Suspensão - Freio":
          result_motive += "Problemas nos freios do carro "+input_car
        break;
        case "Suspensão - Roda":
          result_motive += "Problemas nas rodas do carro "+input_car
        break;
        case "Suspensão - Vazamento de ar":
          result_motive += "Vazamento de ar no carro "+input_car
        break;
      }
    break;
  }
 
  problema_viagem_anterior = result_motive

  cco_informa += result_motive

  if(motive.value != "Problemas mecânicos"){
    CCO_SHEETS.Ocorrência = motive.value
    CCO_SHEETS.Problema = ""
  }else{
    CCO_SHEETS.Ocorrência = ocorrencia_CCO_SHEETS
  }

  replace_car = ""
  if(replace.classList.contains("active")){
    const car_two = document.getElementById("car_two").value
    replace_car = `, trocado pelo carro ${car_two}`
    cco_informa += replace_car
    CCO_SHEETS.Substituto = car_two
  }else{
    CCO_SHEETS.Substituto = ""
  }
  continued_journey_text = ""
  if(continued.classList.contains("active")){
    if(input_continued.value.length > 0){
      continued_journey_text = `, que continuou puxando viagem a partir d${input_continued.value}`
      cco_informa += continued_journey_text
    }else{
      input_continued.focus()
    }
  }
  if(result_motive != "" ) 
    result_motive = result_motive[0].toLowerCase() + result_motive.slice(1) 
  else 
    result_motive = ""
  
  if (event.value == "adiantada")
    CCO_SHEETS.Observação = `${result_event}`
  else
    CCO_SHEETS.Observação = `${result_event}, devido a ${result_motive}${replace_car}${continued_journey_text}.`
  
  cco_informa += "\n\n"
  return cco_informa
}

const function_send_sheet = function () {
  // const send_sheets = document.getElementById("send_sheets").addEventListener("click", function(){})
  const container_send_sheets = document.getElementById("container_send_sheets")
  container_send_sheets.classList.add("open")
  
  const Data = document.getElementById("Data")
  const Tabela = document.getElementById("Tabela")
  const Linha = document.getElementById("Linha")
  const Carro = document.getElementById("Carro")
  const Substituto = document.getElementById("other_car")
  const Hora = document.getElementById("Hora")
  const Sentido = document.getElementById("Sentido")
  const Ocorrência = document.getElementById("Ocorrência")
  const Problema = document.getElementById("Problema")
  const Observação = document.getElementById("Observação")
  
  Data.value = CCO_SHEETS.Data
  Tabela.value = CCO_SHEETS.Tabela
  Linha.value = CCO_SHEETS.Linha
  Carro.value = CCO_SHEETS.Carro
  Substituto.value = CCO_SHEETS.Substituto
  
  Hora.value = CCO_SHEETS.Hora
  if(CCO_SHEETS.Sentido == "BC"){
    Sentido.value = "1"
  }else if(CCO_SHEETS.Sentido == "CB"){
    Sentido.value = "2"
  }else{
    Sentido.value = CCO_SHEETS.Sentido
  }
  Ocorrência.value = CCO_SHEETS.Ocorrência
  Problema.value = CCO_SHEETS.Problema
  Observação.value = CCO_SHEETS.Observação
  Operador.value = operator.value
}

const text_cco_informa = document.getElementById("text_cco_informa")
const form = document.getElementById("form_cco_informa").addEventListener("submit", function(events){events.preventDefault()})
const generate_cco = document.getElementById("generate_cco_informa").addEventListener("click", function(){
  const generated = generate_cco_informa()
  if(document.getElementById('event').value != 'adiantada'){
    text_cco_informa.value = generated
  }
  function_send_sheet()
})

const generate_other = document.getElementById("generate_other").addEventListener("click", function(){
  if(document.getElementById('event').value != 'adiantada'){
    const generated = generate_cco_informa()
    text_cco_informa.value += generated
  }
  function_send_sheet()
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