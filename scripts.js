function aparecer_fiscal(value) {
  div_fiscal = document.querySelector(".fiscal")
  if(value == "fiscal") {
    div_fiscal.style.display = "block"
  } else {
    div_fiscal.style.display = "none"
  }
}

function estado_da_viagem(value) {
  div_onde = document.querySelector(".onde")
  div_min = document.querySelector(".min")
  div_continuou = document.querySelector(".continuou")

  switch (value) {
    case "interrompida":
      div_onde.style.display = "block"
      div_min.style.display = "none"
      div_continuou.style.display = "block"
    break;
    case "realizadaafrente":
      div_onde.style.display = "block"
      div_min.style.display = "none"
      div_continuou.style.display = "none"
    break;
    case "perdida":
      div_onde.style.display = "none"
      div_min.style.display = "none"
      div_continuou.style.display = "none"
    break;
    case "atrasada":
      div_onde.style.display = "none"
      div_min.style.display = "block"
      div_continuou.style.display = "none"
    break;
  }
}

function selecionar_motivo(value) {
  div_problema = document.querySelector(".problema")
  div_tripulação = document.querySelector(".tripulação")
  div_local_congestionamento = document.querySelector(".localcongestionamento")
  switch (value) {
    default:
      div_problema.style.display = "none"
      div_tripulação.style.display = "none"
      div_local_congestionamento.style.display = "none"
    break;
    case "Acidente":
      div_problema.style.display = "none"
      div_tripulação.style.display = "none"
      div_local_congestionamento.style.display = "none"
    break;
    case "Assalto":
      div_problema.style.display = "none"
      div_tripulação.style.display = "none"
      div_local_congestionamento.style.display = "none"
    break;
    case "Atrasado":
      div_problema.style.display = "none"
      div_tripulação.style.display = "none"
      div_local_congestionamento.style.display = "none"
    break;
    case "Avaria":
      div_problema.style.display = "none"
      div_tripulação.style.display = "none"
      div_local_congestionamento.style.display = "none"
    break;
    case "Congestionamento":
      div_problema.style.display = "none"
      div_tripulação.style.display = "none"
      div_local_congestionamento.style.display = "block"
    break;
    case "Falta de Carro":
      div_problema.style.display = "none"
      div_tripulação.style.display = "none"
      div_local_congestionamento.style.display = "none"
    break;
    case "Falta de Tripulação":
      div_problema.style.display = "none"
      div_tripulação.style.display = "block"
      div_local_congestionamento.style.display = "none"
    break;
    case "Pneu Furado":
      div_problema.style.display = "none"
      div_tripulação.style.display = "none"
      div_local_congestionamento.style.display = "none"
    break;
    case "Problema com passageiro":
      div_problema.style.display = "none"
      div_tripulação.style.display = "none"
      div_local_congestionamento.style.display = "none"
    break;
    case "Problemas mecânicos":
      div_problema.style.display = "block"
      div_tripulação.style.display = "none"
      div_local_congestionamento.style.display = "none"
    break;
    case "Roleta":
      div_problema.style.display = "none"
      div_tripulação.style.display = "none"
      div_local_congestionamento.style.display = "none"
    break;
    case "Tempo insuficiente":
      div_problema.style.display = "none"
      div_tripulação.style.display = "none"
      div_local_congestionamento.style.display = "none"
    break;
    case "Validador":
      div_problema.style.display = "none"
      div_tripulação.style.display = "none"
      div_local_congestionamento.style.display = "none"
    break;
    case "Vandalismo":
      div_problema.style.display = "none"
      div_tripulação.style.display = "none"
      div_local_congestionamento.style.display = "none"
    break;
    case "Vistoria EPTC":
      div_problema.style.display = "none"
      div_tripulação.style.display = "none"
      div_local_congestionamento.style.display = "none"
    break;
  }
}

function novo_carro() { 
  div_carro_2 = document.querySelector(".trocado")
  document.getElementById("trocado").checked ? div_carro_2.style.display = "block" : div_carro_2.style.display = "none"
}
function continou_puxando_viagem() { 
  apartir = document.querySelector(".apartir")
  document.getElementById("continuou").checked ? apartir.style.display = "block" : apartir.style.display = "none"
}

