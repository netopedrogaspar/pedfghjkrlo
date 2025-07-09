const moveButton = document.getElementById('moveButton');
const box = document.getElementById('box');

// Variável para controlar a posição do quadrado
let position = 0;

// Função que move o quadrado
function moveBox() {
  position += 100; // A cada clique, move 100px
  box.style.transform = `translateX(${position}px)`; // Aplica o movimento para a direita

  // Se o quadrado ultrapassar a tela, ele volta para o início
  if (position > window.innerWidth) {
    position = 0;
    box.style.transform = `translateX(${position}px)`;
  }
}

// Adicionando o evento de clique no botão
moveButton.addEventListener('click', moveBox);