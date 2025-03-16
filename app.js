let amigos = [];

function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombreAmigo = input.value.trim();
    
    if (nombreAmigo === '') {
        alert('Por favor, ingrese un nombre válido.');
        return; // Si el campo está vacío, no hacemos nada
    }
    
    if (!isNaN(nombreAmigo)) {
        alert('No se permite ingresar números. Por favor, ingrese un nombre válido.');
        return; // Si es un número, no lo agregamos
    }
    
    amigos.push(nombreAmigo); 
    
    input.value = '';

    actualizarLista();
}

function actualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Limpiar la lista actual
    
    // Agregar cada amigo como un ítem de lista
    amigos.forEach((amigo) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('No hay amigos en la lista para sortear.');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li><strong>El amigo secreto es: ${amigoSorteado}</strong></li>`;
}
