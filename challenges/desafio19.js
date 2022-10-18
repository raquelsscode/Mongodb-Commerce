// Remova o item cebola de todos os sanduíches.
// Para isso, escreva no arquivo desafio7.js duas queries, nesta ordem: */

db.produtos.updateMany(
    {},
    { $pull: { ingredientes: "cebola" } },
    );
  
db.produtos.find(
    {},
    { _id: false, nome: true, ingredientes: true },
  );