/***LISTA DE PRODUTOS***/
//json de produtos
let products = [
  {
    id: "1",
    nome: "Camisa Xadrez - Rosa",
    preco: "39,90",
    img: "../assets/img/feminino/1.jpg",
    categoria: "feminino",
  },
  {
    id: "2",
    nome: "Casaco Xadrez - Branco",
    preco: "59,90",
    img: "../assets/img/feminino/2.jpg",
    categoria: "feminino",
  },
  {
    id: "3",
    nome: "Blusa Regata - Branca",
    preco: "29,90",
    img: "../assets/img/feminino/3.jpg",
    categoria: "feminino",
  },
  {
    id: "4",
    nome: "Blusinha - Bege",
    preco: "49,90",
    img: "../assets/img/feminino/4.jpg",
    categoria: "feminino",
  },
  {
    id: "5",
    nome: "Blusa 3/4 - Oncinha",
    preco: "49,90",
    img: "../assets/img/feminino/5.jpg",
    categoria: "feminino",
  },
  {
    id: "6",
    nome: "T-shirt - Preta",
    preco: "39,90",
    img: "../assets/img/feminino/6.jpg",
    categoria: "feminino",
  },
  {
    id: "7",
    nome: "Camisa Manga Longa Stitch - Rosa",
    preco: "39,90",
    img: "../assets/img/infantil/1.jpg",
    categoria: "infantil",
  },
  {
    id: "8",
    nome: "Camiseta Sonic - Branca",
    preco: "39,90",
    img: "../assets/img/infantil/2.jpg",
    categoria: "infantil",
  },
  {
    id: "9",
    nome: "Vestido Xadrez - Vermelho",
    preco: "59,90",
    img: "../assets/img/infantil/3.jpg",
    categoria: "infantil",
  },
  {
    id: "10",
    nome: "Camiseta Dinossauros - Amarela",
    preco: "24,90",
    img: "../assets/img/infantil/4.jpg",
    categoria: "infantil",
  },
  {
    id: "11",
    nome: "Blusa Minnie - Vermelha",
    preco: "49,90",
    img: "../assets/img/infantil/5.jpg",
    categoria: "infantil",
  },
  {
    id: "12",
    nome: "Vestido Oncinha",
    preco: "59,90",
    img: "../assets/img/infantil/6.jpg",
    categoria: "infantil",
  },
  {
    id: "13",
    nome: "Camisa Xadrez Manga Longa - Branca",
    preco: "49,90",
    img: "../assets/img/masculino/1.jpg",
    categoria: "masculino",
  },
  {
    id: "14",
    nome: "Blusa de Frio com Gola - Azul Escuro",
    preco: "69,90",
    img: "../assets/img/masculino/2.jpg",
    categoria: "masculino",
  },
  {
    id: "15",
    nome: "Camisa Rick and Morty - Preta",
    preco: "59,90",
    img: "../assets/img/masculino/3.jpg",
    categoria: "masculino",
  },
  {
    id: "16",
    nome: "Camisa Polo - Cinza",
    preco: "49,90",
    img: "../assets/img/masculino/4.jpg",
    categoria: "masculino",
  },
  {
    id: "17",
    nome: "Camisa Havaí - Azul Claro",
    preco: "24,90",
    img: "../assets/img/masculino/5.jpg",
    categoria: "masculino",
  },
  {
    id: "18",
    nome: "Camisa Manga Curta - Bege",
    preco: "34,90",
    img: "../assets/img/masculino/6.jpg",
    categoria: "masculino",
  },
];

/***SELEÇÃO DE CATEGORIAS***/

//categoria atual no menu
let currentCategory = "todos";
// itens selecionados
let selectedItems = [];
//quando termina de carregar
window.onload = function () {
  //nav botao todos
  document.getElementById("nav-todos").onclick = function () {
    currentCategory = "todos";
    generateProductElements();
  };
  //nav botao feminino
  document.getElementById("nav-feminino").onclick = function () {
    currentCategory = "feminino";
    generateProductElements();
  };
  //nav botao masculino
  document.getElementById("nav-masculino").onclick = function () {
    currentCategory = "masculino";
    generateProductElements();
  };
  //nav botao infantil
  document.getElementById("nav-infantil").onclick = function () {
    currentCategory = "infantil";
    generateProductElements();
  };
  // Gera a lista inicial de produtos
  generateProductElements();
};

/***BUSCADOR***/

