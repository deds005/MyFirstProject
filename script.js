function abrirop(){
    document.getElementById('opcoes').style.opacity = '100%'
    document.getElementById('botoes2').style.color = 'rgba(255, 255, 255, 0.815)'
    document.getElementById('botoes2').style.cursor = 'pointer'
}
function fecharop(){
    document.getElementById('opcoes').style.opacity = '0'
    document.getElementById('botoes2').style.color = 'white'

}
function liover(n){
    if(n == 1){
        document.getElementById(`li${n}`).style.color = 'rgb(0, 100, 0)'
    }
    if(n == 2){
        document.getElementById(`li${n}`).style.color = 'rgb(56, 176, 0)'
    }
    if(n == 3){
        document.getElementById(`li${n}`).style.color = 'rgb(204, 255, 51)'
    }
}
function liout(o){
    document.getElementById(`li${o}`).style.color = 'white'

}

function checar(){
    let radios = document.getElementsByName("1")
    for(let i = 0; i < 4; i++){
        if(radios[i].checked){
            document.getElementById('opl'+i).style.backgroundColor = 'rgb(112, 224, 0)'
            document.getElementById('opl'+i).style.borderRadius = '10px'
        } else{
            document.getElementById('opl'+i).style.background = 'none'
        }
    }
}
var a = 0
var respostas = []
var resultado = 0
var nome = []

class questoes{ 
    enunciado = [
        ["1) Uma espécie de planta que possui frutos verdadeiros, sementes e vascularização pertence a qual dos seguintes grupos?",
        "Briófitas",
        "Pteridófitas",
        "Gimnospermas",
        "Angiospermas"],

        ["2) Quais características a seguir NÃO conferem ao grupo das gimnospermas?", 
        "Vasculares – gameta masculino flagelado – sem frutos – possui sementes",
        "Avasculares – gameta masculino não flagelado – com sementes – atraem animais",
        "Avasculares – precisam de água para fecundação – atraem animais – possuem frutos",
        "Vasculares – não precisa de água para fecundação – estróbilo como estrutura reprodutora – não possuem frutos"],

        ["3) “Formada e renovada por células meristemáticas, protege o ápice da raiz contra microrganismos e lesões” a frase refere-se a qual parte da raiz?",
        "Zona meristemática",
        "Coifa",
        "Zona de ramificações",
        "Zona de distensão"],

        ["4) Raízes tuberosas são caracterizadas por:",
        "Armazenar matéria orgânica",
        "Emergem do caule ou das folhas",
        "Crescerem para fora do solo",
        "Fazer fotossíntese"],

        ["5) Qual o tipo de tronco caraterizado por não possuir ramificações e apresentar nós e entrenós bem nítidos?",
        "Aéreo",
        "Colmo",
        "Estipe",
        "Haste"],

        ["6) A folha é um órgão da planta feito especialmente para a:",
        "Regulação hormonal",
        "Atração de polinizadores ",
        "Fixação ",
        "Transpiração "],

        ["7) O que é o fototropismo?",
        "Crescimento devido a ação da luz ",
        "Crescimento devido a ação da gravidade",
        "Crescimento ao redor de um objeto sólido ",
        "Crescimento a partir da disponibilidade de substâncias químicas"],

        ["8) Qual das opções indicam a função correta do tecido citado:",
        "Xilema – transporte de seiva bruta",
        "Floema – conduz a seiva elaborada produzida na fotossíntese",
        "Floema – transporte de seiva bruta",
        "Xilema – conduz seiva elaborada produzida na fotossíntese "],

        ["9) A presença de auxina nas plantas pode gerar",
        "Frutos sem sementes",
        "Queda de folhas ",
        "Atração de polinizadores",
        "Morte da planta"],

        ["10) Qual hormônio é responsável pelo crescimento da planta",
        "itocinina",
        "Giberelina",
        "Etileno",
        "Auxina "]
    ]

    mostraQuestao(a){
        document.getElementById("enunciado").innerHTML = this.enunciado[a][0]
        for(let x = 1; x <= 4; x++)
        document.getElementById("opl"+(x - 1)).innerHTML = this.enunciado[a][x]
    }

    analisarResultado(){
        let gabarito=[3, 2, 1, 0, 1, 3, 0, 0, 0, 3]
        let g = 0
        let u = 0
        while(g < 10 && u < 10){
            if(respostas[u] === gabarito[g]){
                resultado++
            }
            g++
            u++
        }
    }

