const nameInput = document.getElementById('amigo');
const addButton = document.querySelector('.button-add');
const drawButton = document.querySelector('.button-draw');
const nameList = document.getElementById('listaAmigos');
const resultDisplay = document.getElementById('resultado');

let names = [];

addButton.addEventListener('click', agregarAmigo);

function agregarAmigo() {
    const name = nameInput.value.trim();

    if (!name) {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }

    names.push(name);

    nameInput.value = '';

    updateNameList();
}

function updateNameList() {
    nameList.innerHTML = '';
    names.forEach(name => {
        const listItem = document.createElement('li');
        listItem.textContent = name;
        nameList.appendChild(listItem);
    });
}

drawButton.addEventListener('click', sortearAmigo);

function sortearAmigo() {
    if (names.length === 0) {
        alert('No hay nombres en la lista para realizar el sorteo.');
        return;
    }

    const randomIndex = Math.floor(Math.random() * names.length);
    const secretFriend = names[randomIndex];

    resultDisplay.innerHTML = `<li>El amigo secreto es: <strong>${secretFriend}</strong></li>`;
}