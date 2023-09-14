const gerar_cco_informa = document.getElementById("gerar_cco_informa")
gerar_cco_informa.addEventListener("click", function(){
  
  cco_informa = "*CCO INFORMA*\n"

  const box_informed = document.getElementById("box_was_informed")
  if(box_informed.classList.contains("active")){
    cco_informa += "Conforme informado ao CCO pelo "
  }else{
    cco_informa += "Conforme contato feito pelo CCO ao "
  }
  
  if(who_informed.innerText == "Quem?"){
    return select_informed.classList.add("active")
  }else{
    if(who_informed.innerText == "Fiscal"){
      cco_informa += "fiscal "
      if(fiscal.value.length > 0){
        cco_informa += fiscal.value[0].toUpperCase()+fiscal.value.substring(1)
      }
    }else{
      cco_informa += "largador da "+who_informed.innerText
    }
  }
  cco_informa += "\n"
  
  cco_informa += `- ${table.value}, carro ${car.value}\n`
  cco_informa += `- ${line.value} das ${time.value}, ${direction.innerText}`
  
  const text_cco_informa = document.getElementById("text_cco_informa")
  text_cco_informa.innerText = cco_informa
  
  const div_cco_informa = document.getElementById("div_cco_informa")
  div_cco_informa.classList.add("active")
})
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