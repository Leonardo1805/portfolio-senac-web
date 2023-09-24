//pegar os valores do formulário
let nome = document.querySelector("#nome")

const campoJS = document.querySelector("#js")
const campoPrazo = document.querySelector("#prazo")
const resultado = document.querySelector("output")

campoJS.addEventListener("change", bemvindo)

campoPrazo.addEventListener("input", function(){
    const labelPrazo = document.querySelector("label[for='prazo']")
    labelPrazo.innerHTML =`Probabilidade:  ${campoPrazo.value}  %`
    calcular()
})

function bemvindo(){
    if(campoJS.checked) resultado.innerText =`Bem vindo! Volte Sempre.`
    else resultado.innerText = ``
}