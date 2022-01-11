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

export default BotaoDeletar