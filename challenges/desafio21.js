// Desafio 9 - Remova o último ingrediente do sanduíche Cheddar McMelt.

db.produtos.updateOne(
    { nome: "Cheddar McMelt" },
    { $pop: { ingredientes: 1 } },
    );
  
db.produtos.find(
    {},
    { _id: false, nome: true, ingredientes: true },
  );