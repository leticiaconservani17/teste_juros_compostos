

const Click = document.querySelector("#Calcular")
const ClickAgain = document.querySelector("#CalcularNovamente")
FormSub = document.querySelector("#simular")


FormSub.onsubmit = function(e){
    let ErrorForm = false
    e.preventDefault()

    let nome = document.forms['simulator']['nome']
    let mensalidade = document.forms['simulator']['valorDaMensalidade']
    let juros = document.forms['simulator']['taxaDeJuros']
    var contribuicao = document.forms['simulator']['tempoDeMensalidade']
    if(!nome.value){
        ErrorForm = true
        nome.classList.add('InputError')
        let span = nome.nextSibling.nextSibling
        span.innerText = "Digite seu nome corretamente"
    }else{
        nome.classList.remove('InputError')
        let span = nome.nextSibling.nextSibling
        span.innerText = ""
    }
    if(!mensalidade.value){
        ErrorForm = true
        mensalidade.classList.add('InputError')
        let span = mensalidade.nextSibling.nextSibling
        span.innerText = "Digite o valor corretamente"
    }else{
        mensalidade.classList.remove('InputError')
        let span = mensalidade.nextSibling.nextSibling
        span.innerText = ""
    }
    if(!juros.value){
        ErrorForm = true
        juros.classList.add('InputError')
        let span = juros.nextSibling.nextSibling
        span.innerText = "Digite o valor corretamente"
    }else{
        juros.classList.remove('InputError')
        let span = juros.nextSibling.nextSibling
        span.innerText = ""
    }
    if(contribuicao.value == 0){
        ErrorForm = true
        contribuicao.classList.add('InputError')
        let span = contribuicao.nextSibling.nextSibling
        span.innerText = "Selecione um periodo"
    }else{
        contribuicao.classList.remove('InputError')
        let span = contribuicao.nextSibling.nextSibling
        span.innerText = ""
    }
    if (ErrorForm === false){
    
    Click.addEventListener("click", function(){
        var TextResultStyleEffext = document.querySelector("#resultTextStyle")
        var form = document.querySelector("#simular")
        if(TextResultStyleEffext.style.display = "none"){
            TextResultStyleEffext.style.display = "block"
            form.style.display = "none"
        }
        if(form.style.display = "none"){
            ClickAgain.style.display = "block"
            Click.style.display= "none"
        }
    ClickAgain.addEventListener("click", function(){
        var TextResultStyleEffext = document.querySelector("#resultTextStyle")
        var form = document.querySelector("#simular")
        
        if(form.style.display = "none"){
            TextResultStyleEffext.style.display = "none"
            form.style.display = "block"
            ClickAgain.style.display = "none"
            Click.style.display = "block"
        }
    })
    
    })
    }
}