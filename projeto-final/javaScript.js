/*
 6.1 O que são variáveis e constantes? Exemplos

 Variáveis e constantes são espaços na memória do código que guardam alguma informação 
 que dermos e podem ser mudadas, constantes têm o mesmo objetivo com a diferença de que
 não podem ser mudadas depois.
 Ex: var nome = "Nathalia"
 const nacionalidade = "brasileira"

6.2 O que são comandos de decisão? Exemplos

São comandos que só podem ser executados se uma condição for atendida.
Ex: if(num < 10){
        document.write ("O número é menor que 10");
    }else{
        document.write ("O número é maior que 10");
    }

6.3 O que são loops? Exemplos

Loop são ferramentas de repetição, nós usamos quando queremos que alguma ação se 
repita e não vamos ficar escrevendo ela várias vezes 
Ex: for(i = 0, i < 10, i++){
        document.write (i + '<br>');
    }
var i = 0
    while(i < 10){
        document.write (i + '<br>');
        i++;
    }

6.4 O que são funções? Exemplos

Funções são comandos que nos permitem criar um novo bloco de código que executa uma ação que desejo,
para que não precisemos repetir aquele pedaço várias vezes 

function mostrarAlerta(){
    alert("Sou um alerta");
}
mostrarAlerta();

6.5 O que são escopos? Exemplos

Escopo é o nível de acessibilidade das variáveis em partes específicas do código,
existem 2 tipos, os escopos globais e os locais.
Escopos globais-> são acessíveis de todo o código
Escopos locais-> são acessíveis somente em um pedaço do código 

6.6 O que são inputs e outputs? Exemplos

Inputs-> como são chamados os comandos que usamos para a entrada de dados, como o prompt.
Outputs-> como são chamados os comandos que usamos para a saída de dados, como o document.write e o alert.

6.7 O que são array? Exemplos

Os arrays são basicamente listas que fazemos para armazenar algumas informações.
Ex: var fruteira = ["banana", "maçã", "manga", "pêra"]

6.8 O que são objetos? Exemplos

Eles são uma forma de descrição de armazenamento de informações de alguma coisa, 
esse comando tem as propriedades que servem para separar cada informação.
Ex: var pessoa = {nome: "Nathalia", idade:"18", sexo:"feminino"}

6.9 O que são camelCase, PascalCase, kibab-case e snake_case (explicar cada uma separadamente)

São tipos de escrita que são usadas em códigos.

    camelCase-> se escreve tudo junto, a primeira letra  da primeira palavra é minúscula e as
                primeiras letras das outras palavras levam a letra maiúscula.

    PascalCase-> se escreve tudo junto e todas as primeiras letras de cada palavra são maiúsculas.

    kibab-case-> se escreve separando as palavras com tracinhos e todas as letras são minúsculas.

    snake_case-> se escreve separando as palavras com anderline e todas as letras são minúsculas.

6.10 Qual a diferença entre caminho absoluto e caminho relativo?

Caminho absoluto é o caminho exato para aquela pasta no armazenamento do computador (geralmente não muito usado).

Caminho Relativo é um caminho que pode ser aplicado de um jeito genérico para todos.

6.11 Qual a diferença entre os operadores &&, ||, == e != ?

&&-> é a porta lógica E, é uma condição que diz que aquela determinada parte do código só vai funcionar 
    se as duas condições impostas forem verdade.

||-> é a porta lógica OU, é uma condição que diz que aquela determinada parte do código vai funcionar 
    se pelo menos uma das duas condições impostas for verdade.

==-> é uma comparação exata, quer comparar que um número é o mesmo que o outro ou não.

!=-> é uma comparação para saber se um número é diferente do outro ou não.

6.12 O que é EPER e para que serve ?

Entender, Planejar, Executar e Revisar.
O EPER serve para ajudar no desenvolvimento de tarefas, quebrando ela para ser resolvida
em partes menores e tornar o raciocínio mais fácil

6.13 O que são pilha e fila ? Exemplos

Ambos são modos de organização do array

Pilha-> Na pilha o 1º componente a entrar é o último a sair, pois estão dispostos como em uma pilha de livros.
    Ex: var fruteira = ["banana", "maçã", "manga", "pêra"], na pilha a banana seria a última a sair.

Fila-> Na fila o 1º a entrar é o 1º a sair, pois estão dispostos como em uma fila de banco.
    Ex: var fruteira = ["banana", "maçã", "manga", "pêra"], na fila a banana seria a primeira a sair.

6.14 Qual a diferença entre HTML, javaScript e CSS?

O html funciona como a estrutura do código, o CSS funciona como a parte estética do código e no javaScript 
que damos vida ao código.

*/