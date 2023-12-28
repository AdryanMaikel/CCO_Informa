CCO_SHEETS = {Data:'',	Tabela:'',	Linha:'',	Carro:'',	Substituto:'',	Hora:'',	Sentido:'',	Ocorrência:'',	Problema:'',	Observação:'',	Operador:''}

function get_day() {
  const date = new Date()
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const year = date.getFullYear()
  return `${day}/${month}/${year}`
}

CCO_SHEETS.Data = get_day()

let problema_viagem_anterior = ''

const informed = document.getElementById('informed')
const input_supervision = document.getElementById('supervision')

function get_who_informed() {
  const was_informed = informed.classList.contains('active')
    ? 'Conforme informado ao CCO pelo'
    : 'Conforme contato feito pelo CCO ao'
  
  const supervision = input_supervision.value
  const informed_by = ['Navegantes', 'Nortran', 'Sopal',].includes(supervision)
    ? `largador da ${supervision}`
    : `fiscal ${supervision}`
  return `${was_informed} ${informed_by}\n`
}

const input_event = document.getElementById('event')
const min = document.getElementById('min')
const local = document.getElementById('local')

function process_event() {
  let event = 'Viagem '
  let ocorrencia = ''
  switch (input_event.value) {
    case 'adiantada':
      event += `realizada com ${min.value} minutos antes do horário previsto,`
      ocorrencia = 'Problemas mecânicos'
      break
    case 'atrasada':
      event += `realizada com ${min.value} minutos de atraso`
      ocorrencia = 'Problemas mecânicos - Atrasado'
      break
    case 'perdida':
      event += 'não realizada'
      ocorrencia = 'Problemas mecânicos - Viagem perdida'
      break
    case 'realizada a frente':
      event += `realizada a partir d${local.value}`
      ocorrencia = 'Problemas mecânicos - Viagem realizada a frente'
      break
    case 'interrompida':
      event += `interrompida n${local.value}`
      ocorrencia = 'Problemas mecânicos - Viagem interrompida'
      break
  }
  return [ ocorrencia, event ]
}

const input_car = document.getElementById('input_car')
const input_table = document.getElementById('table')
const input_line = document.getElementById('line')
const input_hour = document.getElementById('hour')
const input_direction = document.getElementById('direction')
const input_motive = document.getElementById('motive')
const input_problem = document.getElementById('problem')
const congestion_locale = document.getElementById('congestion_locale')
const roullet = document.getElementById('roullet')
const embreagem = document.getElementById('Embreagem')
const car_two = document.getElementById('car_two')
const replace = document.getElementById('replace')
const input_continued = document.getElementById('input_continued')
const dropping_passengers = document.getElementById('dropping_passengers')
const event = document.getElementById('event')

