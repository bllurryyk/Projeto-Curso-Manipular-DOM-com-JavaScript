const criarTarefa = (evento) => {

    evento.preventDefault();

    const lista = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form-input]');
    const valor = input.value;

    const tarefa = document.createElement('li');
    tarefa.classList.add('task');
    const conteudo = `<p clas="content">${valor}</p>`;

    tarefa.innerHTML = conteudo;

    lista.appendChild(tarefa);
    input.value = "";
}

const cliqueBotao = document.querySelector('[data-form-button]');

cliqueBotao.addEventListener('click', criarTarefa);



