const $dropdown = $(".dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "show";

$(window).on("load resize", function () {
  if (this.matchMedia("(min-width: 768px)").matches) {
    $dropdown.hover(
      function () {
        const $this = $(this);
        $this.addClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "true");
        $this.find($dropdownMenu).addClass(showClass);
      },
      function () {
        const $this = $(this);
        $this.removeClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "false");
        $this.find($dropdownMenu).removeClass(showClass);
      }
    );
  } else {
    $dropdown.off("mouseenter mouseleave");
  }
});

const searchParams = new URLSearchParams(window.location.search);
var cat = searchParams.get('categoria')
console.log(cat);
if (document.getElementById("titulo_loja") != null) {
  if (cat == 'bebidas') {
    document.getElementById("titulo_loja").innerHTML = "Bebidas"
  } else if (cat == 'principal') {
    document.getElementById("titulo_loja").innerHTML = "Pratos principais"
  } else if (cat == "entradas") {
    document.getElementById("titulo_loja").innerHTML = "Entradas"
  }
}

var cod = parseInt(searchParams.get('cod'))
console.log(cod);

var prato = loja["pratos"][cod - 1]
console.log(prato)

if (document.getElementById("titulo_prato") != null) {
  document.getElementById("titulo_prato").innerHTML = prato.nome
  document.getElementById("desc_prato").innerHTML = prato.descricao
  document.getElementById("preco_prato").innerHTML = "R$ " + prato.preco
  document.getElementById("imagem_prato").src = prato.imagem
  var cont_avaliacao = ''
  for (var i = 0; i < prato.avaliacoes.length; i++) {
    cont_avaliacao += `<div class="avaliacao">`
    cont_avaliacao += `<div style="display: flex;flex-flow: wrap">`
    cont_avaliacao += `<p class="nome_avaliacao">${prato.avaliacoes[i].nome}:</p><div class="starFundos"><div class="starAvaliacao" style="width:${prato.avaliacoes[i].nota * 20}%"></div></div>`
    cont_avaliacao += `</div>`
    cont_avaliacao += `<p class="texto_avaliacao">${prato.avaliacoes[i].avaliação}</p>`
    cont_avaliacao += `</div>`
  }
  document.getElementById("avaliacoes").innerHTML = cont_avaliacao
} else {

  var pratos = loja["pratos"];
  var container = '';
  for (var i = 0; i < pratos.length; i++) {
    if (pratos[i].categoria == cat || cat == 'all' || cat == null) {
      container += '<div class="col-md-10 row prato">';
      container += '<div class="col-md-4">';
      container += `<img class="imagem" src="${pratos[i].imagem}" style="width: 100%"/>`
      container += '</div>'
      container += '<div class="col-md-8">';
      if (cat == 'all' || cat == null) {
        container += `<p class="nome">${pratos[i].nome}<span style="font-size: 13px;font-weight: normal;">${pratos[i].categoria}</span></p>`
      } else {
        container += `<p class="nome">${pratos[i].nome}</p>`
      }
      container += `<a href='javascript: AdicionarFavoritos(${pratos[i].cod})' id="prod_${pratos[i].cod}"><i class="fa fa-heart-o iconeLike" aria-hidden="true"></i></a>`
      container += `<p class="descricao">${pratos[i].descricao}</p>`
      container += `<p class="preco">R$ ${pratos[i].preco}</p>`
      container += `<a class="botao" href="produto.html?cod=${pratos[i].cod}">Ver mais</a>`
      container += '</div>'
      container += '</div>'
    }
  }
  if (document.getElementById("pratos") != null) {
    document.getElementById("pratos").innerHTML = container
  }
}

container = "";
var conteudo = conteudos["conteudos"];

for (var i = 0; i < conteudos["conteudos"].length; i++) {
  container += '<div class="col-md-10 row prato">';
  container += '<div class="col-md-4">';
  container += `<img class="imagem" src="${conteudo[i].imagem}" style="width: 100%"/>`
  container += '</div>'
  container += '<div class="col-md-8">';
  container += `<p class="descricao">${conteudo[i].chamada}</p>`
  container += `<a class="botao" href="conteudo.html?cod=${conteudo[i].cod}">Ver mais</a>`
  container += '</div>'
  container += '</div>'
}

var conteudoExibir = conteudos["conteudos"][cod - 1];

if (document.getElementById("titulo_conteudo") != null) {
  document.getElementById("titulo_conteudo").innerHTML = conteudoExibir.titulo
  document.getElementById("texto_conteudo").innerHTML = conteudoExibir.texto
  document.getElementById("imagem_conteudo").src = conteudoExibir.imagem;
}