    mostrarResultado(){
        document.getElementById('titulo-quiz').innerHTML = "<h1>Botânica -------- Resultados</h1>"
        if(resultado <= 5){
            document.getElementById("area-questao").innerHTML = `<h1><strong><i class="fas fa-exclamation-triangle" id='alert'></i>  Estude mais, ${nome[0]}! <i class="fas fa-exclamation-triangle" id='alert'></i></strong></h1> <br><br>`+
            `<h2 id ='area-resultado'>Você acertou: ${resultado}/10 questões</h2>`+
            `<button class='final' onclick="conferirResultado()">Conferir resultados</button><button class='final'><a href="quiz.html">Voltar</a></button>`
        }
        if(resultado > 5 && resultado <= 9){
            document.getElementById('area-questao').innerHTML = `<h1><strong><i class="fas fa-exclamation-triangle" id='attention'></i>  Quase lá, ${nome[0]}! <i class="fas fa-exclamation-triangle" id='attention'></i>  </strong></h1><br><br>`+
            `<h2 id ='area-resultado'>Você acertou: ${resultado}/10 questões</h2>`+
            `<button class='final' onclick="conferirResultado()">Conferir resultados</button><button class='final'><a href="quiz.html">Voltar</a></button>`
        }
        if(resultado == 10){
            document.getElementById('area-questao').innerHTML = `<h1><strong><i class="fas fa-check-circle" id='correct'></i>  Parabéns,${nome[0]}!  <i class="fas fa-check-circle" id='correct'></i></strong></h1> <br><br>`+
            `<h2 id ='area-resultado'>Você acertou: ${resultado}/10 questões</h2>`+
            `<button class='final' onclick="conferirResultado()">Conferir resultados</button><button class='final'><a href="quiz.html">Voltar</a></button>`
        }
    }

    mostrarConferir(){
        let gabarito=[3, 2, 1, 0, 1, 3, 0, 0, 0, 3]
        let questao = document.getElementById('area-questao')
        let divquestao = document.createElement('div')
        divquestao.setAttribute('id', 'area-res')
        questao.appendChild(divquestao)
        for(let i = 0; i < 10; i++){
            let divquestoes = document.createElement('div')
            divquestoes.setAttribute('id', 'rq' + i)
            if(respostas[i] === gabarito[i]){
                divquestoes.innerHTML = `<i class="fas fa-check-circle" style="display: inline; color: green; font-size: 20px;"></i> &nbsp &nbsp`
            }else{
                divquestoes.innerHTML = `<i class="fas fa-times-circle" style="display: inline; color: red; font-size: 20px;"></i> &nbsp &nbsp`
            }
            divquestoes.innerHTML += `<h1>Questão ${i + 1}:</h1> <p style='display: inline'>${this.enunciado[i][respostas[i] + 1]}</p> &nbsp &nbsp<p style='display: inline; color: rgb(112, 224, 0)'>(${this.enunciado[i][gabarito[i] + 1]})</p> <br><br>`
            divquestao.appendChild(divquestoes)
        }
    }
}

function clicar(){
    if(document.getElementById('opl0').style.display == 'block'){
        let resposta = document.getElementsByName('1')
        for(let r = 0; r <= 3; r++){
            if(resposta[r].checked){
                respostas.push(r)
            }
        }
        
    }   
    if (document.getElementById('pro').innerText == 'Iniciar'){
        if(document.getElementById('nome').value == 0){
            alert('Por favor, digite seu nome')
        }else{
            nome.push(document.getElementById('nome').value)
            document.getElementById('nome').remove()
            document.getElementById('pro').innerText = 'Próximo'
        }
    }

    if(document.getElementById('pro').innerText == 'Próximo'){
        for(let i = 0; i < 4; i++){
            document.getElementById('opl'+i).style.display = 'block'
        }
        if(a > 9){
            document.getElementById('fin').style.display ='inline-block'
            document.getElementById('pro').style.display = 'none'    
        }else{
            teste = new questoes
            teste.mostraQuestao(a)
            a++
        }
    }

}
function finalizar(){
    document.getElementById("area-questao").innerText = ""
    document.getElementById("botoes-quiz").innerText = ""
    teste.analisarResultado()
    teste.mostrarResultado()
}
function conferirResultado(){
    document.getElementById('area-questao').innerText = ''
    let res = new questoes
    res.mostrarConferir()
}
let conta = [
    ['admin','admin']
]
function entrar(){
    if(conta[0][0] === conta[0][1]){
        let pagina = document.getElementById('login')
        pagina.innerText = ''

    }

}
function aumentarimagem(n){
    let imagem = document.getElementById('imagem' + n)
    let header = document.getElementById('cab')
    let body = document.getElementById('material1')
    if(imagem.style.transform == ''){
        if(n == 0){
            imagem.style.position = 'fixed'
            imagem.style.width = '13cm'
            imagem.style.zIndex = '99999'
            imagem.style.transform = 'scale(1.5) translate(-45%, 22%)'
            imagem.style.transition = 'all 0.5s ease'
        }
        if(n == 1){
            imagem.style.position = 'fixed'
            imagem.style.width = '12cm'
            imagem.style.zIndex = '99999'
            imagem.style.transform = 'scale(1.5) translate(-110%, -40%)'
            imagem.style.transition = 'all 0.5s ease'
        }
        if(n == 2){
            imagem.style.position = 'fixed'
            imagem.style.width = '13cm'
            imagem.style.zIndex = '99999'
            imagem.style.transform = 'scale(1.5) translate(-102%, 17%)'
            imagem.style.transition = 'all 0.3s ease'
        }
    } else{
        imagem.style.position = 'relative'
        imagem.style.width = '75%'
        imagem.style.transform = ''
        imagem.style.zIndex = '9'
        imagem.style.transition = 'all 0.3s ease'
    }
}

