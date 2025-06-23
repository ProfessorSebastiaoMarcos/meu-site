const produtos = [
  { nome: "Sabonete Natural", preco: 15.0, categoria: "cosmetico" },
  { nome: "Shampoo Orgânico", preco: 25.0, categoria: "cosmetico" },
  { nome: "Granola Artesanal", preco: 18.5, categoria: "alimento" },
  { nome: "Mel Puro", preco: 22.0, categoria: "alimento" },
];

const containerProdutos = document.getElementById("produtos");
const selectCategoria = document.getElementById("categoria");
const totalEl = document.getElementById("total");

function exibirProdutos(lista) {
  containerProdutos.innerHTML = "";

  lista.forEach((produto) => {
    const div = document.createElement("div");
    div.className = "produto";
    div.innerHTML = `<strong>${produto.nome}</strong><br>R$ ${produto.preco.toFixed(2)}`;
    containerProdutos.appendChild(div);
  });

  const total = lista.reduce((acc, item) => acc + item.preco, 0);
  totalEl.textContent = `Total: R$ ${total.toFixed(2)}`;
}

function filtrarProdutos() {
  const categoriaSelecionada = selectCategoria.value;

  // Uso de Operador Ternário
  // const produtosFiltrados =
  //   categoriaSelecionada === "tudo"
  //     ? produtos
  //     : produtos.filter((p) => p.categoria === categoriaSelecionada);

  //Faz a mesma coisa
  let produtosFiltrados;

  if (categoriaSelecionada === "tudo") {
    produtosFiltrados = produtos;
  } else {
    produtosFiltrados = produtos.filter((p) => p.categoria === categoriaSelecionada);
  }


  exibirProdutos(produtosFiltrados);
}

// // Apenas para demonstrar o uso de map:
// const nomesCaixaAlta = produtos.map((p) => p.nome.toUpperCase());
// console.log("Produtos em caixa alta:", nomesCaixaAlta);

selectCategoria.addEventListener("change", filtrarProdutos);

// Inicializa com todos os produtos
exibirProdutos(produtos);
