function clicou(){
    document.getElementById('agradecimento').innerHTML = '<b>Obrigado por clicar</b>'

    //console.log(document.getElementById('agradecimento'))
    //alert('Obrigado por clicar')
}

function redirecionar(){
    window.open('https://www.udemy.com/')
    //window.location.href = "https://www.udemy.com/"
}

function trocar(elemento) {    
    //document.getElementById('mousemove').innerHTML = 'Obg por passar o mouse'
    //alert('trocar texto')
    elemento.innerHTML = 'Obg por passar o mouse'
}

function voltar(elemento) {
   // document.getElementById('mousemove').innerHTML = 'Passe o mouse aqui'
   elemento.innerHTML = 'Passe o mouse aqui'
}

function load() {
    alert('página carregada')
}

function funcaoChange(elemento) {
    console.log(elemento.value)
}






// var validar
// function validaIdade(idade) {
//     validar
//     if (idade >= 18){
//     validar = true
// } else {
//     validar = false
// }
//  return validar
// }

// var idade = prompt('Qual é a sua idade?')
// validaIdade(idade)
// console.log(validar)

// function soma (n1, n2){
//     return n1 + n2
// }

// alert(soma(5, 10))




// var d = new Date()
// alert(d.getMinutes())
// alert(d.getHours())
// alert(d.getDay())

// var count 
// for (count=0; count <= 5; count++){
//     alert(count)
// }



// var count = 0
// while ( count < 5) {
//     console.log(count)
//     alert(count)
//     count++
// }


// var idade = prompt('Qual a sua idade?')


// if(idade >= 18) {
//     alert('maior de idade')
// } else {
//     alert('menor de idade')
// }
 






// var frutas = [{nome:'maça', cor:'vermelha'}, {nome:'uva', cor:'verde'}]
// console.log(frutas)
// alert(frutas[1].nome)


// var fruta = {nome:'maça', cor:'vermelha'}
// console.log(fruta.nome);
// alert(fruta.cor)

// var lista = ['maça', 'pera', 'laranja']
// lista.push('uva')
// // lista.pop()

// console.log(lista)
// console.log(lista.toString())
// console.log(lista.join(' - '))



// var nome = 'Tom'
// var n1= 5
// var n2 = 3
// var frase = 'Japão é o melhor time do mundo'
// //alert(`${nome} tem ${idade} anos`)
// //alert(idade + idade2)
// console.log(nome)
// console.log(n1 * n2)
// console.log(frase.toLowerCase())
// //alert(frase.replace('Japão', 'Brasil'))

