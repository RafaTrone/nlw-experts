const perguntas = [
    {
      pergunta: "O que é JavaScript?",
      respostas: [
        "Uma linguagem de programação para desenvolvimento de páginas estáticas",
        "Um framework para desenvolvimento web",
        "Uma linguagem de programação para desenvolvimento web",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a função do operador '===' em JavaScript?",
      respostas: [
        "Comparação estrita de igualdade, checando o valor e o tipo",
        "Atribuição de valor",
        "Comparação de igualdade, checando apenas o valor",
      ],
      correta: 0
    },
    {
      pergunta: "O que é uma variável em JavaScript?",
      respostas: [
        "Um tipo de dado",
        "Um valor constante",
        "Um contêiner para armazenar dados",
      ],
      correta: 2
    },
    {
      pergunta: "Qual função é usada para imprimir algo no console em JavaScript?",
      respostas: [
        "print()",
        "console.log()",
        "write()",
      ],
      correta: 1
    },
    {
      pergunta: "Qual declaração é usada para definir uma função em JavaScript?",
      respostas: [
        "função minhaFuncao()",
        "definir minhaFuncao()",
        "function minhaFuncao()",
      ],
      correta: 2
    },
    {
      pergunta: "O que é uma 'arrow function' em JavaScript?",
      respostas: [
        "Uma função que desenha setas",
        "Uma função que opera em vetores",
        "Uma forma mais curta de escrever uma função",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a função do método 'addEventListener'?",
      respostas: [
        "Para remover um evento de um elemento",
        "Para adicionar um evento a um elemento",
        "Para criar um elemento no DOM",
      ],
      correta: 1
    },
    {
      pergunta: "O que é um 'array' em JavaScript?",
      respostas: [
        "Um tipo de dado que representa uma sequência de caracteres",
        "Um tipo de dado que representa uma coleção ordenada de elementos",
        "Um tipo de dado que representa um único valor",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do método 'querySelector'?",
      respostas: [
        "Para selecionar múltiplos elementos do DOM",
        "Para selecionar um único elemento do DOM",
        "Para modificar o conteúdo de um elemento do DOM",
      ],
      correta: 1
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Uma linguagem de programação",
        "Um formato de arquivo de dados",
        "Uma representação da estrutura de um documento HTML/XML como uma árvore",
      ],
      correta: 2
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
   
   const corretas = new Set()
  
   const totalDePerguntas = perguntas.length
   const mostrarTotal = document.querySelector('#acertos span')
   mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
   // laço que retorna todas as perguntas (10)
  for(const item of perguntas) {
      const quizItem = template.content.cloneNode( true)
      quizItem.querySelector('h3').textContent = item.pergunta
  
      // laço que retorna todas as respostas de cada pergunta
      for(let resposta of item.respostas){
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
  
        dt.querySelector('input').onchange = (event) => {
          const estaCorreta = event.target.value == item.correta
          
          corretas.delete(item)
          if(estaCorreta){
            corretas.add(item)
          }
          
          mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        }
  
        quizItem.querySelector('dl').appendChild(dt)
      }
      // remove o primeiro item 
      quizItem.querySelector('dl dt').remove()
  
      // coloca a pergunta na tela
      quiz.appendChild(quizItem)
    
  }