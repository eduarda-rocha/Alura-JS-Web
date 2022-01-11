import BotaoConcluido from "./concluiTarefa"
import BotaoDeletar from "./deletaTarefa"
    
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