function gerar_cco_informa(){
  cco_informa = "*CCO INFORMA:*\n"
  informado = document.getElementById("informado")
  if(informado.checked == true){
    cco_informa += "Conforme informado ao CCO pelo "
  }else if(informado.checked == false){
    cco_informa += "Conforme contato feito pelo CCO ao "
  }
  quem_informou = document.getElementById("quem").value
  switch (quem_informou) {
    case "1":
      cco_informa += "largador da Sopal\n"
      break;
    case "3":
      cco_informa += "largador da Nortran\n"
    break;
    case "4":
      cco_informa += "largador da Navegantes\n"
    break;
    default:
      fiscal = document.getElementById("fiscal").value
      cco_informa += "fiscal "+fiscal+"\n"
    break;
  }
  tabela = document.getElementById("tabela").value
  carro = document.getElementById("carro").value
  cco_informa += "- "+tabela+", carro "+carro+"\n"

  linha = document.getElementById("linha").value
  hora = document.getElementById("hora").value
  sentido = document.getElementById("sentido").value
  cco_informa += "- "+linha+" das "+hora+", "+sentido+"\n"
  
  cco_informa += "- Viagem "
  interrompida = document.getElementById("interrompida").value
  local = document.getElementById("onde").value
  switch (interrompida) {
    case "interrompida":
      cco_informa += "interrompida na "+local+"\n"
    break;
    case "realizadaafrente":
      cco_informa += "realizada a partir da "+local+"\n"
    break;
    case "perdida":
      cco_informa += "não realizada\n"
    break;
    case "atrasada":
      atraso = document.getElementById("min").value
      cco_informa += "realizada com "+atraso+" minutos de atraso\n"
    break;
  }
  cco_informa += "- Motivo: devido "
  motivo = document.getElementById("motivo").value
  switch (motivo) {
    case "Acidente":
      cco_informa += "ao carro ter se envolvido em um acidente"
    break;
    case "Assalto":
      cco_informa += "ao carro ter sido assaltado"
    break;
    case "Atrasado":
      cco_informa += "ao atraso"
    break;
    case "Avaria":
      cco_informa += "ao carro ter sofrido avaria"
    break;
    case "Congestionamento":
      local_congestionamento = document.querySelector("#localcongestionamento").value
      cco_informa += "ao congestionamento na "+local_congestionamento
    break;
    case "Falta de Carro":
      cco_informa += "a falta de carro"
    break;
    case "Falta de Tripulação":
      tripulação = document.getElementById("tripulação").value
      cco_informa += "a falta do "+tripulação
    break;
    case "Pneu Furado":
      cco_informa += "ao pneu do carro "+carro+" ter furado"
    break;
    case "Problema com passageiro":
      cco_informa += "a problema com passageiro"
    break;
    case "Roleta":
      cco_informa += `a problemas na roleta do carro ${carro}`
    break;
    case "Tempo insuficiente":
      cco_informa += "a tempo insuficiente"
    break;
    case "Validador":
      cco_informa += `a problemas no validador do carro ${carro}`
    break;
    case "Vandalismo":
      cco_informa += "ao carro "+carro+" ter sofrido vandalismo"
    break;
    case "Vistoria EPTC":
      cco_informa += "ao carro "+carro+" ter sido recolhido pela EPTC"
    break;
    case "Problemas mecânicos":
      problema = document.getElementById("Problema").value
      switch (problema) {
        case "Carroceria - Ar Condicionado":
          cco_informa += "a problemas no ar-condicionado do carro "+carro
        break;
        case "Carroceria - Elevador APD":
          cco_informa += "a problemas no elevador APD do carro "+carro
        break;
        case "Carroceria - Itens de segurança":
          cco_informa += ""
        break;
        case "Carroceria - Limpador / Espelho":
          cco_informa += ""
        break;
        case "Carroceria - Outros":
          cco_informa += ""
        break;
        case "Carroceria - Portas":
          cco_informa += "a problemas nas portas do carro "+carro
        break;
        case "Elétrica - Alternador":
          cco_informa += "a problemas no alternador do carro "+carro
        break;
        case "Elétrica - Iluminação interna":
          cco_informa += "a problemas de iluminação interna no carro "+carro
        break;
        case "Elétrica - Letreiro":
          cco_informa += "a problemas no letreiro do carro "+carro
        break;
        case "Elétrica - Pane elétrica":
          cco_informa += "a pane elétrica do carro "+carro
        break;
        case "Elétrica - Sem arranque":
          cco_informa += "ao carro "+carro+" não pegar"
        break;
        case "Motor - Aquecimento Motor":
          cco_informa += "ao carro "+carro+" ter super aquecido"
        break;
        case "Motor - Correias":
          cco_informa += "a problemas nas correias do motor do carro "+carro
        break;
        case "Motor - Sem Força":
          cco_informa += "ao carro "+carro+" estar sem força"
        break;
        case "Motor - Vazamento de água":
          cco_informa += "ao carro "+carro+" estar com vazamento de água"
        break;
        case "Motor - Vazamento de óleo Diesel":
          cco_informa += "ao carro "+carro+" estar com vazamento de diesel"
        break;
        case "Motor - Vazamento de óleo motor":
          cco_informa += "ao carro "+carro+" estar com vazamento de óleo do motor"
        break;
        case "Quebra na viagem anterior":
          cco_informa += ""
        break;
        case "Suspenção - Freio":
          cco_informa += "a problemas nos freios do carro "+carro
        break;
        case "Suspensão - Carro atravessado":
          cco_informa += "ao carro "+carro+" estar atravessado"
        break;
        case "Suspensão - Embreagem / Caixa":
          cco_informa += "a problemas na embreagem do carro "+carro
        break;
        case "Suspensão - Mola / Amortecedor":
          cco_informa += "a problemas na suspenção do carro "+carro
        break;
        case "Suspensão - Roda":
          cco_informa += "a problemas nas rodas do carro "+carro
        break;
        case "Suspensão - Vazamento de ar":
          cco_informa += "a vazamento de ar no carro "+carro
        break;
      }
    break;
  }
  trocado = document.getElementById("trocado")
  if(trocado.checked) {
    new_carro = document.getElementById("carrosubstituto").value
    cco_informa += ", trocado pelo carro "+new_carro
  }

  if(document.getElementById("continuou").checked){
    cco_informa += ", que continuou puxando viagem a partir da "
    apartir = document.getElementById("apartir").value
    if(apartir != ""){
      cco_informa += apartir
    } else {
      cco_informa += local
    }
    cco_informa += " em diante"
  }
  
  // console.log(cco_informa)
  div_result = document.getElementById("result")
  div_result.innerText = cco_informa
}