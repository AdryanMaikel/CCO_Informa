const exit = () => {document.getElementById("container_send_sheets").classList.remove("open")}

const submit_form_send_sheets = (events) => {
  events.preventDefault()

  const Data = document.getElementById("Data").value
  const Tabela = document.getElementById("Tabela").value
  const Linha = document.getElementById("Linha").value
  const Carro = document.getElementById("Carro").value
  const Substituto = document.getElementById("other_car").value
  const Hora = document.getElementById("Hora").value
  const Sentido = document.getElementById("Sentido").value
  const Ocorrência = document.getElementById("Ocorrência").value
  const Problema = document.getElementById("Problema").value
  const Observação = document.getElementById("Observação").value
  const Operador = document.getElementById("Operador").value

  const DATA = {
    Data,
    Tabela,
    Linha,
    Carro,
    "Carro Substituto": Substituto,
    Hora,
    Sentido,
    Ocorrência,
    Problema,
    Observação,
    Operador,
  }
  
  fetch("https://api.sheetmonkey.io/form/86GJCNpeUFhhfFHBZKyE4n",{
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(DATA)
  }).then(()=>{
    // if(confirm("Enviado com Sucesso! Deseja abrir a planilha?")){window.open("https://docs.google.com/spreadsheets/d/1voKCp0MJOelI0-qv9s_m3VF5GUvkS4lbKyArA6NbmTs/edit#gid=1247343348")}
    exit()
  })
}
const form_send_sheets = document.getElementById("form_send_sheets").addEventListener("submit", submit_form_send_sheets)
const close = document.getElementById("close").addEventListener("click", exit)