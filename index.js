let computerNumber 

// userNumbers é uma variável array vazia,
//que é onde irei armazenar os números onde usuário irá tentar na aplicação.
let userNumbers = []
let attempts = 0
let maxguesses = 10 

function newGame() {
    window.location.reload()
}


// Essa function init é a inicialização de tudo 
// toda vez que a página é carregada o computador vai lá
// e escolhe um número para ele. E esse init tem que colocar na 
// body lá no html
function init() {
    // Sempre colocando o math.random dentro do math.flor para 
    // arredondar o número
    computerNumber = Math.floor(Math.random() * 100 + 1)
    console.log(computerNumber)
}


// Criamos uma function para comparar os números que são 
// digitados na array userNumbers
function compareNumbers() {
    // Primeiro vamos identificar onde vai ser digitado o número
    // que está no input tipo number com id inputbox.
    // Como é um número temos que deixar o getElement dentro na Number 
    const userNumber = Number(document.getElementById('inputBox').value)

    if (userNumber > 100) {
        alert("Please enter a number between 1 and 100");
        document.getElementById('inputBox').value = '';
        return;
    }

    // Com o userNumbers.push ele irá pegar os valores adicionados ao userNumber
    userNumbers.push(' ' + userNumber)
    // Com este abaixo é para retornar os valores que iremos adicionar no
    // userNumber que no html está com id guesses e em seguida colocamos o 
    // .innerHTML para ser inserido o valor a Html e aparecer para o usuário.
    // Ai ele vai retornar os números digitados do userNumber para a array userNumbers 
    // e assim irá aparecer para o usuário.
    document.getElementById('guesses').innerHTML = userNumbers
    // Lá no inputBox no html temos que colocar o onechange e o nome da function
    // para que ao pressionar o botão enter é para ele chamar a função 
    // function compareNumber e executar a ação.

    // Aqui com criamos uma condição com uma quantidade máxima de tentativas
    // a pergunta que ele faz é attempts (tentativas) é menor que maxguesses (quantidades máxima de tenatativas)
if (attempts < maxguesses) {
         // Criamos a condição caso o usuário jogue um número aproximado que tem que 
    // acertar seja acima ou abaixo e quando acertar e então aparecerá uma mensagem
    // Sendo assim pegamos o userNumber que é onde colocamos o nosso número
    // e colocamos o sinal de maior > com o computerNumber, que é 
    // onde o computador escolhe um número aleatório para desafiar o usuário.
    if (userNumber > computerNumber) {
        document.getElementById('textOutput').innerHTML = "Your number is too hight"
        //Esse abaixo é para quando o usuário colocar o número altomaticamente apagar que escreveu
        document.getElementById('inputBox').value = ' '
        // Como criamos uma variável lá em cima, aqui no if e else pego a 
        // variável attemps e adiciono ++ para que cada jogada seja contada.
        attempts++
        document.getElementById('attempts').innerHTML = attempts
    }
    else if (userNumber < computerNumber) {
        document.getElementById('textOutput').innerHTML = "Your number is too low"
        document.getElementById('inputBox').value = ' '
        attempts++
        document.getElementById('attempts').innerHTML = attempts
    }
    else {
        document.getElementById('textOutput').innerHTML = "That's it, my noble! You got it right"
        attempts++
        document.getElementById('attempts').innerHTML = attempts
        document.getElementById('inputBox').setAttribute('Readonly', 'Readonly')
    }
}

else {
    document.getElementById('textOutput').innerHTML = 'You lose! the computer number was ' + computerNumber 
    document.getElementById('inputBox').setAttribute('Readonly', 'Readonly')
}

}