function generate_cco_informa(){
  const who_informed = get_who_informed()
  let cco_informa = `*CCO INFORMA*\n${who_informed}`

  const car = input_car.value
  const table = input_table.value
  const line = input_line.value
  const hour = input_hour.value
  const direction = input_direction.value
  const motive = input_motive.value
  const problem = input_problem.value

  CCO_SHEETS.Tabela = table
  CCO_SHEETS.Linha = line
  CCO_SHEETS.Carro = car
  CCO_SHEETS.Hora = hour
  CCO_SHEETS.Sentido = direction

  cco_informa += `- ${table}, carro ${car}\n`
  cco_informa += `- ${line} das ${hour}, ${direction}\n`

  let [ocorrencia_cco_sheet, result_event]  = process_event()

  CCO_SHEETS.Problema = problem
  cco_informa +='- '+result_event+'\n- Motivo: '

  let result_motive = ''
  switch (motive) {
    case 'Acidente':
      result_motive += `Carro ${car} ter se envolvido em um acidente`
      break
    case 'Adiantado com autorização':
      result_event += ` autorizado pelo ${input_supervision.value}.`
      break
    case 'Adiantado sem autorização':
      result_event += ` sem autorização da fiscalização.`
    break
    case 'Assalto':
      result_motive += `Carro ${car} ter sido assaltado`
    break
    case 'Atrasado':
      result_motive += 'Atraso'
    break
    case 'Avaria':
      result_motive += `Carro ${car} ter sofrido avaria`
    break
    case 'Congestionamento':
      if(congestion_locale.value.length > 0){
        result_motive += `Congestionamento n${congestion_locale.value}`
      }else{
        congestion_locale.focus()
      }
    break
    case 'Falta de Carro':
      result_motive += 'Falta de carro'
    break
    case 'Falta de Tripulação':
      result_motive += 'Falta de '
      if(motorista.checked){
        result_motive += 'motorista'
      }else{
        result_motive += 'cobrador'
      }
    break
    case 'Pneu Furado':
      result_motive += 'Pneu furado do carro '+car
    break
    case 'Problema com passageiro':
      result_motive += 'problema com passageiro'
    break
    case 'Tempo insuficiente':
      result_motive += 'tempo insuficiente para realizar viagem'
    break
    case 'Validador/ Roleta':
      result_motive += 'Problemas ' 
      if(roullet.checked)
        result_motive += 'na roleta '
      else
        result_motive += 'no validador '
      result_motive += `do carro ${car}`
    break
    case 'Vandalismo':
      result_motive += `Carro ${car} ter sofrido vandalismo`
    break
    case 'Vistoria EPTC':
      result_motive += 'Vistoria da EPTC'
      break
    case 'Problemas mecânicos':
      switch (problem) {
        case 'Carroceria - Ar Condicionado':
          result_motive += `Problemas no ar-condicionado do carro ${car}`
        break
        case 'Carroceria - Elevador APD':
          result_motive += `Problemas no elevador APD do carro ${car}`
        break;
        case 'Carroceria - Itens de segurança':
          result_motive += ''
        break;
        case 'Carroceria - Limpador / Espelho':
          if(document.getElementById('Limpador').checked)
            result_motive += 'Problemas no limpador' 
          else
            result_motive += 'Queda do espelho'
          result_motive += ` do carro ${car}`
        break;
        case 'Carroceria - Outros':
          result_motive += ''
        break;
        case 'Carroceria - Portas':
          result_motive += `Problemas nas portas do carro ${car}`
        break;
        case 'Elétrica - Alternador':
          result_motive += `Problemas no alternador do carro ${car}`
        break;
        case 'Elétrica - Iluminação interna':
          result_motive += `Problemas de iluminação interna no carro ${car}`
        break;
        case 'Elétrica - Letreiro':
          result_motive += `Problemas no letreiro do carro ${car}`
        break;
        case 'Elétrica - Pane elétrica':
          result_motive += `Pane elétrica do carro ${car}`
        break;
        case 'Elétrica - Sem arranque':
          result_motive += `Carro ${car} não pegar`
        break;
        case 'Motor - Cigarra/Aquecimento':
          result_motive += `Carro ${car} ter super aquecido`
        break;
        case 'Motor - Cigarra/óleo motor':
          result_motive += `Carro ${car} ter super aquecido`
        break;
        case 'Motor - Correias':
          result_motive += `Problemas nas correias do motor do carro ${car}`
        break;
        case 'Motor - Sem Força':
        result_motive += `Carro ${car} estar sem força`
        break;
        case 'Motor - Vazamento de água':
          result_motive += `Vazamento de água no carro ${car}`
        break;
        case 'Motor - Vazamento de óleo Diesel':
          result_motive += `Vazamento de diesel no carro ${car}`
        break;
        case 'Motor - Vazamento de óleo motor':
          result_motive += `Vazamento de óleo do motor no carro ${car}`
        break;
        case 'Problemas na viagem anterior':
          result_motive = problema_viagem_anterior
        break;
        case 'Suspensão - Arriada':
          result_motive += `Problemas na suspensão do carro ${car}`
        break;
        case 'Suspensão - Carro atravessado':
        result_motive += `Carro ${car} estar atravessado`
        break;
        case 'Suspensão - Embreagem / Caixa':
          result_motive += 'Problemas na '
          if(embreagem.checked)
            result_motive += 'embreagem'
          else
            result_motive += 'caixa das marchas'
          result_motive += ` do carro ${car}`
        break;
        case 'Suspensão - Freio':
          result_motive += `Problemas nos freios do carro ${car}`
        break;
        case 'Suspensão - Roda':
          result_motive += `Problemas nas rodas do carro ${car}`
        break;
        case 'Suspensão - Vazamento de ar':
          result_motive += `Vazamento de ar no carro ${car}`
        break;
        default:
          
        break;
      }
    break;
  }
  if (problema_viagem_anterior != result_motive)
    problema_viagem_anterior = `${result_motive} na viagem anterior`

  cco_informa += result_motive

  if (motive != 'Problemas mecânicos') {
    CCO_SHEETS.Ocorrência = motive
    CCO_SHEETS.Problema = ''
  } else {
    CCO_SHEETS.Ocorrência = ocorrencia_cco_sheet
  }

  let replace_car = ''
  if (replace.classList.contains('active')) {
    replace_car = `, trocado pelo carro ${car_two.value}`
    cco_informa += replace_car
    CCO_SHEETS.Substituto = car_two.value
  }else{
    CCO_SHEETS.Substituto = ''
  }

  let continued_journey_text = ''
  if (continued.classList.contains('active')) {
    if (input_continued.value.length > 0) {
      if (car_two.disabled == false)
        continued_journey_text = ' que '
      else
        continued_journey_text = ' e '
      
      continued_journey_text += `continuou puxando viagem a partir d${input_continued.value}`
      if (dropping_passengers.classList.contains('active')) 
        continued_journey_text += ` somente largando os passageiros`
      
      cco_informa += continued_journey_text
    } else {
      input_continued.focus()
    }
  }
  if (result_motive != '' ) 
    result_motive = result_motive[0].toLowerCase() + result_motive.slice(1) 
  else 
    result_motive = ''
  
  if (event.value == 'adiantada')
    CCO_SHEETS.Observação = `${result_event}`
  else
    CCO_SHEETS.Observação = `${result_event}, devido a ${result_motive}${replace_car}${continued_journey_text}.`
  
  cco_informa += '\n\n'
  return cco_informa
}