// Função para buscar produtos
function searchProducts() {
  let searchInput = document.getElementById("search-input").value.toLowerCase(); // Obter o valor da entrada de busca e converter para minúsculas

  let searchResults = products.filter((product) =>
    product.nome.toLowerCase().includes(searchInput)
  ); // Filtrar os produtos com base no valor de busca

  currentCategory = "search"; // Definir a categoria atual como "search" para exibir os resultados da busca
  generateProductElements(searchResults); // Gerar elementos de produtos com base nos resultados da busca
}

// Lidar com o evento de clique no botão de busca
document.getElementById("search-button").onclick = searchProducts;

// Atualizar a função generateProductElements para aceitar um parâmetro opcional (results) para exibir os resultados da busca
function generateProductElements(results = null) {
  let productContainer = document.getElementById("product-container");

  // Limpar o contêiner de produtos
  productContainer.innerHTML = "";

  // Obter a lista de produtos com base nos resultados da busca ou na categoria atual
  let productList = results ? results : products;

  // Se nenhum produto for encontrado
  if (productList.length === 0) {
    let noProductMessage = document.createElement("p");
    noProductMessage.innerText = "Nenhum produto foi encontrado.";
    noProductMessage.className = "text-center";
    productContainer.appendChild(noProductMessage);
  } else {
    // Gerar novos elementos de produto
    for (let i = 0; i < productList.length; i++) {
      let product = productList[i];

      if (
        currentCategory === "todos" ||
        product.categoria === currentCategory ||
        currentCategory === "search"
      ) {
        let columnDiv = document.createElement("div");
        columnDiv.className = "col-12 col-sm-6 col-md-4 col-lg-3 mb-4";

        let productCard = document.createElement("div");
        productCard.className =
          "card h-100 d-flex flex-column justify-content-between justify-content-center align-items-center";

        let img = document.createElement("img");
        img.src = product.img;
        img.className = "card-img-top mx-auto d-block";
        productCard.appendChild(img);

        let cardBody = document.createElement("div");
        cardBody.className =
          "card-body d-flex flex-column justify-content-center align-items-center";

        let title = document.createElement("h5");
        title.innerText = product.nome;
        title.className = "card-title text-center bold";
        cardBody.appendChild(title);

        let price = document.createElement("p");
        price.innerText = product.preco;
        price.className = "card-text text-center";
        cardBody.appendChild(price);

        productCard.appendChild(cardBody);

        let cardFooter = document.createElement("div");
        cardFooter.className =
          "card-footer no-background d-flex justify-content-center align-items-center";

        let button = document.createElement("input");
        button.type = "button";
        button.value = "Adicionar";
        button.className = "btn btn-primary btn-sm";
        button.onclick = function () {
          addItemToCart(product);
        };
        cardFooter.appendChild(button);

        productCard.appendChild(cardFooter);

        columnDiv.appendChild(productCard);
        productContainer.appendChild(columnDiv);
      }
    }
  }
}

/***CARRINHO***/

let cartItems = []; // Array para armazenar os itens do carrinho

function addItemToCart(product) {
  alert("Item " + product.nome + " adicionado ao carrinho!");

  let existingProduct = cartItems.find((p) => p.id === product.id);
  if (existingProduct) {
    existingProduct.quantidade += 1;
  } else {
    let cartItem = { ...product, quantidade: 1 };
    cartItems.push(cartItem);
  }

  //update do cart modal
  updateCartModal();
}

//modal carrinho
function updateCartModal() {
  let carrinhoModalBody = document.getElementById("carrinhoModalBody");
  carrinhoModalBody.innerHTML = "";

  for (let product of cartItems) {
    let productCard = document.createElement("div");
    productCard.className = "d-flex align-items-center mb-3";

    let img = document.createElement("img");
    img.src = product.img;
    img.className = "img-thumbnail me-3";
    img.style.width = "100px";
    productCard.appendChild(img);

    let title = document.createElement("h6");
    title.innerText = product.nome;
    title.className = "mb-0";
    productCard.appendChild(title);

    let quantity = document.createElement("p");
    quantity.innerText = "Quantidade: " + product.quantidade;
    quantity.className = "mb-0 ms-auto";
    productCard.appendChild(quantity);

    let price = document.createElement("p");
    price.innerText = "Preço: " + product.preco;
    price.className = "mb-0 ms-auto";
    productCard.appendChild(price);

    carrinhoModalBody.appendChild(productCard);
  }
}