if (document.getElementById("conteudos") != null) {
  document.getElementById("conteudos").innerHTML = container
}




jQuery(document).ready(function () {

  jQuery('#form_contato').submit(function () {
    new PNotify({
      title: 'Enviado',
      text: "Sua mensagem foi enviada com sucesso, logo entraremos em contato",
      type: 'success',
      styling: 'bootstrap3'
    });
    return false;
  })

  jQuery('#login').submit(function () {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    if (user == "user" && pass == "1234") {
      window.location.href = "pedidoFechado.html"
      DeletaCarrinho()
    } else {
      document.getElementById("erroLogin").innerText = "Usuario ou senha invalidos"
    }    
    return false;
  })

});

var mais = document.querySelector(".quantidade .mais")
var menos = document.querySelector(".quantidade .menos")

if (mais != null) {
  mais.addEventListener('click', () => {
    var quant = document.getElementById("quantidade")
    if (quant.value == "") {
      quant.value == "0"
    }
    console.log(parseInt(quant.value) + 1)
    quant.value = parseInt(quant.value) + 1
  })


  menos.addEventListener('click', () => {
    var quant = document.getElementById("quantidade")
    if (quant.value == "") {
      quant.value == "0"
    } else {
      if (parseInt(quant.value) > 1) {
        console.log(parseInt(quant.value) - 1)
        quant.value = parseInt(quant.value) - 1
      }
    }
  })

}

function valida(s) {
  if (s == 1) {
    window.location.href = "home.html"
  } else {
    window.location.href = "https://www.dolly.com.br/"
  }
}

var total = 0;
var subtotal = 0;
var frete = 0;
var desconto = 0;

function carregarCarrinho() {
  const produtos = JSON.parse(localStorage.getItem("produtos")) || [];

  const carrinhoDiv = document.getElementById("carrinho");

  carrinhoDiv.innerHTML = "";

  const tabela = document.createElement("table");
  tabela.classList.add("table")
  tabela.innerHTML = `
      <tr>
          <th></th>
          <th>Produto</th>
          <th>preco</th>
          <th>Quantidade</th>
          <th>Ação</th>
      </tr>
  `;
  total = 0;
  subtotal = 0;
  frete = 0;

  produtos.forEach((item, index) => {
    subtotal += parseFloat(item.preco.replace(",", ".")) * parseInt(item.quantidade)
    console.log(subtotal)
    const row = tabela.insertRow();
    row.innerHTML = `
          <td style="text-align: right;"><img src="${item.imagem}" alt="${item.produto}" class="produto-img"></td>
          <td>${item.produto}</td>
          <td>R$ ${item.preco}</td>
          <td>
            <div class="quantidade-buttons">
              <button onclick="diminuirQuantidade(${index})"><i class="fa fa-minus iconeMaisCarrinho" aria-hidden="true"></i></button>
              <input type="number" value="${item.quantidade}" onchange="editarQuantidade(${index}, this.value, this)">
              <button onclick="aumentarQuantidade(${index})"><i class="fa fa-plus iconeMaisCarrinho" aria-hidden="true"></i></button>
            </div>
          </td>
          <td><button onclick="removerProduto(${index})" class="btn btn-danger"><i class="fa fa-trash"></i></button></td>
      `;
  });


  carrinhoDiv.appendChild(tabela);
  document.getElementById("subtotal").innerText = "R$ " + subtotal.toFixed(2).toString().replace(".", ",");
  if (subtotal < 200) {
    frete = 23.5;
    document.getElementById("frete").innerText = "R$ " + frete.toFixed(2).toString().replace(".", ",");
  } else {
    frete = 0;
    document.getElementById("frete").innerText = "Grátis";
  }

  total = subtotal + frete;

  document.getElementById("total").innerText = "R$ " + total.toFixed(2).toString().replace(".", ",");

  if(produtos.length == 0){
    document.getElementById("lojaCarrinho").style.display = "none"
    document.getElementById("carrinhoVazio").style.display = "flex"
  }

}

function aplicarCupom() {
  const cupomInput = document.getElementById("cupom")

  if (cupomInput.value.replace(" ", "") == "FIAP2024") {
    desconto = total * 0.1;
    console.log(desconto);
    total = total - desconto;
    document.getElementById("total").innerText = "R$ " + total.toFixed(2).toString().replace(".", ",");
    document.getElementById("contCupom").style.display = "none";
    document.getElementById("desconto").style.display = "block";
    document.getElementById("desconto").innerText = "R$ " + desconto.toFixed(2).toString().replace(".", ",");
  } else {
    new PNotify({
      title: 'Erro',
      text: "Cupom inserido não é valido",
      type: 'error',
      styling: 'bootstrap3'
    });
  }


}

