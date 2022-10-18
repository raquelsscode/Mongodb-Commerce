// Adicione ketchup aos ingredientes para todos os sanduíches
// menos o McChicken, garantindo que não haja duplicidade nos ingredientes.
// Para isso, escreva no arquivo desafio5.js duas queries, nesta ordem: /*

db.produtos.updateMany(
    { nome: { $ne: "McChicken" } },
    { $addToSet: { ingredientes: "ketchup" } },
  );
  
db.produtos.find(
    {},
    { nome: true, ingredientes: true, _id: false },
  );