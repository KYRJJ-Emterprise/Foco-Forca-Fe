const Sequelize = require('sequelize')
const sequelize = new Sequelize('cadastro', 'Jp', 'galo1313', {
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate().then(function(){
    console.log('conectado com sucesso!')
}).catch(function(erro){
    console.log('falha ao se conectar: '+erro)
})




function gerar() {
    let atividade
    let min = 1
    let max = 13
    let dif = max - min
    let aleatorio = Math.random()
    let num = min + Math.trunc(dif * aleatorio)
    switch(num){
    case num = 1:
        window.alert('Oi, eu sou um alerta... aperta o botão de novo aí :), vai que aparece outra coisa')
    break
    case num = 2:
        let n1 = Number(prompt(`Esse alerta fará a soma de dois números\nDigite o primeiro número!`))
        let n2 = Number(prompt(`Digite o segundo número!`))
        var n3 = n1 + n2
        window.alert(`${n1} mais ${n2} é ${n3}`)
    break
    case num = 3:
        let nmed1 = Number (window.prompt(`Esse alerta tirará a média de dois números\nDigite o primeiro número!`))
        let nmed2 = Number(window.prompt(`Qual o segundo número?`))
        med = (nmed1 + nmed2)/2
        window.alert(`A média final será de ${med}!`)
    break
    case num = 4:
        let numero1 = Number(window.prompt('Digite um número, eu te falarei o dobro e a metade desse número!'))
        let numero2 = numero1*2
        let numero3 = numero1/2
        window.alert(`O dobro de ${numero1} é ${numero2} e a metade é ${numero3}!`)
    break
    case num = 5:
        let nome = window.prompt('Qual é o seu nome? ')
        window.alert(`Olá, ${nome}! É um prazer te conhecer! ;)`)
    break
    case num = 6:
        let numdasconta = Number (window.prompt('Digite um número: '))
        let absoluto = Math.abs(numdasconta)
        let parteinteira = Math.trunc(numdasconta)
        let inteirooprox = Math.round(numdasconta)
        let raizquad = Math.sqrt(numdasconta)
        let raizcubo = Math.cbrt(numdasconta)
        let elevadois = Math.pow(numdasconta, 2)
        let elevatres = Math.pow(numdasconta, 3)
        window.alert(`O seu valor absoluto é ${absoluto}`)
        window.alert(`A sua parte inteira é ${parteinteira}`)
        window.alert(`O valor inteiro mais próximo é ${inteirooprox}`)
        window.alert(`A sua raiz quadrada é ${raizquad}`)
        window.alert(`A sua raiz cúbica é ${raizcubo}`)
        window.alert(`O valor de ${numdasconta} elevado à dois é ${elevadois}`)
        window.alert(`O valor de ${numdasconta} elevado à três é ${elevatres}`)
    break
    case num = 7:
        let mês = prompt('Digite o mês em extenso (Ex: "Setembro")')
        let saída = document.querySelector('section#saída')
        let estação
        switch (mês.toUpperCase()) {
            case 'JANEIRO': case 'FEVEREIRO': case 'MARÇO':
                estação = 'do verão'
                window.alert(`No mês de ${mês}, estamos na estação ${estação}.`)
            break
            case 'ABRIL': case 'MAIO': case 'JUNHO':
                estação = 'do outono'
                window.alert(`No mês de ${mês}, estamos na estação ${estação}.`)
            break
            case 'JULHO': case 'AGOSTO': case 'SETEMBRO':
                estação = 'do inverno'
                window.alert(`No mês de ${mês}, estamos na estação ${estação}.`)
            break
            case 'OUTUBRO': case 'NOVEMBRO': case 'DEZEMBRO':
                estação = 'da primavera'
                window.alert(`No mês de ${mês}, estamos na estação ${estação}.`)
            break
            default:
                window.alert(`${mês} é um mês inválido (Inexistente ou com erro gramático)`)
            break
        }
    break
    case num = 8:
        let numb1 = Number(prompt('primeiro valor:'))
        let numb2 = Number(prompt('segundo valor:'))
        let op = Number(prompt(`valor informado: ${numb1} e ${numb2}. \n[1] Somar \n[2] Subtrair \n[3] Multiplicar \n[4] Dividir`))
        switch (op) {
            case 1:
                let numb3 = numb1+numb2
                window.alert(`${numb1} + ${numb2} = ${numb3}`)
            break
            case 2:
                let numb4 = numb1-numb2
                window.alert(`${numb1} - ${numb2} = ${numb4}`)
            break
            case 3:
                let numb5 = numb1*numb2
                window.alert(`${numb1} X ${numb2} = ${numb5}`)
            break
            case 4:
                let numb6 = numb1/numb2
                window.alert(`${numb1} / ${numb2} = ${numb6}`)
            break
            default:
                window.alert(`<p> OPÇÃO INVÁLIDA ! VOCÊ DIGITOU ${n1} e ${n2}.`)
            break
    }
    break
    case num = 9:
        let computador = 0
        sortear()
        function sortear() {
        let minim = 1
        let maxim = 100
        let difer = maxim - minim
        let aleat = Math.random()
        computador = minim + Math.trunc(difer * aleat)
        }
        jogar()
        function jogar() {
            let jogador = Number (window.prompt('Pensei em um número de 1 à 100\nTente adivinhá-lo\nQual é o seu palpite?'))
            if (jogador < computador) {
                window.alert(`Você falou ${jogador}. Meu número é MAIOR!`)
                jogar()
            } else if (jogador > computador) {
                window.alert(`Você falou ${jogador}. Meu número é MENOR`)
                jogar()
            } else if (jogador = computador) {
                window.alert(`PARABÉNS! Você acertou! Eu tinha sorteado o valor ${computador}!`)
            }
        }
        break
    case num = 10:
        let agoraaqui = new Date
        let anoatual = agoraaqui.getFullYear()
        let nascimen = Number(window.prompt(`Em que ano você nasceu?`))
        let idadehumano = anoatual - nascimen  
        window.alert(`Quem nasceu em ${nascimen} vai completar ${idadehumano} anos em ${anoatual}.`)
    break
    case num = 11:
        let mesesa = new Array('Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro')
        let semanaa = new Array ('Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado')
        let agoraaa = new Date
        let saidaa = document.getElementById('saida')
        let diaa= agoraaa.getDate()
        let mesa = agoraaa.getMonth()
        let anoa = agoraaa.getFullYear()
        let sema = agoraaa.getDay()
        let horaa = agoraaa.getHours()
        let mina = agoraaa.getMinutes()
        window.alert(`Dia: ${diaa}\nMês: ${mesesa [mesa]}\nAno: ${anoa}\nDia da semana: ${semanaa [sema]}\nHora: ${horaa}\nMinutos: ${mina}`)
    break
    case num = 12:
        let numerousadoagora = Number (window.prompt('Digite um número: '))
        let tipoimparpar
        if (numerousadoagora % 2 == 0) {
            tipoimparpar = 'PAR'
        } else {
            tipoimparpar = 'ÍMPAR'
        }
        window.alert (`O número ${numerousadoagora} que foi digitado é ${tipoimparpar}!`)
    break
    default:
        let res = document.querySelector('section#saída')    
        res.innerHTML += `Não existe nenhum site relacionado à esse número! Tente novamente por favor! <p>`
        break
    }
}