function fecharPedido() {
  localStorage.setItem("subTotalPedido", total);
  localStorage.setItem("totalPedido", total);
  localStorage.setItem("fretePedido", frete);
  localStorage.setItem("descontoPedido", desconto);
  window.location.href = "login.html"
}

function removerProduto(index) {
  let produtos = JSON.parse(localStorage.getItem("produtos")) || [];
  produtos.splice(index, 1);
  localStorage.setItem("produtos", JSON.stringify(produtos));
  carregarCarrinho();
}

function adicionarProduto() {
  const produto = prato.nome;
  const preco = prato.preco;
  const imagem = prato.imagem;
  const quantidadeInput = document.getElementById("quantidade");

  const quantidade = parseInt(quantidadeInput.value);

  if (produto.trim() === "" || isNaN(quantidade) || quantidade <= 0) {
    alert("Por favor, preencha a quantidade corretamente.");
    return;
  }

  let produtos = JSON.parse(localStorage.getItem("produtos")) || [];
  const index = produtos.findIndex(item => item.produto === produto);

  if (index !== -1) {
    produtos[index].quantidade += quantidade;
  } else {
    produtos.push({ produto, quantidade, preco, imagem });
  }

  localStorage.setItem("produtos", JSON.stringify(produtos));

  quantidadeInput.value = "1";

  new PNotify({
    title: 'Adicionado',
    text: "Produto adicionado ao carrinho com sucesso!",
    type: 'success',
    styling: 'bootstrap3'
  });

}

function editarQuantidade(index, novaQuantidade, elemento) {
  let produtos = JSON.parse(localStorage.getItem("produtos")) || [];
  if (novaQuantidade == "" || parseInt(novaQuantidade) < 1) {
    novaQuantidade = "1"
    elemento.value = "1"
  }
  produtos[index].quantidade = parseInt(novaQuantidade);
  localStorage.setItem("produtos", JSON.stringify(produtos));
  carregarCarrinho();
}

function aumentarQuantidade(index) {
  let produtos = JSON.parse(localStorage.getItem("produtos")) || [];
  produtos[index].quantidade++;
  localStorage.setItem("produtos", JSON.stringify(produtos));
  carregarCarrinho();
}

function diminuirQuantidade(index) {
  let produtos = JSON.parse(localStorage.getItem("produtos")) || [];
  if (produtos[index].quantidade > 1) {
    produtos[index].quantidade--;
    localStorage.setItem("produtos", JSON.stringify(produtos));
    carregarCarrinho();
  }
}

function DeletaCarrinho() {
  localStorage.removeItem("produtos");
  // carregarCarrinho();
}

function adicionarAvaliacao() {
  const strats = document.querySelector('input[name="rating"]:checked')
  const texto = document.getElementById("minhaAvaliacao");
  const nome = document.getElementById("nomeAvaliacao");  
  if (strats == null) {
    alert("Diga sua nota em estrelas")
  } else if (texto.value == "") {
    alert("Escreva sua avaliação")
  }else if (nome.value == "") {
    alert("Escreva seu nome")
  } else {

    console.log(parseFloat(strats.value))

    var cont_avaliacao = ''

    cont_avaliacao += `<div class="avaliacao">`
    cont_avaliacao += `<div style="display: flex;flex-flow: wrap">`
    cont_avaliacao += `<p class="nome_avaliacao">${nome.value}:</p><div class="starFundos"><div class="starAvaliacao" style="width:${parseFloat(strats.value) * 20}%"></div></div>`
    cont_avaliacao += `</div>`
    cont_avaliacao += `<p class="texto_avaliacao">${texto.value}</p>`
    cont_avaliacao += `</div>`

    document.getElementById("avaliacoes").innerHTML += cont_avaliacao
    nome.value = "";
    texto.value = "";
    document.getElementById("starhalf").checked = true;
  }
}

function AdicionarFavoritos(id){  
  var elemento = document.getElementById("prod_" + id)
  if(elemento.innerHTML.includes("-o")){
    elemento.innerHTML = "<i class='fa fa-heart iconeLikeativo' aria-hidden='true'></i>"
  }else{
    elemento.innerHTML = "<i class='fa fa-heart-o iconeLike' aria-hidden='true'></i>"
  }
  
}
