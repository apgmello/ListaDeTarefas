const elementoLista = document.querySelector("ul")
const elementoInput = document.querySelector("input")
const elementoBotao = document.querySelector("button")

const tarefas = []

function mostrarTarefas() {
    elementoLista.innerHTML = ''

    for (tarefa of tarefas) {
        const elementoTarefa = document.createElement('li');
        const label = document.createElement('label');
        label.innerText = tarefa;

        const elementoLink = document.createElement('a');
        elementoLink.className = 'lixeira';
        const pos = tarefas.indexOf(tarefa);

        const linkText = document.createTextNode('🗑️');
        elementoLink.appendChild(linkText);

        elementoLink.setAttribute('href', '#');
        elementoLink.setAttribute('onclick', `deletaTarefa(${pos})`);

        const elementoDiv = document.createElement('div');
        elementoDiv.style.display = 'block';
        elementoDiv.style.width = '100%';
        
        elementoTarefa.appendChild(label);
        elementoTarefa.appendChild(elementoDiv);
        elementoTarefa.appendChild(elementoLink);
        elementoLista.appendChild(elementoTarefa);
        elementoInput.focus();
    }
}

mostrarTarefas()

function addTarefas() {
    const textoTarefa = elementoInput.value
    tarefas.push(textoTarefa)
    elementoInput.value = ''

    mostrarTarefas()
}

function input_keypress() {
    if (event.key == 'Enter')
        addTarefas();
}

elementoBotao.setAttribute('onclick', 'addTarefas()')
elementoInput.setAttribute('onkeydown', 'input_keypress()');

function deletaTarefa(pos) {
    tarefas.splice(pos, 1)
    mostrarTarefas()
}