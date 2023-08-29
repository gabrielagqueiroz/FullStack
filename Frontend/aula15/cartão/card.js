function mostrarVerso() {
    frente.style.display = 'none'; //não visivel
    verso.style.display = 'block' // visivel
    verso.classList.add('animate__fadeIn'); // classList (lista da classe css adiciona a classe)
}

function mostrarFrente() {
    verso.style.display = 'none';
    frente.style.display = 'block';
    frente.classList.add('animate__fadeIn');
}