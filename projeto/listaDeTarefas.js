(() => {
    const criarTarefa = (evento) => {
    evento.preventDefault()

    const lista = document.querySelector('[data-list]')
    const input = document.querySelector('[data-form-input]')
    const valor = input.value
    
    const tarefa = document.createElement('li')
    const conteudo = `<p class="content">${valor}</p>`

    tarefa.innerHTML = conteudo
    tarefa.classList.add('task')

    tarefa.appendChild(BotaoConcluido())
    tarefa.appendChild(BotaoDeletar())
    lista.appendChild(tarefa)

    input.value=""
}

const novaTarefa = document.querySelector('[data-form-button]')

novaTarefa.addEventListener('click', criarTarefa)

const BotaoConcluido = () => {
    const botaoConcluido = document.createElement('button')
    botaoConcluido.classList.add('check-button')
    botaoConcluido.innerText = 'CONCLUIR'

    botaoConcluido.addEventListener('click' , concluindoTarefa)

    return botaoConcluido
}

const concluindoTarefa = (evento) => {
    const botaoConcluido = evento.target
    const tarefaCompleta = botaoConcluido.parentElement

    tarefaCompleta.classList.toggle('done')
}

const BotaoDeletar = () => {
    const botaoDeletar = document.createElement('button')
    botaoDeletar.innerText = 'DELETAR'

    botaoDeletar.addEventListener('click', deletandoTarefa)

    return botaoDeletar
}

const deletandoTarefa = (evento) => {
    const botaoDeletar = evento.target

    const tarefaCompleta = botaoDeletar.parentElement

    tarefaCompleta.remove()

    return botaoDeletar
}
})()