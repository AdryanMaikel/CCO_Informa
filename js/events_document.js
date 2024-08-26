const TITLE = document.title

alter_title = (event) => {
  document.title = event === 'blur' ? 'Não me abandone! 😭' : TITLE
}

window.addEventListener('blur', () => alter_title('blur'))
window.addEventListener('focus', () => alter_title('focus'))

const container_send_sheets = document.getElementById("container_send_sheets")
const submit_form_send_sheets = async (events) => {
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

  // const DATA = {
  //   Data,
  //   Tabela,
  //   Linha,
  //   Carro,
  //   "Carro Substituto": Substituto,
  //   Hora,
  //   Sentido,
  //   Ocorrência,
  //   Problema,
  //   Observação,
  //   Operador,
  // }
  const DATA = {
    A: Data,
    B: Tabela,
    C: Linha,
    D: Carro,
    E: Substituto,
    F: Hora,
    G: Sentido,
    H: Ocorrência,
    I: Problema,
    J: Observação,
    K: Operador
  }
  const response = await fetch(
    "https://ccoinforma.pythonanywhere.com/table/ccoinforma/BILABILABILA",
    {
      method: "get"
    } 
  )
  if(response.status == 200){
    const text = await response.text();
    const cco = document.querySelector("#cco-informa-v2");
    cco.innerHTML = text;
    DATA.row = cco.querySelector(".last-row").getAttribute("row");
    console.log(DATA);
  }
  return
  fetch("https://ccoinforma.pythonanywhere.com/table/ccoinforma/BILABILABILA",{
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(DATA)
  }).then(() => {
    container_send_sheets.classList.remove("open")
    container_send_sheets.classList.add("enviado")

    setTimeout(() => {
      container_send_sheets.classList.remove("enviado");
    }, 3000)
  })
}
document.getElementById("form_send_sheets").addEventListener("submit", submit_form_send_sheets)

document.getElementById("close").addEventListener("click", () => {
  container_send_sheets.classList.remove("open")
  container_send_sheets.classList.remove("enviado")
})
document.getElementById('like').addEventListener('click', ()=> {
  container_send_sheets.classList.remove("enviado")
})