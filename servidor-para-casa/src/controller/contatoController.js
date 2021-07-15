const contatoJson = require("../models/contatos.json");

const getAll = (request, response) => {
    response.status(200).send(contatoJson)
};
const getByName = (request, response) => {
    const nomeRequirido = request.query.nome
    const contatoFiltrado = contatoJson.find(contato => contato.nome == nomeRequirido)

    response.status(200).send(contatoFiltrado)
};

const getById = (request, response) => {
    const idRequirido = request.params.id
    const contatoFiltrado = contatoJson.find(contato => contato.id == idRequirido)

    response.status(200).send(contatoFiltrado)
};
const criarContato = (request,response)=>{
    const nomeRequerido = request.body.nome;
    const celularRequerido = request.body.celular;
    const redesSociaisRequeridas = request.body.redesSociais;

    const novoContato = {
        id: contatoJson.length+1,
        nome: nomeRequerido,
        celular: celularRequerido,
        redesSociais: redesSociaisRequeridas 
  }   
    contatoJson.push(novoContato);
    response.status(200).send(novoContato);
};
const apagarContato = (request, response)=>{
    const idRequirido = request.params.id
    const contatoFiltrado = contatoJson.find(contato => contato.id == idRequirido)

    const indice = contatoJson.indexOf(contatoFiltrado);

    contatoJson.splice(indice,1);
    response.status(200).send(
        [
            {
                "mensagem": "Contato deletado com sucesso!"
            },
            contatoJson
        ]
        )
}

module.exports = {
    getAll,
    getByName,
    getById,
    criarContato,
    apagarContato

}