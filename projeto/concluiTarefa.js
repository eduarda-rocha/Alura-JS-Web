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

export default BotaoConcluido