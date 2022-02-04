(() => {
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
    
        tarefa.appendChild(BotaoConcluir());
        input.value = "";
    };
    
    const cliqueBotao = document.querySelector('[data-form-button]');
    
    cliqueBotao.addEventListener('click', criarTarefa);
    
    // Component: Botão
    const BotaoConcluir = () => {
        const botaoConcluir = document.createElement('button');
        botaoConcluir.classList.add('check-button');
        botaoConcluir.innerText = 'Concluir';
    
        botaoConcluir.addEventListener('click', concluirTarefa);
    
        return botaoConcluir;
    };
    
    const concluirTarefa = (evento) => {
        const botaoConcluir = evento.target;
        const tarefaFinalizada = botaoConcluir.parentElement;
    
        tarefaFinalizada.classList.toggle('done');
    };
})();