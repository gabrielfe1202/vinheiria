function smoothScroll(target, duration) {
  var target = document.querySelector(target);
  var targetPosition = target.getBoundingClientRect().top;
  var startPosition = window.pageYOffset;
  var distance = targetPosition - startPosition;
  var startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    var timeElapsed = currentTime - startTime;
    var run = easing(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function easing(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

var about = document.querySelector('#sobre');
var contact = document.querySelector('#contato');

var aboutLink = document.querySelector('nav a[href="#sobre"]');
var contactLink = document.querySelector('nav a[href="#contato"]');

if (aboutLink != null) {
  aboutLink.addEventListener('click', function () {
    smoothScroll('#sobre', 1000);
  });
}

if (contactLink != null) {
  contactLink.addEventListener('click', function () {
    smoothScroll('#contato', 1000);
  });
}

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

var conteudos = {
  "conteudos": [
    {
      "cod": "1",
      "titulo": "Gouda com tinto",
      "texto": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur risus lectus, pretium sed fringilla vel, viverra sed dolor. Aenean nec elementum nulla, et dapibus ante. Nulla nec elementum sapien. In porta mattis nulla, nec lacinia metus sollicitudin vitae. In hac habitasse platea dictumst. Sed in magna tempor, vestibulum neque et, fermentum neque. Nullam nec vestibulum magna. Donec lectus justo, ornare porta dictum a, iaculis sit amet tortor. Nullam suscipit dapibus ante sed imperdiet. Mauris massa nulla, congue ac diam id, laoreet tempor velit. Nam vestibulum rhoncus magna id fermentum. Morbi convallis magna ut mi molestie, et commodo ligula mollis. Proin et lacus augue. Donec pellentesque pellentesque massa. Nulla imperdiet lacus non augue elementum ornare. Curabitur porttitor tempus arcu, ",
      "chamada": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur risus lectus, pretium sed fringilla vel, viverra sed dolor. Aenean nec elementum nulla, et dapibus ante. Nulla nec elementum sapien",
      "imagem": "img/macarrao.jpg"
    }
  ]
}

var loja = {
  "pratos": [
    {
      "cod": "1",
      "nome": "Espaguete da Felicidade",
      "descricao": "Ingredientes: Espaguete com almôndegas em forma de sorrisos e molho de tomate. Valor nutricional: Proteínas (carne), carboidratos (macarrão) e gordura (molho). Alergênicos: Glúten (macarrão), carne.",
      "preco": "29,90",
      "imagem": "img/macarrao.jpg",
      "categoria": "principal",
      "avaliacoes": [
        {
          "nome": "Thiago Ventura",
          "avaliação": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ullamcorper euismod euismod. Nunc ac scelerisque tellus. Aenean sed convallis orci, eu pharetra ante. Vivamus sapien nisl, euismod ac varius eu, dignissim id dui. Aenean ut eros sed mi malesuada varius. Vestibulum suscipit bibendum quam non faucibus. Praesent auctor, nibh vel luctus cursus, ipsum urna pharetra mauris, eget pretium erat libero quis eros. In porta magna tortor, consectetur ultrices tortor aliquet vel. Fusce malesuada magna erat, ut blandit tortor mattis et.",
          "nota": 3.5
        }
      ]
    },
    {
      "cod": "2",
      "nome": "Risoto Risível",
      "descricao": "Ingredientes: Risoto de cogumelos com parmesão em formato de palhaço. Valor nutricional: Proteínas (queijo), carboidratos (arroz) e gordura (queijo). Alergênicos: Laticínios (queijo).",
      "preco": "29,90",
      "imagem": "img/risoto.jpg",
      "categoria": "principal",
      "avaliacoes": [
        {
          "nome": "Fábio Porchat",
          "avaliação": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ullamcorper euismod euismod. Nunc ac scelerisque tellus. Aenean sed convallis orci, eu pharetra ante. Vivamus sapien nisl, euismod ac varius eu, dignissim id dui. Aenean ut eros sed mi malesuada varius. Vestibulum suscipit bibendum quam non faucibus. Praesent auctor, nibh vel luctus cursus, ipsum urna pharetra mauris, eget pretium erat libero quis eros. In porta magna tortor, consectetur ultrices tortor aliquet vel. Fusce malesuada magna erat, ut blandit tortor mattis et.",
          "nota": 3.5
        }
      ]
    },
    {
      "cod": "3",
      "nome": "Pizzas Engraçadas",
      "descricao": "Ingredientes: Pizzas em formatos divertidos com diversas coberturas e queijo derretido. Valor nutricional: Proteínas (queijo e carnes), carboidratos (massa) e gordura (queijo e carnes).Alergênicos: Glúten (massa), laticínios (queijo",
      "preco": "29,90",
      "imagem": "img/pizza.jpg",
      "categoria": "principal",
      "avaliacoes": [
        {
          "nome": "Bruna louise",
          "avaliação": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ullamcorper euismod euismod. Nunc ac scelerisque tellus. Aenean sed convallis orci, eu pharetra ante. Vivamus sapien nisl, euismod ac varius eu, dignissim id dui. Aenean ut eros sed mi malesuada varius. Vestibulum suscipit bibendum quam non faucibus. Praesent auctor, nibh vel luctus cursus, ipsum urna pharetra mauris, eget pretium erat libero quis eros. In porta magna tortor, consectetur ultrices tortor aliquet vel. Fusce malesuada magna erat, ut blandit tortor mattis et.",
          "nota": 3.5
        }
      ]
    },
    {
      "cod": "4",
      "nome": "Salada de Risadas",
      "descricao": "Ingredientes: Salada de frutas frescas com molho de iogurte e granola em formato de sorrisos. Valor nutricional: Rica em fibras e vitaminas (frutas e granola), moderada em gordura (iogurte).Alergênicos: Laticínios (iogurte).",
      "preco": "12,90",
      "imagem": "img/salada.jpg",
      "categoria": "entradas",
      "avaliacoes": [
        {
          "nome": "Victor Sarro",
          "avaliação": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ullamcorper euismod euismod. Nunc ac scelerisque tellus. Aenean sed convallis orci, eu pharetra ante. Vivamus sapien nisl, euismod ac varius eu, dignissim id dui. Aenean ut eros sed mi malesuada varius. Vestibulum suscipit bibendum quam non faucibus. Praesent auctor, nibh vel luctus cursus, ipsum urna pharetra mauris, eget pretium erat libero quis eros. In porta magna tortor, consectetur ultrices tortor aliquet vel. Fusce malesuada magna erat, ut blandit tortor mattis et.",
          "nota": 3.5
        },
        {
          "nome": "Victor Sarro",
          "avaliação": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ullamcorper euismod euismod. Nunc ac scelerisque tellus. Aenean sed convallis orci, eu pharetra ante. Vivamus sapien nisl, euismod ac varius eu, dignissim id dui. Aenean ut eros sed mi malesuada varius. Vestibulum suscipit bibendum quam non faucibus. Praesent auctor, nibh vel luctus cursus, ipsum urna pharetra mauris, eget pretium erat libero quis eros. In porta magna tortor, consectetur ultrices tortor aliquet vel. Fusce malesuada magna erat, ut blandit tortor mattis et.",
          "nota": 4.5
        }
      ]
    },
    {
      "cod": "5",
      "nome": "Pão do bobo",
      "descricao": "Ingredientes: Pão recheado com queijo derretido e bacon crocante. Valor nutricional: Proteínas (queijo e bacon), carboidratos (pão), gordura (bacon). Alergênicos: Glúten (pão), laticínios (queijo), carne (bacon).",
      "preco": "14,50",
      "imagem": "img/pao.jpg",
      "categoria": "entradas",
      "avaliacoes": [
        {
          "nome": "Fábio Porchat",
          "avaliação": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ullamcorper euismod euismod. Nunc ac scelerisque tellus. Aenean sed convallis orci, eu pharetra ante. Vivamus sapien nisl, euismod ac varius eu, dignissim id dui. Aenean ut eros sed mi malesuada varius. Vestibulum suscipit bibendum quam non faucibus. Praesent auctor, nibh vel luctus cursus, ipsum urna pharetra mauris, eget pretium erat libero quis eros. In porta magna tortor, consectetur ultrices tortor aliquet vel. Fusce malesuada magna erat, ut blandit tortor mattis et.",
          "nota": 3.5
        }
      ]
    },
    {
      "cod": "6",
      "nome": "Tiras de riso",
      "descricao": "Ingredientes: Tiras de queijo empanadas servidas com molho de pimenta Valor nutricional: Rica em proteínas (queijo), gordura (empanado) e carboidratos (molho de pimenta). Alergênicos: Laticínios (queijo), glúten (empanado).",
      "preco": "14,50",
      "imagem": "img/queijo.jpg",
      "categoria": "entradas",
      "avaliacoes": [
        {
          "nome": "Bruna louise",
          "avaliação": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ullamcorper euismod euismod. Nunc ac scelerisque tellus. Aenean sed convallis orci, eu pharetra ante. Vivamus sapien nisl, euismod ac varius eu, dignissim id dui. Aenean ut eros sed mi malesuada varius. Vestibulum suscipit bibendum quam non faucibus. Praesent auctor, nibh vel luctus cursus, ipsum urna pharetra mauris, eget pretium erat libero quis eros. In porta magna tortor, consectetur ultrices tortor aliquet vel. Fusce malesuada magna erat, ut blandit tortor mattis et.",
          "nota": 3.5
        }
      ]
    },
    {
      "cod": "7",
      "nome": "Limona",
      "descricao": "Ingredientes: Limonada com gás em garrafas com rótulos divertidos. Valor nutricional: Baixas calorias. Fonte de vitamina C. Alergênicos: Nenhum.",
      "preco": "14,00",
      "imagem": "img/limonada.jpg",
      "categoria": "bebidas",
      "avaliacoes": [
        {
          "nome": "Victor Sarro",
          "avaliação": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ullamcorper euismod euismod. Nunc ac scelerisque tellus. Aenean sed convallis orci, eu pharetra ante. Vivamus sapien nisl, euismod ac varius eu, dignissim id dui. Aenean ut eros sed mi malesuada varius. Vestibulum suscipit bibendum quam non faucibus. Praesent auctor, nibh vel luctus cursus, ipsum urna pharetra mauris, eget pretium erat libero quis eros. In porta magna tortor, consectetur ultrices tortor aliquet vel. Fusce malesuada magna erat, ut blandit tortor mattis et.",
          "nota": 3.5
        }
      ]
    },
    {
      "cod": "8",
      "nome": "Suco do Sorriso",
      "descricao": "Ingredientes: Suco de laranja e manga servido em copos com canudos engraçados. Valor nutricional: Vitaminas das frutas, baixas calorias. Alergênicos: Nenhum.",
      "preco": "14,90",
      "imagem": "img/suco.jpg",
      "categoria": "bebidas",
      "avaliacoes": [
        {
          "nome": "Bruna louise",
          "avaliação": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ullamcorper euismod euismod. Nunc ac scelerisque tellus. Aenean sed convallis orci, eu pharetra ante. Vivamus sapien nisl, euismod ac varius eu, dignissim id dui. Aenean ut eros sed mi malesuada varius. Vestibulum suscipit bibendum quam non faucibus. Praesent auctor, nibh vel luctus cursus, ipsum urna pharetra mauris, eget pretium erat libero quis eros. In porta magna tortor, consectetur ultrices tortor aliquet vel. Fusce malesuada magna erat, ut blandit tortor mattis et.",
          "nota": 3.5
        }
      ]
    },
    {
      "cod": "9",
      "nome": "Coquetel do Bobo",
      "descricao": "Ingredientes: Coquetel de frutas com guarda-chuvas coloridos. Valor nutricional: Baixas calorias. Alergênicos: Pode variar de acordo com os ingredientes.",
      "preco": "19,90",
      "imagem": "img/drink.jpg",
      "categoria": "bebidas",
      "avaliacoes": [
        {
          "nome": "Thiago Ventura",
          "avaliação": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ullamcorper euismod euismod. Nunc ac scelerisque tellus. Aenean sed convallis orci, eu pharetra ante. Vivamus sapien nisl, euismod ac varius eu, dignissim id dui. Aenean ut eros sed mi malesuada varius. Vestibulum suscipit bibendum quam non faucibus. Praesent auctor, nibh vel luctus cursus, ipsum urna pharetra mauris, eget pretium erat libero quis eros. In porta magna tortor, consectetur ultrices tortor aliquet vel. Fusce malesuada magna erat, ut blandit tortor mattis et.",
          "nota": 3.5
        }
      ]
    },
  ]
}

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
  if (pratos[i].categoria == cat || cat == 'all' || cat == null) {
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
}

var conteudoExibir = conteudos["conteudos"][cod - 1];

if (document.getElementById("titulo_conteudo") != null) {  
  document.getElementById("titulo_conteudo").innerHTML = conteudoExibir.titulo
  document.getElementById("texto_conteudo").innerHTML = conteudoExibir.texto  
  document.getElementById("imagem_conteudo").src = conteudoExibir.imagem
}

if (document.getElementById("conteudos") != null) {
  document.getElementById("conteudos").innerHTML = container
}


if (document.getElementById("pratos") != null) {
  document.getElementById("pratos").innerHTML = container
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

    if(user == "user" && pass == "1234"){
      window.location.href = "pedidoFechado.html"
    }else{
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
  // Verifica se há produtos armazenados no localStorage
  const produtos = JSON.parse(localStorage.getItem("produtos")) || [];

  // Seleciona o elemento div onde o carrinho será exibido
  const carrinhoDiv = document.getElementById("carrinho");

  // Limpa o conteúdo anterior
  carrinhoDiv.innerHTML = "";

  // Cria uma tabela para exibir os produtos e quantidades
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
  // Itera sobre os produtos e adiciona cada um à tabela
  produtos.forEach((item, index) => {
    subtotal += parseFloat(item.preco.replace(",", ".")) * parseInt(item.quantidade)
    console.log(subtotal)
    const row = tabela.insertRow();
    row.innerHTML = `
          <td style="text-align: right;"><img src="${item.imagem}" alt="${item.produto}" class="produto-img"></td>
          <td>${item.produto}</td>
          <td>R$ ${item.preco}</td>
          <td>${item.quantidade}</td>
          <td><button onclick="removerProduto(${index})" class="btn btn-danger">Remover</button></td>
      `;
  });

  // Adiciona a tabela à div do carrinho
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

function fecharPedido(){
  localStorage.setItem("subTotalPedido", total);
  localStorage.setItem("totalPedido", total);
  localStorage.setItem("fretePedido", frete);
  localStorage.setItem("descontoPedido", desconto);
  window.location.href = "login.html"
}

// Função para remover um produto do carrinho
function removerProduto(index) {
  let produtos = JSON.parse(localStorage.getItem("produtos")) || [];
  produtos.splice(index, 1); // Remove o produto do array
  localStorage.setItem("produtos", JSON.stringify(produtos)); // Atualiza o localStorage
  carregarCarrinho(); // Recarrega o carrinho
}

function adicionarProduto() {
  // Recupera os valores dos campos de entrada  
  const produto = prato.nome;
  const preco = prato.preco;
  const imagem = prato.imagem;
  const quantidadeInput = document.getElementById("quantidade");

  const quantidade = parseInt(quantidadeInput.value);

  // Verifica se os campos estão preenchidos
  if (produto.trim() === "" || isNaN(quantidade) || quantidade <= 0) {
    alert("Por favor, preencha a quantidade corretamente.");
    return;
  }

  // Verifica se já há produtos armazenados no localStorage
  let produtos = JSON.parse(localStorage.getItem("produtos")) || [];

  // Verifica se o produto já existe na lista
  const index = produtos.findIndex(item => item.produto === produto);

  if (index !== -1) {
    // Se o produto já existe, atualiza a quantidade
    produtos[index].quantidade += quantidade;
  } else {
    // Se o produto não existe, adiciona à lista de produtos
    produtos.push({ produto, quantidade, preco, imagem });
  }

  // Armazena a lista atualizada de produtos no localStorage
  localStorage.setItem("produtos", JSON.stringify(produtos));

  quantidadeInput.value = "1";

  // Informa ao usuário que o produto foi adicionado com sucesso
  new PNotify({
    title: 'Adicionado',
    text: "Produto adicionado ao carrinho com sucesso!",
    type: 'success',
    styling: 'bootstrap3'
  });

}
