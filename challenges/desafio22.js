// Adicione a quantidade de vendas dos sanduíches por dia da semana.

db.produtos.updateMany(
    {},
    { $set: { vendasPorDia: [0, 0, 0, 0, 0, 0, 0] } },
  );
  
db.produtos.updateOne(
    { nome: "Big Mac" },
    { $inc: { "vendasPorDia.3": 60 } },
  );
  
db.produtos.updateMany(
    { tags: { $in: ["bovino", "pão"] } },
    { $inc: { "vendasPorDia.6": 120 } },
  );
  
db.produtos.find(
    {},
    { _id: false, nome: true, vendasPorDia: true },
  );