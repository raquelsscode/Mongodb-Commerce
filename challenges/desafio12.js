// Adicione ketchup aos ingredientes para todos os sanduíches
// menos o McChicken, garantindo que não haja duplicidade nos ingredientes.

db.produtos.updateMany(
    { nome: { $ne: "McChicken" } },
    { $addToSet: { ingredientes: "ketchup" } },
  );
  
db.produtos.find(
    {},
    { nome: true, ingredientes: true, _id: false },
  );