
const tarefasJson = require("../models/tarefas.json");

const getAll = (request, response) => {
    response.status(200).send(tarefasJson)
}

const getById = (request, response) => {
    const idRequirido = request.params.id
    const tarefaFiltrada = tarefasJson.find(tarefa => tarefa.id == idRequirido)

    response.status(200).send(tarefaFiltrada)
}

const criarTarefa = (request,response)=>{
    const descricaoRequerida = request.body.descricao;
    const autorRequerido = request.body.autor;

    const novaTarefa = {
        id:"12345",
        data: new Date(),
        concluido: false,
        descricao: descricaoRequerida,
        autor: autorRequerido
    };

    tarefasJson.push(novaTarefa);
    response.status(200).send(novaTarefa);
};
//saber qual tarefa a requisição solicitou para apagar, pegar id pelo parâmetro, filtrar o jsom para achar a tarefa correta.apagar item da lista e enviar a resposta.
const apagarTarefa = (request, response)=>{
    const idRequerido = request.params.id;
    const tarefaFiltrada = tarefasJson.find(tarefa => tarefa.id == idRequerido);
    //indexOf()retorna o valor do index
    const indice = tarefasJson.indexOf(tarefaFiltrada);
    //splice(posição desejada da lista, quantidade de itens a serem removidos, elemento a ser incluído) remove elementos de uma lista na posição desejada e coloca outro no lugar. Se passado apenas 2 parâmetros, será apenas removido o elemento.
    tarefasJson.splice(indice,1);
    response.status(200).send(
        [
            {
                "mensagem": "Tarefa deletada com sucesso!"
            },
            tarefasJson
        ]
        )
}

module.exports = {
    getAll,
    getById,
    criarTarefa,
    apagarTarefa
}