const Data = document.getElementById('Data')
const Tabela = document.getElementById('Tabela')
const Linha = document.getElementById('Linha')
const Carro = document.getElementById('Carro')
const Substituto = document.getElementById('other_car')
const Hora = document.getElementById('Hora')
const Sentido = document.getElementById('Sentido')
const Ocorrência = document.getElementById('Ocorrência')
const Problema = document.getElementById('Problema')
const Observação = document.getElementById('Observação')

const function_send_sheet = function () {
  const container_send_sheets = document.getElementById('container_send_sheets')
  container_send_sheets.classList.add('open')
  
  Data.value = CCO_SHEETS.Data
  Tabela.value = CCO_SHEETS.Tabela
  Linha.value = CCO_SHEETS.Linha
  Carro.value = CCO_SHEETS.Carro
  Substituto.value = CCO_SHEETS.Substituto
  
  Hora.value = CCO_SHEETS.Hora

  if (CCO_SHEETS.Sentido == 'BC') 
    Sentido.value = '1'
  else if(CCO_SHEETS.Sentido == 'CB')
    Sentido.value = '2'
  else
    Sentido.value = CCO_SHEETS.Sentido
  
  Ocorrência.value = CCO_SHEETS.Ocorrência
  Problema.value = CCO_SHEETS.Problema
  Observação.value = CCO_SHEETS.Observação
  Operador.value = operator.value
}

const text_cco_informa = document.getElementById('text_cco_informa')
const form = document.getElementById('form_cco_informa').addEventListener('submit', function(events){events.preventDefault()})
const generate_cco = document.getElementById('generate_cco_informa').addEventListener('click', function(){
  const generated = generate_cco_informa()
  if(document.getElementById('event').value != 'adiantada'){
    text_cco_informa.value = generated
  }
  function_send_sheet()
})

const generate_other = document.getElementById('generate_other').addEventListener('click', function(){
  if(document.getElementById('event').value != 'adiantada'){
    const generated = generate_cco_informa()
    text_cco_informa.value += generated
  }
  function_send_sheet()
})
const copy = document.getElementById('copy').addEventListener('click', function(){
  text_cco_informa.select()
  try {
    document.execCommand('copy')
  } catch (error) {
    console.error('Erro ao copiar o texto: ', error)
  }
})


/*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-MOLDE-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*\
| *CCO INFORMA:*                                                            |
| Conforme informado ao CCO pelo largador da Nortran                        |
| - 659/011, carro 6427                                                     |
| - 659 das 15:00, BC                                                       |
| - Viagem interrompida na Av. Cascais                                      |
| - Motivo: devido a problemas no limpador do para-brisa do carro 6427,     |
| trocado pelo carro 6487, que continuou puxando viagem a partir da         |
| Av. Cascais em diante                                                     |
\*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*/
