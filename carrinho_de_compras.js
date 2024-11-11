// fazer  um carrinho de compras que salva num array os itens
let carrinho = [];
function adcionaritem(nome, preco, quantidade) {
  let item = {
    nome: nome,
    preco: preco,
    quantidade: quantidade,
  };
  carrinho.push(item);
  item = JSON.stringify(item);
  item = JSON.parse(item);
  // console.log(JSON.stringify(item));
  console.log(`${item.nome}-Foi adicionado ao carrinho`);
}
adcionaritem("camisa", 49.99, 2);
adcionaritem("calca", 59.99, 3);

function exibircarrinho() {
  console.log("itens no carrinho");
  carrinho.forEach(function (item, index) {
    //pode ser trocada  a palavra function por seta(=>)e ela entraria dps do () do index
    console.log(
      `${index + 1} ${item.nome} - preco: ${item.preco} - quantidade: ${
        item.quantidade
      }`
    );
  });
}
console.log(exibircarrinho());
