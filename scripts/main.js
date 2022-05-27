
const ClickSim = document.querySelector("#Calcular")

const Simulator = document.querySelector("#simular")

const TextResult = document.querySelector("#TextResult")

var TextResultStyle = document.getElementsByClassName(".resultTextStyle")

ClickSim.onclick = butCalc


function transformarEmJson(response) {
  return response.json()
}
async function butCalc(){

  const currency = function(number){ return new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL', minimumFractionDigits: 2}).format(number) }
  var nome = document.forms['simulator']['nome'].value

  var mensalidade = document.forms['simulator']['valorDaMensalidade'].value

  var juros = document.forms['simulator']['taxaDeJuros'].value

  var contribuicao = document.forms['simulator']['tempoDeMensalidade'].value

  json = {
    expr : [ 
      `${mensalidade} * (((1 + 0.${juros}) ^ ${contribuicao}- 1) / 0.${juros})`
    ],}
  StrJson = JSON.stringify(json)
  const response = await fetch("https://api.mathjs.org/v4/", {
    method:'POST',
    body: StrJson,
    contentType: 'application/json',
  })
      .then(transformarEmJson)
      
      const resultEnd = response.result
      
  let nomeOutput = document.querySelector("#nomeOutput")

  let dinheiroOutput = document.querySelector("#dinheiro")

  let resultadoOutput = document.querySelector("#resultadoCont")

  let tempoOutput = document.querySelector("#tempoOutput")

  
  var Mes = contribuicao - 12
          nomeOutput.innerText = `${nome}`

          dinheiroOutput.innerText = `R$${mensalidade}`
          
          resultadoOutput.innerText = `R$${mensalidade}`

    
        dinheiroOutput.innerText = `R$${mensalidade}`
        
        resultadoOutput.innerText = `${currency(resultEnd)}`
    
    
        tempoOutput.innerText = ``
        
        if(contribuicao > 1){
          tempoOutput.innerText = `${contribuicao} Meses`
        }else{
          tempoOutput.innerText = `${contribuicao} Mes`
        }
        if(contribuicao == 12){
          tempoOutput.innerText = `1 Ano`
        }
        if(Mes > 1){
          tempoOutput.innerText = `1 Ano e ${Mes} Meses`
        }else if (Mes == 1){
          tempoOutput.innerText = `1 Ano e 1 mês`
        }
        if(contribuicao == 24){
          tempoOutput.innerText = `2 Anos`
        }
        console.log(currency(resultEnd))
  }