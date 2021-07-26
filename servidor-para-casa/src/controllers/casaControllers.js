
const contatosJson = require("../models/contatos.json");

const getAll = (request, response) => {
   response.status(200).send(contatosJson) 
};

const getByName = (request, response) => {
    const nomeRequirido = request.query.nome
    const contatoFiltrado = contatosJson.find(contato => contato.nome == nomeRequirido)

    response.status(200).send(contatoFiltrado)
};

const getById = (request, response) => {
    const idRequerido = request.params.id

    const contatoFiltrado = contatosJson.find(tarefa => tarefa.id == idRequerido);

    response.status(200).send(contatoFiltrado)
}   

 const criarContato = (request, response) => {

    const nomeRequerido = request.body.nome
    const celularRequerido = request.body.celular
    const redesSociaisRequerida = request.body.redesSociais

    const novoContato = {
        id:contatosJson.length+1,
        nome: nomeRequerido,
        celular: celularRequerido,
        redesSociais:redesSociaisRequerida 
    }  
    contatosJson.push(novoContato);
    response.status(200).send(novoContato);

};
  
const deletarContato = (request, response) => {
     const idRequerido = request.params.id;

     const contatoFiltrado = contatosJson.find(contato => contato.id == idRequerido);

     const indice = contatosJson.indexOf(contatoFiltrado);

     console.log(indice);
    
     contatosJson.splice(indice, 1);

     response.status(200).send(
         [
             {
                 "Mensagem":"Contato deletado com sucesso "
             },
             contatosJson
         ]
     )

 }

 module.exports = {
     getAll,
     getByName,
     getById,
     criarContato,
     deletarContato
 };