var numero1;
var numero2;
var questao;
var resultado;
var resultadoArredondado

function gerarNumeros() {
    // Gera dois números com uma casa decimal aleatórios entre 1 e 20
    numero1 = (Math.random() * 20).toFixed(2);
    numero2 = (Math.random() * 20).toFixed(2);
    questao = "Quanto é: " + numero1 + " x " + numero2;
    // Exibe a pergunta com os números gerados na página HTML
    document.getElementById("questao").textContent = "Pergunta: " + questao;
    // Retira a forma oculta do botao calcular
    botaoCalcular.classList.remove("oculto");

    //Limpa o campo que o usuário digitou
    document.getElementById("resposta").value = "";

    // Calcula o resultado da multiplicação
    resultado = (numero1 * numero2).toFixed(2);
    document.getElementById("resultado").textContent = "Resultado..." + resultado;
}

function calcularResultado() {
    var respostaUsuario = parseFloat(document.getElementById("resposta").value.replace(",", "."));
    document.getElementById("resultado").textContent = "Resultado: " + resultado;

    // Compara a resposta do usuário com o resultado
    if (respostaUsuario == resultado) {

        document.getElementById("resultado").textContent = "Resposta correta!";
        setTimeout(gerarNumeros, 1500);

    } else {

        document.getElementById("resultado").textContent = "Resposta incorreta!";

    }
    // Exibe o resultado na página HTML



}